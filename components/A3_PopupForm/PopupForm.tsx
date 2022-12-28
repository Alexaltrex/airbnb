import Modal from '@mui/material/Modal';
import {observer} from "mobx-react-lite";
import {useStore} from "../../store/useStore";
import style from "./PopupForm.module.scss";
import {Form, Formik, FormikErrors, FormikHelpers, FormikProps} from "formik";
import {TextField} from "../X_common/TextField/TextField";
import {TextareaField} from "../X_common/TextareaField/TextareaField";
import {ButtonContained, ColorEnum} from "../X_common/ButtonContained/ButtonContained";
import * as React from "react";
import {SelectField} from "../X_common/SelectField/SelectField";

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
}

export const PopupForm = observer(() => {
    const {popupForm, setPopupForm} = useStore()

    const initialValues = {
        name: "",
        phone: "",
        mail: "",
        message: "",
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
        <Modal open={popupForm}
               onClose={() => setPopupForm(false)}
        >
            <div className={style.popupForm}>
                <div className={style.headerBlock}>
                    <p>Space for a header</p>
                    <p>Space for pop-up description, maximum length of two lines</p>
                </div>

                <Formik initialValues={initialValues}
                        validate={validate}
                        onSubmit={onSubmitHandler}
                >
                    {
                        (props: FormikProps<IValues>) => (
                            <Form className={style.formBlock}>
                                <div className={style.fieldWrapper}>
                                    <TextField name="name" label="Name"/>
                                    <TextField name="mail" label="Mail" className={style.field}/>
                                    <SelectField name="chapter"
                                                 menuItems={menuItems}
                                                //label="Chapter"
                                                 className={style.field}
                                    />
                                    <TextareaField name="message"
                                                   className={style.textarea}
                                                   placeholder="Enter your message"
                                    />
                                </div>

                                <ButtonContained type="submit"
                                                 label="Get started"
                                                 color={ColorEnum.black}
                                                 className={style.submitBtn}
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
