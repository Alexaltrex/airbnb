import style from "./TextBlock.module.scss";
import {FC} from "react";
import {useMediaQuery} from "@mui/material";

interface ITextBlock {
    texts: string[]
    imgs: {
        0: {
            m: string
            d: string
        },
        1: {
            m: string
            d: string
        },
    }
}


export const TextBlock: FC<ITextBlock> = ({texts, imgs}) => {
    const matchesDesktop = useMediaQuery('(min-width:1440px)');

    return (
        <>
            {
                texts &&  imgs && (
                    <div className={style.textBlock}>
                        <div className={style.inner}>
                            <p className={style.text}>
                                <span>{texts[0]}</span>
                                <img src={matchesDesktop ? imgs[0].d : imgs[0].m} alt=""/>
                            </p>
                            <p className={style.text}>
                                <span>{texts[1]}</span>
                                <img src={matchesDesktop ? imgs[1].d : imgs[1].m} alt=""/>
                                <span>{texts[2]}</span>
                            </p>
                            <p className={style.text}>{texts[3]}</p>

                        </div>
                    </div>
                )
            }
        </>

    )
}
