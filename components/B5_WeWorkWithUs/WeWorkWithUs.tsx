import style from "./WeWorkWithUs.module.scss"
import {H2} from "../X_common/H2/H2";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import {slides} from "./slides";
import {svgIcons} from "../../assets/svgIcons";


export const WeWorkWithUs = () => {
    return (
        <div className={style.weWorkWithUs}>
            <div className={style.header}>
                <div className={style.inner}>
                    <H2 preTitle="We work with us"
                        title="Space for a two line header"
                        white={false}
                    />
                </div>
            </div>

            <div className={style.swiper}>
                <Swiper slidesPerView="auto"
                >
                    {
                        slides.map((icon, key) => (
                            <SwiperSlide key={key}
                                         className={style.slide}
                            >
                                {icon}
                            </SwiperSlide>
                        ))
                    }
                </Swiper>

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
