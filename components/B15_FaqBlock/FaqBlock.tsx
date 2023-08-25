import style from "./FaqBlock.module.scss";
import {H2} from "../X_common/H2/H2";
import {Tag} from "../X_common/Tag/Tag";
import {AccordionItem} from "../X_common/AccordionItem/AccordionItem";
import {FC, useState} from "react";
import {ButtonContained, ColorEnum} from "../X_common/ButtonContained/ButtonContained";
import {useRouter} from "next/navigation";

interface IFaqBlock {
    title: string
    tags: string[]
    faq: {
        question: string
        answer: string
    }[]
    card: {
        title: string
        icon: string
        text: string
    }
}

export const FaqBlock: FC<IFaqBlock> = ({
                                            title,
                                            tags,
                                            faq,
                                            card
                                        }) => {
    const [openedIndex, setOpenedIndex] = useState(-1);

    const onClickHandler = (key: number) => {
        if (key === openedIndex) {
            setOpenedIndex(-1)
        } else {
            setOpenedIndex(key)
        }
    }

    const router = useRouter();
    const onContact = () => {
        router.push("/contact")
    }


    return (
        <div className={style.faqBlock}>
            <div className={style.inner}>

                <div className={style.header}>
                    <H2 preTitle="FAQ"
                        title={title}
                        white={true}
                    />
                    <div className={style.tagsMobile}>
                        {
                            tags.map((tag, key) => (
                                <Tag key={key}
                                     tag={tag}
                                     white={true}
                                     className={style.tag}
                                />
                            ))
                        }
                    </div>
                    <div className={style.tagsDesktop}>
                        <div className={style.tagsRow}>
                            {
                                [tags[0], tags[1], tags[2]].map((tag, key) => (
                                    <Tag key={key}
                                         tag={tag}
                                         white={true}
                                         className={style.tag}
                                    />
                                ))
                            }
                        </div>
                        <div className={style.tagsRow}>
                            {
                                [tags[3], tags[4]].map((tag, key) => (
                                    <Tag key={key}
                                         tag={tag}
                                         white={true}
                                         className={style.tag}
                                    />
                                ))
                            }
                        </div>
                    </div>
                </div>

                <div className={style.content}>

                    <div className={style.faq}>
                        {
                            faq.map(({question, answer}, key) => (
                                <AccordionItem key={key}
                                               question={question}
                                               answer={answer}
                                               open={openedIndex === key}
                                               onClick={() => onClickHandler(key)}
                                               className={style.item}
                                />
                            ))
                        }
                    </div>

                    <div className={style.card}>
                        <p className={style.cardTitle}>
                            {card.title}
                        </p>
                        <div>
                            <div className={style.iconWrapper}>
                                <img src={card.icon} alt=""/>
                            </div>
                            <p className={style.description}>
                                {card.text}
                            </p>
                            <ButtonContained label="Contact us"
                                             className={style.btn}
                                             color={ColorEnum.black}
                                             onClick={onContact}
                            />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
