import style from "./ButtonArrow.module.scss"
import {FC, useState} from "react";
import clsx from "clsx";
import {svgIcons} from "../../../assets/svgIcons";
import * as React from "react";

type ButtonArrowType = {
    className?: string
    left?: boolean
} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;


export const ButtonArrow: FC<ButtonArrowType> = ({
                                                     className,
                                                     left = true,
                                                     ...props
                                                 }) => {
    const [mouseDown, setMouseDown] = useState(false);

    return (
        <button className={clsx(
            {
                [style.buttonArrow]: true,
                [style.buttonArrow_right]: !left,
                [style.buttonArrow_mouseDown]: mouseDown
            },
            Boolean(className) && className
        )}
                onMouseDown={() => setMouseDown(true)}
                onMouseUp={() => setMouseDown(false)}
                {...props}
        >
            {svgIcons.arrowUp}
        </button>
    )
}
