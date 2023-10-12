import style from "./CalculateBlock.module.scss";
import {Tag} from "../X_common/Tag/Tag";
import {Form, Formik, FormikErrors, FormikHelpers, FormikProps} from "formik";
import {ButtonContained, ColorEnum} from "../X_common/ButtonContained/ButtonContained";
import * as React from "react";
import {svgIcons} from "../../assets/svgIcons";
import {observer} from "mobx-react-lite";
import {useStore} from "../../store/useStore";
import {CalculateModal} from "./CalculateModal/CalculateModal";
import {useEffect, useState} from "react";
import axios from "axios";
import moment from 'moment-timezone';
import {
    areasDefault, bedrooms,
    furnishings,
    menuItemsArea,
    menuItemsBedrooms,
    menuItemsFurnishing,
    rentalPrices
} from "./const";
import {ICalculateValues} from "../../store/store";
import {SelectField} from "../X_common/SelectField/SelectField";

const tags = [
    "UAE",
    "Experts",
    "Standart",
    "Premium",
    "Airbnb",
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

    const initialValues: ICalculateValues = {
        area: "Choose area",
        bedrooms: "Choose bedrooms",
        furnishing: "Choose furnishing",
    }

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

    const onSubmitHandler = (
        values: ICalculateValues, // значения из формы
        formikHelpers: FormikHelpers<ICalculateValues> // методы FormikHelpers<Values>
    ) => {
        console.log(values)
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
                if (coordinatesResponse.data) {
                    const {lat, lon} = coordinatesResponse.data[0];

                    const weatherResponse = await axios.get<IWeatherResponse>(
                        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appid}`
                    )

                    if (weatherResponse.data) {
                        setDescription(weatherResponse.data.weather[0].description);
                        setTemp(weatherResponse.data.main.temp - 273.15);
                        setIcon(weatherResponse.data.weather[0].icon)
                    }
                }
            } catch (e: any) {
                console.log(e.message);
            }
        }
        getWeather().then();
    }, [])

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
                            validate={validate}
                            onSubmit={onSubmitHandler}
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
                                    <Form className={style.form}>

                                        <div className={style.selectField}>
                                            <SelectField name="area"
                                                         menuItems={menuItemsArea}
                                                         label="Area"
                                            />
                                        </div>

                                        <div className={style.selectField}>
                                            <SelectField name="bedrooms"
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

                                            />
                                        </div>

                                        <div className={style.selectField}>
                                            <SelectField name="furnishing"
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
                        }
                    </Formik>
                </div>
            </div>
        </div>
    )
})
