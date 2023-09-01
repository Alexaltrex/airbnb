import * as React from "react";
import style from "./Preloader.module.scss";
import gsap from "gsap";
import {useLayoutEffect, useRef} from "react";
import {setPreloaderToLocalStorage} from "../../../localStorage/localStorage";

export const Preloader = () => {
    const ref = useRef<HTMLDivElement>(null!);

    useLayoutEffect(() => {
        gsap.timeline()
            .to(ref.current, {
                opacity: 0,
                duration: 1,
                delay: 4,
                onComplete: () => setPreloaderToLocalStorage("done"),
            })
            .set(ref.current, {display: "none"},)
    }, [])

    return (
        <div className={style.preloader} ref={ref}>
            <video src="/webm/preloader.webm"
                   autoPlay={true}
                   muted={true}
                   playsInline={true}
            />
            <img src="/gif/logo.gif" alt=""/>

        </div>
    )
}
