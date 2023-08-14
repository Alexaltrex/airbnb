import style from "./EstimateForm.module.scss"
import {TextField} from "../X_common/TextField/TextField";
import {Form, Formik, FormikErrors, FormikHelpers, FormikProps} from "formik";
import * as React from "react";
import {svgIcons} from "../../assets/svgIcons";
import {ButtonContained, ColorEnum} from "../X_common/ButtonContained/ButtonContained";
import {TextareaField} from "../X_common/TextareaField/TextareaField";
import {SelectField} from "../X_common/SelectField/SelectField";

export const contacts = [
    {
        icon: svgIcons.phone,
        label: "+971 58 543 6008"
    },
    {
        icon: svgIcons.mail,
        label: "contact@trivahomes.com"
    },
];

const menuItems = [
    {value: "Chapter 1", label: "Chapter 1"},
    {value: "Chapter 2", label: "Chapter 2"},
    {value: "Chapter 3", label: "Chapter 3"},
    {value: "Chapter 4", label: "Chapter 4"},
    {value: "Chapter 5", label: "Chapter 5"},
];

interface IValues {
    name: string
    phone: string
    mail: string
    message: string
    chapter: string
}

export const EstimateForm = () => {
    const initialValues = {
        name: "",
        phone: "",
        mail: "",
        message: "",
        chapter: "Chapter 1"
    }
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
            console.log(values)
        } catch (e: any) {
            console.log(e.message)
        } finally {
            formikHelpers.setSubmitting(false);
        }
    }

    return (
        <div className={style.estimateForm}>

            <div className={style.header}>
                <div className={style.inner}>
                    <img src='/png/A0_Header/logo_white.png' alt="" className={style.logo}/>
                    <div className={style.contacts}>
                        {
                            contacts.map(({icon, label}, key) => (
                                <div className={style.contact} key={key}>
                                    <div className={style.icon}>
                                        {icon}
                                    </div>
                                    <p className={style.label}>{label}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            <div className={style.formBlock}>
                <div className={style.inner}>

                    <Formik initialValues={initialValues}
                            validate={validate}
                            onSubmit={onSubmitHandler}
                    >
                        {
                            (props: FormikProps<IValues>) => (
                                <Form className={style.form}>
                                    <p className={style.formTitle}>Estimate your revenue</p>
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

                                    <ButtonContained type="submit"
                                                     label="Submit"
                                                     color={ColorEnum.white}
                                                     className={style.submitBtn}
                                    />
                                </Form>
                            )
                        }
                    </Formik>

                    {/*<div className={style.window}/>*/}
                    <img src="/jpeg/B6_EstimateForm/background.jpg" alt=""  className={style.window}/>

                </div>
            </div>


        </div>
    )
}
