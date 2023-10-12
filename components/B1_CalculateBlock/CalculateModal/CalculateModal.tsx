import * as React from "react";
import {observer} from "mobx-react-lite";
import Modal from "@mui/material/Modal";
import {useStore} from "../../../store/useStore";
import style from "./CalculateModal.module.scss";
import {Form, Formik, FormikErrors, FormikHelpers, FormikProps} from "formik";
import {SelectFieldWithLabel} from "../../X_common/SelectFieldWithLabel/SelectFieldWithLabel";
import {ButtonContained, ColorEnum} from "../../X_common/ButtonContained/ButtonContained";
import {
    areas,
    areasDefault,
    bedrooms, furnishings,
    menuItemsArea,
    menuItemsBedrooms,
    menuItemsFurnishing,
    rentalPrices
} from "../const";
import {ICalculateValues} from "../../../store/store";
import {SelectField} from "../../X_common/SelectField/SelectField";

export const CalculateModal = observer(() => {
    const {calculateModal, setCalculateModal, rental, setRental} = useStore()

    const validate = (values: ICalculateValues): FormikErrors<ICalculateValues> => {
        const errors: FormikErrors<ICalculateValues> = {};
        if (values.area === "Choose area") {
            errors.area = "Choose area"
        }
        if (values.bedrooms === "Choose bedrooms") {
            errors.bedrooms = "Choose bedrooms"
        }
        if (values.furnishing === "Choose furnishing") {
            errors.furnishing = "Choose furnishing"
        }
        return errors
    };

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
                    validate={validate}
                    onSubmit={onSubmit}
            >
                {
                    (props: FormikProps<ICalculateValues>) => {
                        const areaIndex = areasDefault.findIndex(el => el === props.values.area);
                        const furnishingIndex = furnishings.findIndex(el => el === props.values.furnishing);
                        const bedroomsIndex = bedrooms.findIndex(el => el === props.values.bedrooms);

                        // console.log("areaIndex: ", areaIndex);
                        // console.log("furnishingIndex: ", furnishingIndex);
                        // console.log("bedroomsIndex: ", bedroomsIndex);
                        // if (areaIndex > 0 && bedroomsIndex > 0) {
                        //     console.log("price: ", rentalPrices[0][areaIndex - 1][bedroomsIndex - 1]);
                        // }

                        if (
                            areaIndex > 0
                            && bedroomsIndex > 0
                            && rentalPrices[0][areaIndex - 1][bedroomsIndex - 1] === 0

                        ) {
                            props.setFieldValue("bedrooms", "Choose bedrooms");
                        }
                        //console.log("   ")


                        return (
                            <Form className={style.card}>
                                <p className={style.cardTitle}>
                                    Vacation Rental Calculator
                                </p>
                                <div className={style.fields}>
                                    <SelectFieldWithLabel name="area"
                                                          menuItems={menuItemsArea}
                                                          label="Area"
                                                          className={style.selectField}
                                    />
                                    <SelectFieldWithLabel name="bedrooms"
                                                          menuItems={
                                                              menuItemsBedrooms.filter((el, index) => {
                                                                  if (areaIndex > 0) {
                                                                      if (index === 0) return true
                                                                      return rentalPrices[0][areaIndex - 1][index - 1] !== 0
                                                                  } else {
                                                                      return true
                                                                  }
                                                              })
                                                          }
                                                          label="Bedrooms"
                                                          className={style.selectField}

                                    />
                                    <SelectFieldWithLabel name="furnishing"
                                                          menuItems={menuItemsFurnishing}
                                                          label="Furnishing"
                                                          className={style.selectField}

                                    />
                                </div>
                                <ButtonContained type="submit"
                                                 label="Calculate"
                                                 color={ColorEnum.black}
                                                 className={style.submitBtn}
                                />


                                <div className={style.resultBlock}>
                                    {
                                        bedroomsIndex > 0 &&
                                        areaIndex > 0 &&
                                        <p className={style.text}>
                                            A <span>{bedrooms[bedroomsIndex]}</span> property
                                            in <span>{areasDefault[areaIndex]}</span> can
                                            earn on average
                                        </p>
                                    }

                                    <div className={style.priceBlock}>
                                        {
                                            bedroomsIndex > 0 &&
                                            furnishingIndex > 0 &&
                                            areaIndex > 0 &&
                                            rentalPrices[furnishingIndex - 1][areaIndex - 1][bedroomsIndex - 1] !== 0 && (
                                                <>
                                                    <p>
                                                        {
                                                            10 * Math.round(rentalPrices[furnishingIndex - 1][areaIndex - 1][bedroomsIndex - 1] / 10)
                                                        }
                                                    </p>
                                                    <p>Dhs</p>
                                                    <p>/Daily</p>
                                                </>
                                            )
                                        }
                                    </div>

                                    <p className={style.info}>
                                        Our estimate takes into account realistic occupancies and comparable listings in
                                        your area.
                                    </p>
                                </div>
                            </Form>
                        )
                    }
                }

            </Formik>


        </Modal>
    )
})
