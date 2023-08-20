import style from "./Contact.module.scss"
import * as React from "react";
import {contacts} from "../B6_EstimateForm/EstimateForm";
import {Form, Formik, FormikProps} from "formik";
import {TextField} from "../X_common/TextField/TextField";
import {TextareaField} from "../X_common/TextareaField/TextareaField";
import {ButtonContained, ColorEnum} from "../X_common/ButtonContained/ButtonContained";
import {SelectField} from "../X_common/SelectField/SelectField";
import {observer} from "mobx-react-lite";
import {ISendMailValues, menuItems, useMail} from "../../hooks/useMail";

export const Contact = observer(() => {
    const {
        initialValues, validate, onSubmit, loading
    } = useMail();

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
                            onSubmit={onSubmit}
                    >
                        {
                            (props: FormikProps<ISendMailValues>) => (
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


                </div>
            </div>

            <div className={style.rightPart}>
                <img src="/jpeg/B16_Contact/rightPart.jpg"
                     alt=""
                />
                <div className={style.mask}/>
            </div>

        </div>
    )
})
