import style from "./Dot.module.scss";
import {FC} from "react";
import clsx from "clsx";

interface IDot {
    className?: string
}

export const Dot: FC<IDot> = ({className}) => {
    return (
        <div className={clsx(style.dot, Boolean(className) && className)}>
            <div className={style.inner}/>
        </div>
    )
}
