import style from "./TextBlockMedium.module.scss";
import {useMediaQuery} from "@mui/material";

export const TextBlockMedium = () => {
    const matchesDesktop = useMediaQuery('(min-width:1440px)');
    return (
        <div className={style.textBlockMedium}>
            <div className={style.inner}>
                {
                    matchesDesktop ? (
                        <>
                            <p>
                                Maximize rental income <img src="/png/TextBlockMedium/0_d.png" alt=""/> with our
                            </p>
                            <p>expert management. Effortless bookings,</p>
                            <p>
                                optimized pricing, <img src="/png/TextBlockMedium/1_d.png" alt=""/> and exceptional
                            </p>
                            <p>guest service.</p>
                        </>
                    ) : (
                        <>
                           <p>Maximize rental</p>
                            <p>
                                income <img src="/png/TextBlockMedium/0_m.png" alt=""/>
                            </p>
                            <p>with our expert</p>
                            <p>management.</p>
                            <p>Effortless bookings,</p>
                            <p>optimized pricing,</p>
                            <p>
                                <img src="/png/TextBlockMedium/1_m.png" alt=""/> and exceptional
                            </p>
                            <p>guest service.</p>
                        </>
                    )
                }
            </div>
        </div>
    )
}
