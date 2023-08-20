import style from "./EstimateForm.module.scss"
import {TextField} from "../X_common/TextField/TextField";
import {Form, Formik, FormikErrors, FormikHelpers, FormikProps} from "formik";
import * as React from "react";
import {svgIcons} from "../../assets/svgIcons";
import {ButtonContained, ColorEnum} from "../X_common/ButtonContained/ButtonContained";
import {TextareaField} from "../X_common/TextareaField/TextareaField";
import {SelectField} from "../X_common/SelectField/SelectField";
import {ISendMailValues, menuItems, useMail} from "../../hooks/useMail";
import {observer} from "mobx-react-lite";

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

export const EstimateForm = observer(() => {
    const {
        initialValues, validate, onSubmit, loading
    } = useMail();

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
                            onSubmit={onSubmit}
                    >
                        {
                            (props: FormikProps<ISendMailValues>) => (
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
                                                     label={loading ? "Submitting..." : "Submit"}
                                                     color={ColorEnum.white}
                                                     className={style.submitBtn}
                                                     disabled={loading}
                                    />
                                </Form>
                            )
                        }
                    </Formik>

                    <img src="/jpeg/B6_EstimateForm/background.jpg" alt=""  className={style.window}/>

                </div>
            </div>


        </div>
    )
})
