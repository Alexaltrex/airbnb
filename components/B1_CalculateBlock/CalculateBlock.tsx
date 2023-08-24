import style from "./CalculateBlock.module.scss";
import {Tag} from "../X_common/Tag/Tag";
import {Form, Formik, FormikHelpers, FormikProps} from "formik";
import {TextField} from "../X_common/TextField/TextField";
import {SelectField} from "../X_common/SelectField/SelectField";
import {TextareaField} from "../X_common/TextareaField/TextareaField";
import {ButtonContained, ColorEnum} from "../X_common/ButtonContained/ButtonContained";
import * as React from "react";
import {SelectFieldWithLabel} from "../X_common/SelectFieldWithLabel/SelectFieldWithLabel";
import {svgIcons} from "../../assets/svgIcons";
import {observer} from "mobx-react-lite";
import {useStore} from "../../store/useStore";
import {CalculateModal} from "./CalculateModal/CalculateModal";
import {useEffect, useState} from "react";
import axios from "axios";
import moment from 'moment-timezone';

const tags = [
    "UAE",
    "Experts",
    "Standart",
    "Premium",
    "Airbnb",
];

export interface IValues {
    area: string
    bedrooms: string
    furnishing: string
}

export const menuItemsArea = [
    {value: "Business Bay", label: "Business Bay"},
    {value: "Business Bay2", label: "Business Bay2"},
    {value: "Business Bay3", label: "Business Bay3"},
    {value: "Business Bay4", label: "Business Bay4"},
];

export const menuItemsBedrooms = [
    {value: "Studio", label: "Studio"},
    {value: "Studio2", label: "Studio2"},
    {value: "Studio3", label: "Studio3"},
    {value: "Studio4", label: "Studio4"},
];

export const menuItemsFurnishing = [
    {value: "Premium", label: "Premium"},
    {value: "Premium2", label: "Premium2"},
    {value: "Premium3", label: "Premium3"},
    {value: "Premium4", label: "Premium4"},
];

interface IWeatherResponse {
    weather: {
        description: string
        icon: string
    }[]
    main: {
        temp: number
    }
}

export const CalculateBlock = observer(() => {
    const {setRental, setCalculateModal} = useStore()

    const initialValues = {
        area: "Business Bay",
        bedrooms: "Studio",
        furnishing: "Premium",
    }
    const onSubmitHandler = (
        values: IValues, // значения из формы
        formikHelpers: FormikHelpers<IValues> // методы FormikHelpers<Values>
    ) => {
        setRental(values);
        setCalculateModal(true);
        formikHelpers.setSubmitting(false);
    }

    const [description, setDescription] = useState("");
    const [temp, setTemp] = useState(25);
    const [icon, setIcon] = useState("");


    useEffect(() => {
        const getWeather = async () => {
            try {
                const appid = "bdf8a05eed7ef982345b0d5ea8589b6e";
                const coordinatesResponse = await axios.get<{ lat: number, lon: number }[]>(
                    `https://api.openweathermap.org/geo/1.0/direct?q=Dubai,AE&limit=5&appid=${appid}`
                );
                //console.log(coordinatesResponse.data);
                if (coordinatesResponse.data) {
                    const {lat, lon} = coordinatesResponse.data[0];
                    //console.log(lat, lon);

                    const weatherResponse = await axios.get<IWeatherResponse>(
                        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appid}`
                    )

                    if (weatherResponse.data) {
                        setDescription(weatherResponse.data.weather[0].description);
                        setTemp(weatherResponse.data.main.temp - 273.15);
                        console.log(weatherResponse.data.weather[0].icon)
                        setIcon(weatherResponse.data.weather[0].icon)
                    }

                }
            } catch (e: any) {
                console.log(e.message);
            }
        }


        getWeather().then();
    }, [])

    // console.log(moment().format("hh:mm"))
    // console.log(moment().tz("Asia/Dubai").format("hh:mm"))
    // console.log(moment.tz.names())
    const [time, setTime] = useState("");

    useEffect(() => {
      const timer = setInterval(() => {
          setTime(moment().tz("Asia/Dubai").format("hh:mm A"))
      }, 1000);
      return () => clearInterval(timer);
    }, [])

    return (
        <div className={style.calculateBlock}>

            <CalculateModal/>

            <div className={style.inner}>
                {/*<div className={style.mask}/>*/}

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
                        <div className={style.row}>
                            <p className={style.city}>Dubai</p>
                            <p className={style.time}>{time}</p>
                        </div>
                        <div className={style.divider}/>
                        <div className={style.row}>
                            <div className={style.left}>
                                <div className={style.icon}>
                                    {/*@ts-ignore*/}
                                    {icon && svgIcons[icon]}
                                </div>

                                <p className={style.city}>{Math.floor(temp)} °C</p>
                            </div>
                            <p className={style.time}>{description}</p>
                        </div>
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
})
