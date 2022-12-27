import style from "./FaqBlock.module.scss";
import {H2} from "../X_common/H2/H2";
import {Tag} from "../X_common/Tag/Tag";
import {AccordionItem} from "../X_common/AccordionItem/AccordionItem";
import {useState} from "react";
import {ButtonContained, ColorEnum} from "../X_common/ButtonContained/ButtonContained";

const tags = [
    "Property",
    "Dubai",
    "Standart",
    "Premium",
    "Airbnb",
];

const faqItems = [
    {
        question: "Question",
        answer: "A small description, which can be composed in two or three stoic, which describes the essence",
    },
    {
        question: "Question",
        answer: "A small description, which can be composed in two or three stoic, which describes the essence",
    },
    {
        question: "Question",
        answer: "A small description, which can be composed in two or three stoic, which describes the essence",
    },
    {
        question: "Question",
        answer: "A small description, which can be composed in two or three stoic, which describes the essence",
    },
    {
        question: "Question",
        answer: "A small description, which can be composed in two or three stoic, which describes the essence",
    },
    {
        question: "Question",
        answer: "A small description, which can be composed in two or three stoic, which describes the essence",
    },
    {
        question: "Question",
        answer: "A small description, which can be composed in two or three stoic, which describes the essence",
    },
]

export const FaqBlock = () => {
    const [openedIndex, setOpenedIndex] = useState(-1);

    const onClickHandler = (key: number) => {
        if (key === openedIndex) {
            setOpenedIndex(-1)
        } else {
            setOpenedIndex(key)
        }
    }


    return (
        <div className={style.faqBlock}>
            <div className={style.inner}>

                <div className={style.header}>
                    <H2 preTitle="FAQ"
                        title="A headline that will talk about FAQ"
                        white={true}
                    />
                    <div className={style.tags}>
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
                </div>

                <div className={style.content}>

                    <div className={style.faq}>
                        {
                            faqItems.map(({question, answer}, key) => (
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
                            A long headline that tells the
                        </p>

                        <div>
                            <div className={style.iconWrapper}>
                                <img src="/png/icons/smile2.png" alt=""/>
                            </div>
                            <p className={style.description}>
                                A small description, which can be composed in two or three stoic, which describes the essence
                            </p>

                            <ButtonContained label="Get started"
                                             className={style.btn}
                                             color={ColorEnum.black}
                            />
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}
