import style from "./TextBlockMedium.module.scss";
import {useMediaQuery} from "@mui/material";

const texts = [
    "Maximize rental income ",
    " with our expert management. Effortless bookings, optimized pricing, ",
    " and exceptional guest service."
];

export const TextBlockMedium = () => {
    const matchesDesktop = useMediaQuery('(min-width:1440px)');
    return (
        <div className={style.textBlockMedium}>
            <div className={style.inner}>
                <p className={style.text}>
                    <span>{texts[0]}</span>
                    <img src={matchesDesktop ? "/png/TextBlockMedium/0_d.png" : "/png/TextBlockMedium/0_m.png"} alt=""/>
                    <span>{texts[1]}</span>
                    <img src={matchesDesktop ? "/png/TextBlockMedium/1_d.png" : "/png/TextBlockMedium/1_m.png"} alt=""/>
                    <span>{texts[2]}</span>
                </p>
            </div>
        </div>
    )
}
