import * as React from "react";
import {observer} from "mobx-react-lite";
import Modal from "@mui/material/Modal";
import {useStore} from "../../../store/useStore";
import style from "./CalculateModal.module.scss";
import {Form, Formik, FormikHelpers, FormikProps} from "formik";
import {SelectFieldWithLabel} from "../../X_common/SelectFieldWithLabel/SelectFieldWithLabel";
import {ButtonContained, ColorEnum} from "../../X_common/ButtonContained/ButtonContained";
import {areas, bedrooms, menuItemsArea, menuItemsBedrooms, menuItemsFurnishing, rentalPrices} from "../const";
import {ICalculateValues} from "../../../store/store";

export const CalculateModal = observer(() => {
    const { calculateModal, setCalculateModal, rental, setRental } = useStore()

    const onSubmit = (
        values: ICalculateValues, // значения из формы
        formikHelpers: FormikHelpers<ICalculateValues>
    ) => {
        formikHelpers.setSubmitting(false);
        setRental(values)
    }

    return (
        <Modal open={calculateModal}
               onClose={() => setCalculateModal(false)}
               className={style.calculateModal}
        >

            <Formik initialValues={rental}
                    onSubmit={onSubmit}
            >
                {
                    (props: FormikProps<ICalculateValues>) => (
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
                                    A <span>{bedrooms[rental.bedrooms]}</span> property in <span>{areas[rental.area]}</span> can earn on average
                                </p>

                                <div className={style.priceBlock}>
                                    {
                                        rentalPrices[rental.furnishing][rental.area][rental.bedrooms]
                                            ? <>
                                                <p>{rentalPrices[rental.furnishing][rental.area][rental.bedrooms]}</p>
                                                <p>Dhs</p>
                                                <p>/Daily</p>
                                            </>
                                            : <p></p>
                                    }
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
