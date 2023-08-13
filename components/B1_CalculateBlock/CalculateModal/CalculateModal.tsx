import * as React from "react";
import {observer} from "mobx-react-lite";
import Modal from "@mui/material/Modal";
import {useStore} from "../../../store/useStore";
import style from "./CalculateModal.module.scss";
import {IValues, menuItemsArea, menuItemsBedrooms, menuItemsFurnishing} from "../CalculateBlock";
import {Form, Formik, FormikHelpers, FormikProps, useFormik} from "formik";
import {SelectFieldWithLabel} from "../../X_common/SelectFieldWithLabel/SelectFieldWithLabel";
import {ButtonContained, ColorEnum} from "../../X_common/ButtonContained/ButtonContained";

export const CalculateModal = observer(() => {
    const { calculateModal, setCalculateModal, rental, setRental } = useStore()

    const initialValues: IValues = {
        area: "Business Bay",
        bedrooms: "Studio",
        furnishing: "Premium",
    }

    const onSubmit = (
        values: IValues, // значения из формы
        formikHelpers: FormikHelpers<IValues> // методы FormikHelpers<Values>
    ) => {
        formikHelpers.setSubmitting(false);
    }

    const formik = useFormik({
        initialValues: rental,
        onSubmit
    });


    return (
        <Modal open={calculateModal}
               onClose={() => setCalculateModal(false)}
               className={style.calculateModal}
        >

            <Formik initialValues={initialValues}
                    onSubmit={onSubmit}
            >
                {
                    (props: FormikProps<IValues>) => (
                        <Form className={style.card}>
                            <p className={style.cardTitle}>
                                Vacation Rental Calculator
                            </p>
                            <div className={style.fields}>
                                <SelectFieldWithLabel name="area"
                                                      menuItems={menuItemsArea}
                                                      label="Area"
                                                      className={style.selectField}
                                                      backgroundGray={true}
                                />
                                <SelectFieldWithLabel name="bedrooms"
                                                      menuItems={menuItemsBedrooms}
                                                      label="Bedrooms"
                                                      className={style.selectField}
                                                      backgroundGray={true}
                                />
                                <SelectFieldWithLabel name="furnishing"
                                                      menuItems={menuItemsFurnishing}
                                                      label="Furnishing"
                                                      className={style.selectField}
                                                      backgroundGray={true}
                                />
                            </div>
                            <ButtonContained type="submit"
                                             label="Calculate"
                                             color={ColorEnum.black}
                                             className={style.submitBtn}
                            />


                            <div className={style.resultBlock}>
                                <p className={style.text}>
                                    A <span>{formik.values.bedrooms}</span> property in <span>{formik.values.area}</span> can earn on average
                                </p>

                                <div className={style.priceBlock}>
                                    <p>27</p>
                                    <p>Dhs</p>
                                    <p>/Daily</p>
                                </div>

                                <p className={style.info}>
                                    Our estimate takes into account realistic occupancies and comparable listings in your area.
                                </p>
                            </div>
                        </Form>
                    )
                }

            </Formik>



        </Modal>
    )
})
