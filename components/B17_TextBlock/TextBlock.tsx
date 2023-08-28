import style from "./TextBlock.module.scss";
import {FC} from "react";
import {useMediaQuery} from "@mui/material";
import {textBlock} from "../../constants/textBlock";

interface ITextBlock {
    slug: number
}

export const TextBlock: FC<ITextBlock> = ({ slug }) => {
    const matchesDesktop = useMediaQuery('(min-width:1440px)');
    return (
        <>
            <div className={style.textBlock}>
                <div className={style.inner}>
                    {
                        matchesDesktop ? textBlock[slug].desktop : textBlock[slug].mobile
                    }
                </div>
            </div>
        </>

    )
}
