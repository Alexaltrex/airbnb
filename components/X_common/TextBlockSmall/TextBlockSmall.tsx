import style from "./TextBlockSmall.module.scss"
import {FC} from "react";

interface ITextBlockSmall {
    text: JSX.Element
    description: string
}

export const TextBlockSmall: FC<ITextBlockSmall> = ({
                                                        text,
                                                        description
                                                    }) => {
    return (
        <div className={style.textBlockSmall}>
            <div className={style.inner}>
                <div className={style.text}>
                    {text}
                </div>
                <p className={style.description}>
                    {description}
                </p>
            </div>
        </div>
    )
}
