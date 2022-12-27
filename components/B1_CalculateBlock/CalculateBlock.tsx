import style from "./CalculateBlock.module.scss";
import {Tag} from "../X_common/Tag/Tag";

const tags = [
    "Property",
    "Dubai",
    "Standart",
    "Premium",
    "Airbnb",
];

export const CalculateBlock = () => {
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

                    </div>
                </div>
        </div>
    )
}
