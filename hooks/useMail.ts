import {useStore} from "../store/useStore";
import {FormikErrors, FormikHelpers} from "formik";
import {useState} from "react";
import codes from 'country-calling-code';

export interface ISendMailValues {
    name: string
    phone: string
    mail: string
    message: string
    chapter: string
    isoCode2: string
}

export const menuItems = [
    {value: "Choose subject", label: "Choose subject"},
    {value: "Chapter 1", label: "Chapter 1"},
    {value: "Chapter 2", label: "Chapter 2"},
    {value: "Chapter 3", label: "Chapter 3"},
    {value: "Chapter 4", label: "Chapter 4"},
    {value: "Chapter 5", label: "Chapter 5"},
]

export const useMail = () => {
    const { setAlert } = useStore();

    const [loading, setLoading] = useState(false);

    const initialValues: ISendMailValues = {
        name: "",
        phone: "",
        mail: "",
        message: "",
        chapter: "Choose subject",
        isoCode2: "AE",
    }

    const validate = (values: ISendMailValues): FormikErrors<ISendMailValues> => { // функция синхронной валидации
        const errors: FormikErrors<ISendMailValues> = {};
        if (!values.name) {
            errors.name = "Required"
        }
        if (!values.phone) {
            errors.phone = "Required"
        }
        if (!values.mail) {
            errors.mail = "Required"
        }
        if (values.chapter === "Choose subject") {
            errors.chapter = "Choose subject"
        }
        return errors
    };

    const onSubmit = async (
        values: ISendMailValues, // значения из формы
        formikHelpers: FormikHelpers<ISendMailValues> // методы FormikHelpers<Values>
    ) => {
        try {
            console.log(values);
            const {isoCode2, phone, ...rest} = values;
            setLoading(true);
            formikHelpers.setSubmitting(true);
            const response = await fetch('/api/send-contact-form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({phone: (codes.find(el => el.isoCode2 === isoCode2)?.countryCodes[0] || "666") + " " + phone, ...rest}),
            })
            const result = await response.json();
            console.log(result)

            if (result.error) {
                setAlert({
                    open: true,
                    severity: "error",
                    text: result.message
                })
            } else {
                setAlert({
                    open: true,
                    severity: "success",
                    text: result.message
                })
            }
        } catch (e: any) {
            setAlert({
                open: true,
                severity: "error",
                text: e.message
            })
            console.log(e.message);
        } finally {
            formikHelpers.setSubmitting(false);
            formikHelpers.resetForm();
            setLoading(false);
        }
    }

    return ({
        initialValues,
        validate,
        onSubmit,
        loading
    })
}
