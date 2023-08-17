import style from "./Contact.module.scss"
import * as React from "react";
import {contacts} from "../B6_EstimateForm/EstimateForm";
import {Form, Formik, FormikErrors, FormikHelpers, FormikProps} from "formik";
import {TextField} from "../X_common/TextField/TextField";
import {TextareaField} from "../X_common/TextareaField/TextareaField";
import {ButtonContained, ColorEnum} from "../X_common/ButtonContained/ButtonContained";
import {SelectField} from "../X_common/SelectField/SelectField";
import {useState} from "react";
import clsx from "clsx";

interface IValues {
    name: string
    phone: string
    mail: string
    message: string
    chapter: string
}

const menuItems = [
    {value: "Chapter 1", label: "Chapter 1"},
    {value: "Chapter 2", label: "Chapter 2"},
    {value: "Chapter 3", label: "Chapter 3"},
    {value: "Chapter 4", label: "Chapter 4"},
    {value: "Chapter 5", label: "Chapter 5"},
]

export const Contact = () => {
    const initialValues = {
        name: "",
        phone: "",
        mail: "",
        message: "",
        chapter: "Chapter 1"
    }
    const [formMessage, setFormMessage] = useState('');
    const [formError, setFormError] = useState(false);

    const validate = (values: IValues): FormikErrors<IValues> => { // функция синхронной валидации
        const errors: FormikErrors<IValues> = {};
        if (!values.name) {
            errors.name = "Required"
        }
        if (!values.phone) {
            errors.phone = "Required"
        }
        if (!values.mail) {
            errors.mail = "Required"
        }
        return errors
    };
    const onSubmitHandler = async (
        values: IValues, // значения из формы
        formikHelpers: FormikHelpers<IValues> // методы FormikHelpers<Values>
    ) => {
        try {
            console.log("test");
            setFormMessage('');
            formikHelpers.setSubmitting(true);
            const response = await fetch('/api/send-contact-form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            })
            const result = await response.json()
            setFormMessage(result.message);
            setFormError(result.error);
        } catch (e: any) {
            setFormMessage(e.message);
            console.log(e.message);
        } finally {
            formikHelpers.setSubmitting(false);
        }
    }


    return (
        <div className={style.contact}>
            <div className={style.inner}>

                <div className={style.leftPart}>
                    <div className={style.socialContacts}>
                        {
                            contacts.map(({icon, label}, key) => (
                                <div className={style.socialContact} key={key}>
                                    <div className={style.icon}>
                                        {icon}
                                    </div>
                                    <p className={style.label}>{label}</p>
                                </div>
                            ))
                        }
                    </div>

                    <p className={style.formTitle}>
                        Estimate your revenue
                    </p>

                    <Formik initialValues={initialValues}
                            validate={validate}
                            onSubmit={onSubmitHandler}
                    >
                        {
                            (props: FormikProps<IValues>) => (
                                <Form className={style.form}>
                                    <div className={style.blocks}>
                                        <TextField name="name" label="Name"/>
                                        <TextField name="phone" label="Phone"/>
                                        <TextField name="mail" label="Mail"/>
                                        <SelectField name="chapter"
                                                     menuItems={menuItems}
                                            //label="Chapter"
                                        />
                                    </div>

                                    <TextareaField name="message"
                                                   className={style.textarea}
                                                   placeholder="Enter your message"
                                    />
                                    <div className={clsx({ [style.formMessage]: true, [style.formMessage_error]: formError })}>
                                        {formMessage}
                                    </div>
                                    <ButtonContained type="submit"
                                                     label="Get started"
                                                     color={ColorEnum.white}
                                                     className={style.submitBtn}
                                    />
                                </Form>
                            )
                        }
                    </Formik>


                </div>



            </div>

            <div className={style.rightPart}>
                <img src="/jpeg/B14_Subcategories/2.jpg"
                     alt=""
                />
                <div  className={style.mask}/>
            </div>

        </div>
    )
}
