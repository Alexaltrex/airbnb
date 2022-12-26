import style from "./ButtonOutlined.module.scss"
import {FC, useState} from "react";
import clsx from "clsx";
import * as React from "react";

export type ButtonContainedType = {
    label: string
    className?: string
} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export const ButtonOutlined: FC<ButtonContainedType> = ({
                                                             label,
                                                             className,
                                                             ...props
                                                         }) => {

    const [mouseDown, setMouseDown] = useState(false);
    return (
        <button className={clsx({
            [style.buttonOutlined]: true,
            [style.buttonOutlined_mouseDown]: mouseDown,
        }, Boolean(className) && className)}
                {...props}
                onMouseDown={() => setMouseDown(true)}
                onMouseUp={() => setMouseDown(false)}
        >
            <span>{label}</span>
        </button>
    )
}
