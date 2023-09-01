import style from "./TrivaBlock.module.scss"
import clsx from "clsx";
import {MouseEvent, useLayoutEffect, useRef, useState} from "react";
import * as React from "react";
import {ArrowAnimated} from "../X_common/ArrowAnimated/ArrowAnimated";
import gsap from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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

    const appRef = useRef<HTMLDivElement>(null!);
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {

            gsap
                .timeline({
                    scrollTrigger: {
                        trigger: ".arrowAnimated",
                        //markers: true,
                        start: "center center",
                        end: "center center",
                        toggleActions: "play none reverse none",
                    }
                })
                .to(".arrowAnimated .arrow .mask", {
                    scaleY: 0,
                    duration: 0.3,
                    ease: "none",
                }, )
                .to(".arrowAnimated .label .mask", {
                    scaleX: 0,
                    duration: 0.3,
                    ease: "none",
                })

        }, appRef);
        return () => ctx.revert();
    }, [])


    return (
        <div className={style.trivaBlock}
             ref={appRef}
        >
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
                               loop={false}
                               //controls={true}
                        />
                        <img src="/gif/logo.gif" alt=""/>
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

                        <ArrowAnimated image="/png/icons/earth.png"
                                       label="Global Reach"
                                       className={style.arrowAnimated}
                        />

                        <p className={style.bottomText}>
                            {text1}
                        </p>
                    </div>

                </div>

            </div>
        </div>
    )
}
