import style from "./EstimateForm.module.scss"
import {TextField} from "../X_common/TextField/TextField";
import {Form, Formik, FormikProps} from "formik";
import * as React from "react";
import {svgIcons} from "../../assets/svgIcons";
import {ButtonContained, ColorEnum} from "../X_common/ButtonContained/ButtonContained";
import {TextareaField} from "../X_common/TextareaField/TextareaField";
import {SelectField} from "../X_common/SelectField/SelectField";
import {ISendMailValues, menuItems, useMail} from "../../hooks/useMail";
import {observer} from "mobx-react-lite";

import {FC} from "react";
import clsx from "clsx";
import {PhoneField} from "../X_common/PhoneField/PhoneField";

export const contacts = [
    {
        icon: svgIcons.phone,
        label: "+971 58 543 6008",
        href: "tel:+971585436008"
    },
    {
        icon: svgIcons.mail,
        label: "contact@trivahomes.com",
        href: "mailto:info@trivahomes.com"
    },
];

interface IEstimateForm {
    topRadius?: boolean
}

export const EstimateForm: FC<IEstimateForm> = observer(({ topRadius = true }) => {
    const {
        initialValues, validate, onSubmit, loading
    } = useMail();

    return (
        <div className={clsx({
            [style.estimateForm]: true,
            [style.estimateForm_topRadius]: topRadius,
        })}>

            <div className={style.header}>
                <div className={style.inner}>
                    <img src='/png/A0_Header/logo_white.png' alt="" className={style.logo}/>
                    <div className={style.contacts}>
                        {
                            contacts.map(({icon, label, href}, key) => (
                                <a className={style.contact}
                                   key={key}
                                   href={href}
                                   rel="noopener noreferrer nofollow"
                                >
                                    <div className={style.icon}>
                                        {icon}
                                    </div>
                                    <p className={style.label}>{label}</p>
                                </a>
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
                                        <PhoneField/>
                                        <TextField name="mail" label="E-mail"/>
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
                    <div className={style.window}/>
                    {/*<img src="/jpeg/B6_EstimateForm/background.jpg" alt=""  className={style.window}/>*/}

                </div>
            </div>


        </div>
    )
})
