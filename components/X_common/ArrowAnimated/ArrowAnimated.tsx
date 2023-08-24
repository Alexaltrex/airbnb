import * as React from "react";
import {FC} from "react";
import style from "./ArrowAnimated.module.scss";
import clsx from "clsx";
import {svgIcons} from "../../../assets/svgIcons";

interface IArrowAnimated {
    className?: string
    image: string
    label: string
    target?: string
}

export const ArrowAnimated: FC<IArrowAnimated> = ({
                                                      className,
                                                      image,
                                                      label,
                                                      target
                                                  }) => {
    return (
        <div className={clsx(
            style.arrowAnimated,
            target ? target : "arrowAnimated",
            Boolean(className) && className,
        )}>

            <div className={style.imageWrapper}>
                <img src={image} alt=""/>
            </div>

            <div className={clsx(style.arrowWrapper, "arrow")}>
                {svgIcons.arrowBow2}
                <div className={clsx(style.mask, "mask")}/>
            </div>

            <div className={clsx(style.labelWrapper, "label")}>
                <p>{label}</p>
                <div className={clsx(style.mask, "mask")}/>
            </div>
        </div>
    )
}
