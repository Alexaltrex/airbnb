import {FC} from "react";
import {ICard} from "../cards";
import style from "./Card.module.scss"
import clsx from "clsx";
import {ButtonOutlined} from "../../X_common/ButtonOutlined/ButtonOutlined";
import {ButtonContained, ColorEnum} from "../../X_common/ButtonContained/ButtonContained";
import {svgIcons} from "../../../assets/svgIcons";

export const Card: FC<ICard> = ({
                                    tooltip,
                                    items,
                                    price,
                                    dark
                                }) => {
    return (
        <div className={clsx({
            [style.card]: true,
            [style.card_white]: !dark,
        })}>
            <div>
                <div className={style.header}>
                    <p className={style.label}>Facilities</p>
                    <p className={style.price}>
                        <span>{`$${price}`}</span><span>/MO</span>
                    </p>
                </div>
                <div className={style.items}>
                    {
                        items.map((item, key) => (
                            <div key={key} className={style.item}>
                                {svgIcons.check}
                                <p>{item}</p>
                            </div>

                        ))
                    }
                </div>
            </div>

            {
                dark
                    ? <ButtonOutlined label="Activate"
                                      className={style.activateBtn}
                    />
                    : <ButtonContained  label="Activate"
                                        color={ColorEnum.black}
                                        className={style.activateBtn}
                    />
            }

        </div>
    )
}
