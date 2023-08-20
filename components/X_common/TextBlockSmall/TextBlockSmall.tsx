import style from "./TextBlockSmall.module.scss"
import {FC} from "react";
import {useMediaQuery} from "@mui/material";

const texts = [
    "Cool ",
    " headline about price page",
];

interface ITextBlockSmall {
    texts: string[]
    image: {
        mobile: string
        desktop: string
    }
    description: string
}

export const TextBlockSmall: FC<ITextBlockSmall> = ({
                                                        texts,
                                                        image,
                                                        description
                                                    }) => {
    const matchesDesktop = useMediaQuery('(min-width:1440px)');


    return (
        <div className={style.textBlockSmall}>
            <div className={style.inner}>

                <p className={style.text}>
                    <span>{texts[0]}</span>
                    <img src={matchesDesktop ? image.desktop : image.mobile} alt=""/>
                    <span>{texts[1]}</span>
                </p>

                <p className={style.description}>
                    {description}
                </p>
            </div>
        </div>
    )
}
