import style from "./TrivaBlock.module.scss"
import {svgIcons} from "../../assets/svgIcons";
import clsx from "clsx";
import {MouseEvent, useRef, useState} from "react";
import * as React from "react";

const text0 = "Triva, a prominent home management company, originated in France and expanded to UAE, delivering outstanding property services.";
const text1 = "At Triva, our journey began amidst the scenic charm of South France, where we swiftly gained recognition for top-notch hospitality and rental success. Today, with years of experience under our belt, we've extended our portfolio to the vibrant UAE, catering to diverse properties and clients. Our passionate team of professionals, proficient in multiple languages, ensures unparalleled guest experiences while maximizing your rental income. Let us take your property's potential to new heights.";

const items = [
    {
        title: "Home Specialists",
        description: "Property Perfection",
        src: "/png/icons/trivaBlock_0.png",
    },
    {
        title: "Experts",
        description: "Years of Knowledge",
        src: "/png/icons/trivaBlock_1.png",
    }
]

export const TrivaBlock = () => {
    const koef = 0.03;
    const [deltaX, setDeltaX] = useState(0);
    const [deltaY, setDeltaY] = useState(0);
    const onMouseMoveHandler = (e: MouseEvent) => {
        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + 0.5 * rect.width;
        const centerY = rect.top + 0.5 * rect.height;
        setDeltaX(koef * (e.clientX - centerX));
        setDeltaY(koef * (e.clientY - centerY));
    };

    const ref = useRef<HTMLDivElement>(null!)

    return (
        <div className={style.trivaBlock}>
            <div className={style.inner}>

                <div className={style.topBlock}
                     ref={ref}
                     onMouseMove={onMouseMoveHandler}
                >
                    <div className={style.box}>
                        <video src="/webm/preloader.webm"
                               autoPlay={true}
                               muted={true}
                               playsInline={true}
                               loop={true}
                        />
                    </div>

                    {
                        items.map(({title, description, src}, key) => (
                            <div className={clsx(style.item, style[`item${key}`])}
                                 key={key}
                                 style={{
                                     transform: `translate(${deltaX}px, ${deltaY}px)`
                                 }}
                            >
                                <div className={style.iconWrapper}>
                                    <img src={src} alt=""/>
                                </div>
                                <div className={style.texts}>
                                    <p>{title}</p>
                                    <p>{description}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>

                <div className={style.bottomBlock}>
                    <p className={style.topText}>
                        {text0}
                    </p>

                    <div className={style.bottom}>

                        <div className={style.arrowBlock}>
                            <div className={style.iconWrapper}>
                                <img src="/png/icons/earth.png" alt=""/>
                            </div>
                            <div className={style.arrowWrapper}>
                                <p>Global Reach</p>
                                {svgIcons.arrowBow2}
                            </div>
                        </div>

                        <p className={style.bottomText}>
                            {text1}
                        </p>
                    </div>

                </div>

            </div>
        </div>
    )
}
