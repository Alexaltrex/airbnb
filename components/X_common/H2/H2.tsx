import style from "./H2.module.scss"
import {FC} from "react";
import clsx from "clsx";

interface IH2 {
    preTitle: string
    title: string
    white?: boolean
    className?: string
}


export const H2: FC<IH2> = ({
                                preTitle,
                                title,
                                white = true,
                                className
                            }) => {
    return (
        <div className={clsx({
            [style.h2]: true,
            [style.h2_dark]: !white
        }, Boolean(className) && className)}>
            <p className={style.preTitle}>{preTitle}</p>
            <h2 className={style.title}>{title}</h2>
        </div>
    )
}
