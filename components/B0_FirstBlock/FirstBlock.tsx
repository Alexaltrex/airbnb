import style from "./FirstBlock.module.scss"
import {ButtonContained, ColorEnum} from "../X_common/ButtonContained/ButtonContained";

const text = "A small description, which can be composed in two or three stoic, which describes the essence"

const items = [
    {
        value: "400+",
        label: "Investors"
    },
    {
        value: "4500+",
        label: "Happy Customers"
    },
    {
        value: "1220",
        label: "Real estate"
    },
]


export const FirstBlock = () => {
    return (
        <div className={style.firstBlock}>
            <div className={style.inner}>
                <div className={style.topBlock}>
                    <h1 className={style.title}>
                        Space for a large headline, three lines maximum
                    </h1>
                    <ButtonContained label="Manage my property"
                                     color={ColorEnum.black}
                                     className={style.manageBtn}
                    />
                </div>

                <div className={style.bottomBlock}>
                    <p className={style.text}>
                        {text}
                    </p>
                    <div className={style.items}>
                        {
                            items.map(({value, label}, key) => (
                                <div className={style.item} key={key}>
                                    <p>{value}</p>
                                    <p>{label}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
