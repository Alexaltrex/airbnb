import style from "./Advantages.module.scss"
import {H2} from "../X_common/H2/H2";
import {FC} from "react";

const cards = [
    {
        preTitle: "01 - 03",
        title: "A long headline that tells the story of the preimigration",
        description: "A small description, which can be composed in two or three stoic, which describes the essence ",
    },
    {
        preTitle: "01 - 03",
        title: "A long headline that tells the story of the preimigration",
        description: "A small description, which can be composed in two or three stoic, which describes the essence ",
    },
    {
        preTitle: "01 - 03",
        title: "A long headline that tells the story of the preimigration",
        description: "A small description, which can be composed in two or three stoic, which describes the essence ",
    },
]

interface IAdvantages {
    title: string
    text: string
    icon: string
    items: {
        title: string
        icon: string
        text: string
    }[]
}

export const Advantages: FC<IAdvantages> = ({ title, text, icon, items}) => {
    return (
        <div className={style.advantages}>
            <div className={style.inner}>

                <div className={style.header}>
                    <H2 preTitle="Advantages"
                        title={title}
                        white={false}
                    />

                    <div className={style.bottom}>
                        <div className={style.iconWrapper}>
                            <img src={icon} alt=""/>
                        </div>
                        <p className={style.text}>{text}</p>
                    </div>
                </div>

                <div className={style.cards}>
                    {
                        items.map(({title, text, icon}, key) => (
                            <div className={style.card} key={key}>
                                <div className={style.border}/>
                                <div className={style.innerCard}>
                                    <p className={style.preTitle}>{`0${key + 1} - 03`}</p>
                                    <p className={style.title}>{title}</p>
                                    <div className={style.iconWrapper}>
                                        <img src={icon} alt=""/>
                                    </div>
                                    <p className={style.description}>{text}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    )
}
