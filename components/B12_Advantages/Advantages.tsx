import style from "./Advantages.module.scss"
import {H2} from "../X_common/H2/H2";

const text = "A small description, which can be composed in two or three stoic, which describes the essence ";

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

export const Advantages = () => {
    return (
        <div className={style.advantages}>
            <div className={style.inner}>

                <div className={style.header}>
                    <H2 preTitle="Advantages"
                        title="A headline that will talk about the benefits"
                        white={false}
                    />
                    
                    <div className={style.bottom}>
                        <div className={style.iconWrapper}>
                            <img src="/png/icons/smile2.png" alt=""/>
                        </div>
                        <p className={style.text}>{text}</p>
                    </div>
                </div>

                <div className={style.cards}>
                    {
                        cards.map(({preTitle, title, description}, key) => (
                            <div className={style.card} key={key}>
                                <div className={style.border}/>
                                <div className={style.innerCard}>
                                    <p className={style.preTitle}>{preTitle}</p>
                                    <p className={style.title}>{title}</p>
                                    <div className={style.iconWrapper}>
                                        <img src="/png/icons/smile2.png" alt=""/>
                                    </div>
                                    <p className={style.description}>{description}</p>

                                </div>


                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    )
}
