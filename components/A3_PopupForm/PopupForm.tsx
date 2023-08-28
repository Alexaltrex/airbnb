import Modal from '@mui/material/Modal';
import {observer} from "mobx-react-lite";
import {useStore} from "../../store/useStore";
import style from "./PopupForm.module.scss";
import {Form, Formik, FormikProps} from "formik";
import {TextField} from "../X_common/TextField/TextField";
import {TextareaField} from "../X_common/TextareaField/TextareaField";
import {ButtonContained, ColorEnum} from "../X_common/ButtonContained/ButtonContained";
import * as React from "react";
import {SelectField} from "../X_common/SelectField/SelectField";
import {ISendMailValues, menuItems, useMail} from "../../hooks/useMail";
import {PhoneField} from "../X_common/PhoneField/PhoneField";

export const PopupForm = observer(() => {
    const {popupForm, setPopupForm} = useStore();

    const {
        initialValues, validate,
        onSubmit,
        loading
    } = useMail();

    return (
        <Modal open={popupForm}
               onClose={() => setPopupForm(false)}
        >
            <div className={style.popupForm}>
                <div className={style.headerBlock}>
                    <p>Unlock Your Property's Potential</p>
                    <p>Discover Triva's expert services to maximize your rental potential. Let's elevate your property's
                        success today!</p>
                </div>

                <Formik initialValues={initialValues}
                        validate={validate}
                        onSubmit={onSubmit}
                >
                    {
                        (props: FormikProps<ISendMailValues>) => (
                            <Form className={style.formBlock}>

                                <TextField name="name" label="Name" dark={false}/>
                                <PhoneField className={style.field} dark={false}/>
                                <TextField name="mail" label="Mail" className={style.field} dark={false}/>
                                <SelectField name="chapter"
                                             menuItems={menuItems}
                                    //label="Chapter"
                                             className={style.field}
                                             dark={false}
                                />
                                <TextareaField name="message"
                                               className={style.textarea}
                                               placeholder="Enter your message"
                                               dark={false}
                                />

                                <ButtonContained type="submit"
                                                 label={loading ? "Submitting..." : "Submit"}
                                                 color={ColorEnum.black}
                                                 className={style.submitBtn}
                                                 disabled={loading}
                                />
                                <ButtonContained label="Cancel"
                                                 color={ColorEnum.grey}
                                                 className={style.cancelBtn}
                                                 onClick={() => setPopupForm(false)}
                                />
                            </Form>
                        )
                    }
                </Formik>


            </div>


        </Modal>
    )
})
