import style from "./CalculateBlock.module.scss";
import {Tag} from "../X_common/Tag/Tag";
import {Form, Formik, FormikHelpers, FormikProps} from "formik";
import {TextField} from "../X_common/TextField/TextField";
import {SelectField} from "../X_common/SelectField/SelectField";
import {TextareaField} from "../X_common/TextareaField/TextareaField";
import {ButtonContained, ColorEnum} from "../X_common/ButtonContained/ButtonContained";
import * as React from "react";
import {SelectFieldWithLabel} from "../X_common/SelectFieldWithLabel/SelectFieldWithLabel";

const tags = [
    "Property",
    "Dubai",
    "Standart",
    "Premium",
    "Airbnb",
];

interface IValues {
    area: string
    bedrooms: string
    furnishing: string
}

const menuItemsArea = [
    {value: "Business Bay", label: "Business Bay"},
    {value: "Business Bay2", label: "Business Bay2"},
    {value: "Business Bay3", label: "Business Bay3"},
    {value: "Business Bay4", label: "Business Bay4"},
];

const menuItemsBedrooms = [
    {value: "Studio", label: "Studio"},
    {value: "Studio2", label: "Studio2"},
    {value: "Studio3", label: "Studio3"},
    {value: "Studio4", label: "Studio4"},
];

const menuItemsFurnishing = [
    {value: "Premium", label: "Premium"},
    {value: "Premium2", label: "Premium2"},
    {value: "Premium3", label: "Premium3"},
    {value: "Premium4", label: "Premium4"},
];

export const CalculateBlock = () => {
    const initialValues = {
        area: "Business Bay",
        bedrooms: "Studio",
        furnishing: "Premium",
    }
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
        <div className={style.calculateBlock}>
            <div className={style.inner}>
                <div className={style.mask}/>

                <div className={style.header}>
                    <div className={style.tags}>
                        {
                            tags.map((tag, key) => (
                                <Tag tag={tag}
                                     key={key}
                                     className={style.tag}
                                />
                            ))
                        }
                    </div>
                    <div className={style.weather}>

                    </div>
                </div>


                <div className={style.formWrapper}>
                    <p className={style.formTitle}>Estimate your revenue</p>

                    <Formik initialValues={initialValues}
                            onSubmit={onSubmitHandler}
                    >
                        {
                            (props: FormikProps<IValues>) => (
                                <Form className={style.form}>

                                    <div className={style.selectField}>
                                        <SelectFieldWithLabel name="area"
                                                              menuItems={menuItemsArea}
                                                              label="Area"
                                        />
                                    </div>

                                    <div className={style.selectField}>
                                        <SelectFieldWithLabel name="bedrooms"
                                                              menuItems={menuItemsBedrooms}
                                                              label="Bedrooms"

                                        />

                                    </div>

                                    <div className={style.selectField}>
                                        <SelectFieldWithLabel name="furnishing"
                                                              menuItems={menuItemsFurnishing}
                                                              label="Furnishing"

                                        />
                                    </div>


                                    <ButtonContained type="submit"
                                                     label="Calculate"
                                                     color={ColorEnum.white}
                                                     className={style.submitBtn}
                                    />
                                </Form>
                            )
                        }
                    </Formik>
                </div>
            </div>
        </div>
    )
}
