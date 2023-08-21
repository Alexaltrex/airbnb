import style from "./Reviewings.module.scss"
import {H2} from "../X_common/H2/H2";
import {Tag} from "../X_common/Tag/Tag";
import {ButtonArrow} from "../X_common/ButtonArrow/ButtonArrow";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import SwiperClass from 'swiper/types/swiper-class';
import {MouseEvent, useRef, useState} from "react";
import {slides} from "./slides";
import {svgIcons} from "../../assets/svgIcons";
import clsx from "clsx";

const tags = [
    "ClientLove",
    "ExceptionalService",
    "UAE",
    "Premium",
    "Hospitality",
];

export const Reviewings = () => {
    const [swiper, setSwiper] = useState<SwiperClass | null>(null);
    const [index, setIndex] = useState(0);

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
        <div className={style.reviewings}>
            <div className={style.inner}>

                <div className={style.header}>

                    <H2 preTitle="Reviews"
                        title="Hear what our satisfied clients have to say about our services"
                        white={false}
                        className={style.h2}
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

                <div className={style.swiperWrapper}
                     onMouseMove={onMouseMoveHandler}
                     ref={ref}
                >

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
                            slides.map(({
                                            date,
                                            text,
                                            avatar,
                                            name,
                                            country,
                                            reviews
                                        }, key) => (
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

                                    {
                                        reviews.map(({review, image}, key) => (
                                            <div key={key}
                                                className={clsx(
                                                style.reviewItem,
                                                style[`reviewItem_${key}`]
                                            )}
                                                 style={{
                                                     transform: `translate(${deltaX}px, ${deltaY}px)`
                                                 }}
                                            >
                                                <div className={style.iconWrapper}>
                                                    <img src={image} alt=""/>
                                                </div>
                                                <div className={style.stars}>
                                                    {
                                                        [1, 2, 3, 4, 5].map(n => (
                                                            <div className={style.starWrapper} key={n}>
                                                                {
                                                                    n < review
                                                                        ? svgIcons.star_full
                                                                        : n > review && n - review < 1 ? svgIcons.star_half
                                                                        : svgIcons.star_empty
                                                                }
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        ))
                                    }


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
                                         width: `${100 * (index + 1) / slides.length}%`
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
