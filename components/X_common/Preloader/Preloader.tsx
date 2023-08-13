import * as React from "react";
import style from "./Preloader.module.scss";


export const Preloader = () => {
    return (
        <div className={style.preloader}>

                <video src="/webm/preloader.webm"
                       autoPlay={true}
                       muted={true}
                       playsInline={true}
                />

        </div>
    )
}
