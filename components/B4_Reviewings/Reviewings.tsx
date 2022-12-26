import style from "./Reviewings.module.scss"
import {H2} from "../X_common/H2/H2";
import {Tag} from "../X_common/Tag/Tag";
import {ButtonArrow} from "../X_common/ButtonArrow/ButtonArrow";

import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import SwiperClass from 'swiper/types/swiper-class';
import {useState} from "react";
import {slides} from "./slides";
import {svgIcons} from "../../assets/svgIcons";

const tags = [
    "Property",
    "Dubai",
    "Standart",
    "Premium",
    "Airbnb",
];

export const Reviewings = () => {
    const [swiper, setSwiper] = useState<SwiperClass | null>(null);
    const [index, setIndex] = useState(0);

    return (
        <div className={style.reviewings}>
            <div className={style.inner}>

                <div className={style.header}>

                    <H2 preTitle="Reviewings"
                        title="Our users only leave positive comments"
                        white={false}
                    />

                    <div className={style.tags}>
                        {
                            tags.map((tag, key) => (
                                <Tag key={key}
                                     tag={tag}
                                     white={false}
                                     className={style.tag}
                                />
                            ))
                        }
                    </div>
                </div>

                <div className={style.swiperWrapper}>

                    <Swiper slidesPerView={1}
                            className={style.swiper}
                            spaceBetween={0}
                            onSwiper={(swiper) => {
                                setSwiper(swiper);
                            }}
                            onSlideChange={(swiper) => {
                                setIndex(swiper.realIndex);
                            }}
                    >
                        {
                            slides.map(({date, text, avatar, name, country}, key) => (
                                <SwiperSlide key={key}
                                             className={style.slide}

                                >
                                    <div className={style.dateWrapper}>
                                        {svgIcons.calendar}
                                        <p className={style.date}>{date}</p>
                                    </div>
                                    <p className={style.text}>{text}</p>

                                    <div className={style.authorBlock}>
                                        <img src={avatar} alt="" className={style.avatar}/>
                                        <div className={style.texts}>
                                            <p className={style.name}>{name}</p>
                                            <p className={style.country}>{country}</p>
                                        </div>
                                    </div>

                                </SwiperSlide>
                            ))
                        }
                    </Swiper>


                    <div className={style.navigationBlock}>
                        <div className={style.navigationBtns}>
                            <ButtonArrow onClick={() => swiper?.slidePrev()}
                                         disabled={index === 0}
                            />
                            <ButtonArrow onClick={() => swiper?.slideNext()}
                                         left={false}
                                         className={style.rightBtn}
                                         disabled={index === slides.length - 1}
                            />
                        </div>

                        <div className={style.statusBlock}>
                            <div className={style.status}>
                                <div className={style.statusInner}
                                     style={{
                                         width: `${100*(index + 1) / slides.length}%`
                                     }}
                                />
                            </div>
                            <p className={style.index}>{index + 1}</p>
                            <p className={style.count}>{slides.length}</p>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
