import style from "./Tag.module.scss"
import {FC} from "react";
import clsx from "clsx";

interface ITag {
    tag: string
    className?: string
    white?: boolean
}

export const Tag: FC<ITag> = ({
                                  tag,
                                  className,
                                  white = true
                              }) => {
    return (
        <div className={clsx({
            [style.tag]: true,
            [style.tag_dark]: !white,
        }, Boolean(className) && className)}>
            {`#${tag}`}
        </div>
    )
}
