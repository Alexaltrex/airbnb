import style from "./EstimateForm.module.scss"
import {TextField} from "../X_common/TextField/TextField";
import {Form, Formik, FormikErrors, FormikHelpers, FormikProps} from "formik";
import * as React from "react";
import {svgIcons} from "../../assets/svgIcons";
import {ButtonContained, ColorEnum} from "../X_common/ButtonContained/ButtonContained";

const contacts = [
    {
        icon: svgIcons.phone,
        label: "+1 (212) 621-5895"
    },
    {
        icon: svgIcons.mail,
        label: "triva@gmail.com"
    },
]


interface IValues {
    name: string
    phone: string
    mail: string
}

export const EstimateForm = () => {
    const initialValues = {
        name: "",
        phone: "",
        mail: "",
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
                                        <TextField name="mail" label="Mail"/>
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

                    <div className={style.window}/>

                </div>
            </div>


        </div>
    )
}
