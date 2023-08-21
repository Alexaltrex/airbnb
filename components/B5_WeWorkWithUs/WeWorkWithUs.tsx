import style from "./WeWorkWithUs.module.scss"
import {H2} from "../X_common/H2/H2";
import "swiper/css";
import {slides} from "./slides";
import {svgIcons} from "../../assets/svgIcons";
import {Fragment, useLayoutEffect, useRef} from "react";
import clsx from "clsx";
import gsap from "gsap";

export const WeWorkWithUs = () => {
    const appRef = useRef<HTMLDivElement>(null!);
    const duration = 35;

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.timeline({repeat: -1})
                .to(".row_1", {xPercent: -100, duration, ease: "none"})
                .set(".row_1", {xPercent: 100})
                .to(".row_1", {xPercent: 0, duration, ease: "none"});

            gsap.timeline({repeat: -1})
                .set(".row_2", {xPercent: 100})
                .to(".row_2", {xPercent: -100, duration: 2 * duration, ease: "none"})
                .set(".row_2", {xPercent: 100});
        }, appRef);
        return () => ctx.revert();
    }, [])

    return (
        <div className={style.weWorkWithUs} ref={appRef}>
            <div className={style.header}>
                <div className={style.inner}>
                    <H2 preTitle="Our Partners"
                        title="Trusted partners who help us deliver exceptional service:"
                        white={false}
                        className={style.h2}
                    />
                </div>
            </div>


            <div className={style.wrapper}>

                <div className={clsx(style.row, "row_1")}>
                    {
                        slides.map((icons, key) => (
                            <div key={key}
                                 className={style.slide}
                            >
                                {
                                    icons.map((icon, index) => (
                                        <Fragment key={index}>
                                            {icon}
                                        </Fragment>
                                    ))
                                }

                            </div>
                        ))
                    }
                </div>

                <div className={clsx(style.row, "row_2")}>
                    {
                        slides.map((icons, key) => (
                            <div key={key}
                                 className={style.slide}
                            >
                                {
                                    icons.map((icon, index) => (
                                        <Fragment key={index}>
                                            {icon}
                                        </Fragment>
                                    ))
                                }

                            </div>
                        ))
                    }
                </div>

                <div className={style.arrowBlock}

                >
                    <div data-aos="zoom-in"
                         data-aos-delay="1000"
                    >
                        {svgIcons.arrowBow}
                        <p className={style.text}>Some text</p>
                    </div>

                </div>
            </div>
        </div>
    )
}
