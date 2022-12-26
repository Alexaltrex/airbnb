import style from "./ButtonContained.module.scss"
import {FC, useState} from "react";
import clsx from "clsx";
import * as React from "react";

export enum ColorEnum {
    black = "black",
    grey = "grey",
    white = "white"
}

export type ButtonContainedType = {
    label: string
    className?: string
    color?: ColorEnum
} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export const ButtonContained: FC<ButtonContainedType> = ({
                                                             label,
                                                             color = ColorEnum.black,
                                                             className,
                                                             ...props
                                                         }) => {

    const [mouseDown, setMouseDown] = useState(false);
    return (
        <button className={clsx({
            [style.buttonContained]: true,
            [style.buttonContained_black]: color === ColorEnum.black,
            [style.buttonContained_grey]: color === ColorEnum.grey,
            [style.buttonContained_white]: color === ColorEnum.white,
            [style.buttonContained_mouseDownBlack]: mouseDown && color === ColorEnum.black,
            [style.buttonContained_mouseDownGrey]: mouseDown && color === ColorEnum.grey,
            [style.buttonContained_mouseDownWhite]: mouseDown && color === ColorEnum.white,

        }, Boolean(className) && className)}
                {...props}
                onMouseDown={() => setMouseDown(true)}
                onMouseUp={() => setMouseDown(false)}
        >
            <span>{label}</span>
        </button>
    )
}
