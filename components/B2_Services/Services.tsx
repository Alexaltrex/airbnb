import style from "./Services.module.scss"
import {IServiceCard, items} from "./items";
import {Dot} from "../X_common/Dot/Dot";
import {ButtonContained, ColorEnum} from "../X_common/ButtonContained/ButtonContained";
import {AccordionItem} from "../X_common/AccordionItem/AccordionItem";
import {FC, useState} from "react";

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
    return (
        <div className={style.services}>
            <div className={style.inner}>
                {
                    items.map((card, key) => (
                        <ServiceCard key={key} {...card}/>
                    ))
                }
            </div>
        </div>
    )
}
