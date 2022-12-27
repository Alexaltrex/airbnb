import {FC, ReactNode} from "react";
import style from "./BlackWrapper.module.scss";

export const BlackWrapper:FC<{children: ReactNode}> = ({children}) => {
    return (
        <div className={style.blackWrapper}>
            {children}
        </div>
    )
}
