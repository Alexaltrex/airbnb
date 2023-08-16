import {NextApiRequest, NextApiResponse} from "next";
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: process.env.SEND_FORM_EMAIL_SMTP_HOST,
    port: Number(process.env.SEND_FORM_EMAIL_SMTP_PORT),
    secure: true,
    auth: {
        user: process.env.SEND_FORM_EMAIL_USER,
        pass: process.env.SEND_FORM_EMAIL_PASS,
    }
});

const sendMail = async (data: {name: string, phone: string, mail: string, chapter: string, message: string }) => {
    const text = `
    Name: ${data.name}
    Phone: ${data.phone}
    Mail: ${data.mail}
    Chapter: ${data.chapter}
    Message: ${data.message}
    `
    const html = `
    <table>
    <tr><td>Name:</td><td>${data.name}</td></tr>
    <tr><td>Phone:</td><td>${data.phone}</td></tr>
    <tr><td>Mail:</td><td>${data.mail}</td></tr>
    <tr><td>Chapter:</td><td>${data.chapter}</td></tr>
    <tr><td>Message:</td><td>${data.message}</td></tr>
    </table>
    `
    const info = await transporter.sendMail({
        from: `${process.env.SEND_FORM_EMAIL_SENDER} <${process.env.SEND_FORM_EMAIL_USER}>`,
        to: process.env.SEND_FORM_EMAIL_USER,
        subject: 'Form submission',
        text,
        html,
    })
    console.log(info);
}

const isEmailValid = (email: string): boolean => {
    const emailRegexp = new RegExp(
        /^[a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-zA-Z0-9]@[a-zA-Z0-9][-\.]{0,1}([a-zA-Z][-\.]{0,1})*[a-zA-Z0-9]\.[a-zA-Z0-9]{1,}([\.\-]{0,1}[a-zA-Z]){0,}[a-zA-Z0-9]{0,}$/i
    )
    return emailRegexp.test(email)
};

const getDataObject = (message: string, error: boolean = false)  => ({ message, error})

function capitalizeFirstLetter(s: string): string {
    return s.charAt(0).toUpperCase() + s.slice(1);
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {

    if (req.method !== 'POST') {
        return res.status(405).send('Method Not Allowed');
    }

    const body = req.body
    const fields = Object.keys(body)

    for (const propKey of ['name', 'phone', 'mail', 'chapter', 'message']) {
        if (!fields.includes(propKey) || !Boolean(body[propKey])) {
            return res.status(400).json(getDataObject(`${capitalizeFirstLetter(propKey)} is not filled in.`, true));
        }
    }

    if (!isEmailValid(body.mail)) {
        return res.status(422).json(getDataObject('Email address is not valid.', true));
    }

    sendMail(body)
        .then(data => {
            console.log('sending email');
            console.dir(data);
            res.status(200).json(getDataObject(`The message was successfully sent.`));
        })
        .catch(error => {
            console.error('Error when sending email');
            console.error(error);
            res.status(500).json(getDataObject('Error sending form. Please, try again later.', true));
        })

}
