import style from "./Services.module.scss"
import {IServiceCard, items} from "./items";
import {Dot} from "../X_common/Dot/Dot";
import {ButtonContained, ColorEnum} from "../X_common/ButtonContained/ButtonContained";
import {AccordionItem} from "../X_common/AccordionItem/AccordionItem";
import {FC, useEffect, useRef, useState} from "react";

const ServiceCard: FC<IServiceCard> = ({
                                           title,
                                           description,
                                           src,
                                           faq
                                       }) => {
    const [openedIndex, setOpenedIndex] = useState(-1);

    const onClickHandler = (key: number) => {
        if (key === openedIndex) {
            setOpenedIndex(-1)
        } else {
            setOpenedIndex(key)
        }
    }

    return (
        <div className={style.item}
             style={{
                 backgroundImage: `url(${src}) `,
             }}
        >
            <div className={style.mask}/>

            <div className={style.top}>
                <div className={style.topUp}>
                    <p className={style.preTitle}>Services</p>
                    <p className={style.title}>{title}</p>
                </div>

                <div className={style.topDown}>
                    <Dot/>
                    <p className={style.description}>
                        {description}
                    </p>
                    <ButtonContained label="Read more"
                                     color={ColorEnum.white}
                                     className={style.readMoreBtn}
                    />
                </div>
            </div>

            <div className={style.faq}>
                <p className={style.title}>FAQ</p>
                <div className={style.accordion}>
                    {
                        faq.map(({question, answer}, key) => (
                            <AccordionItem key={key}
                                           question={question}
                                           answer={answer}
                                           open={openedIndex === key}
                                           onClick={() => onClickHandler(key)}
                                           className={style.accordionItem}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

//========= Services =========//
export const Services = () => {
    const [delta1, setDelta1] = useState(0);
    const [delta2, setDelta2] = useState(0);
    const [delta3, setDelta3] = useState(0);
    const koef = 0.3;
    const deltas = [delta1, delta2, delta3]

    useEffect(() => {
        const onScroll = () => {
            if (ref1 && ref1.current) {
                const rect1 = ref1.current.getBoundingClientRect();
                console.log(rect1.top)
                console.log(window.innerHeight)
                console.log("---")
                if (rect1.top < window.innerHeight && rect1.top > 0) {
                    setDelta1(koef * (window.innerHeight - rect1.top))
                }
                if (rect1.top > window.innerHeight) {
                    setDelta1(0)
                }
            }
            if (ref2 && ref2.current) {
                const rect2 = ref2.current.getBoundingClientRect();
                //console.log(window.innerHeight - rect2.top)
                if (rect2.top < window.innerHeight && rect2.top > 0) {
                    setDelta2(koef * (window.innerHeight - rect2.top))
                }
                if (rect2.top > window.innerHeight) {
                    setDelta2(0)
                }
            }
            if (ref3 && ref3.current) {
                const rect3 = ref3.current.getBoundingClientRect();
                //console.log(window.innerHeight - rect3.top)
                if (rect3.top < window.innerHeight && rect3.top > 0) {
                    setDelta3(koef * (window.innerHeight - rect3.top))
                }
                if (rect3.top > window.innerHeight) {
                    setDelta3(0)
                }
            }

        };
        window.addEventListener("scroll", onScroll, {passive: true})
    }, [])

    const ref1 = useRef<HTMLDivElement>(null!);
    const ref2 = useRef<HTMLDivElement>(null!);
    const ref3 = useRef<HTMLDivElement>(null!);
    const refs = [ref1, ref2, ref3];

    return (
        <div className={style.services}>
            <div className={style.inner}

            >
                {
                    items.map((card, key) => (
                        <div ref={refs[key]}
                             style={{
                                 marginTop: `-${deltas[key]}px`,
                                 position: "relative",
                                 zIndex: 10 * key,
                             }}
                        >
                            <ServiceCard key={key} {...card}/>
                        </div>

                    ))
                }
            </div>
        </div>
    )
}
