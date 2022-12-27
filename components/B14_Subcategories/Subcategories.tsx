import style from "./Subcategories.module.scss"
import {H2} from "../X_common/H2/H2";
import {Tag} from "../X_common/Tag/Tag";

const tags = [
    "Property",
    "Dubai",
    "Standart",
    "Premium",
    "Airbnb",
];

const items = [
    {
        title: "A place for a company description, here should be a text description in several lines text place here",
        text: "Frank is a globetrotter – having traveled and lived all over the world. He speaks 15 languages fluently – English, Arabic, Swedish, French, Russian, Spanish, Italian, Turkish, Urdu, German, Hindi, Filipino, Swahili, Afrikaans and Polish. He understands your needs, and your guests’ needs. And most importantly – Frank is here to make you money.",
        src: "/jpeg/B14_Subcategories/0.jpg",
    },
    {
        title: "A place for a company description, here should be a text description in several lines text place here",
        text: "Frank is a globetrotter – having traveled and lived all over the world. He speaks 15 languages fluently – English, Arabic, Swedish, French, Russian, Spanish, Italian, Turkish, Urdu, German, Hindi, Filipino, Swahili, Afrikaans and Polish. He understands your needs, and your guests’ needs. And most importantly – Frank is here to make you money.",
        src: "/jpeg/B14_Subcategories/1.jpg",
    },
    {
        title: "A place for a company description, here should be a text description in several lines text place here",
        text: "Frank is a globetrotter – having traveled and lived all over the world. He speaks 15 languages fluently – English, Arabic, Swedish, French, Russian, Spanish, Italian, Turkish, Urdu, German, Hindi, Filipino, Swahili, Afrikaans and Polish. He understands your needs, and your guests’ needs. And most importantly – Frank is here to make you money.",
        src: "/jpeg/B14_Subcategories/2.jpg",
    },
    {
        title: "A place for a company description, here should be a text description in several lines text place here",
        text: "Frank is a globetrotter – having traveled and lived all over the world. He speaks 15 languages fluently – English, Arabic, Swedish, French, Russian, Spanish, Italian, Turkish, Urdu, German, Hindi, Filipino, Swahili, Afrikaans and Polish. He understands your needs, and your guests’ needs. And most importantly – Frank is here to make you money.",
        src: "/jpeg/B14_Subcategories/3.jpg",
    },
    {
        title: "A place for a company description, here should be a text description in several lines text place here",
        text: "Frank is a globetrotter – having traveled and lived all over the world. He speaks 15 languages fluently – English, Arabic, Swedish, French, Russian, Spanish, Italian, Turkish, Urdu, German, Hindi, Filipino, Swahili, Afrikaans and Polish. He understands your needs, and your guests’ needs. And most importantly – Frank is here to make you money.",
        src: "/jpeg/B14_Subcategories/4.jpg",
    },
];

export const Subcategories = () => {
    return (
        <div className={style.subcategories}>
            <div className={style.inner}>

                <div className={style.header}>
                    <H2 preTitle="Subcategories"
                        title="A headline that will talk about subcatagories"
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

                <div className={style.items}>
                    {
                        items.map(({title, text, src}, key) => (
                            <div className={style.item} key={key}>
                                <img src={src} alt=""/>

                                <div className={style.texts}>
                                    <p className={style.title}>{title}</p>
                                    
                                    <div className={style.bottomText}>
                                        <div className={style.iconWrapper}>
                                            <img src="/png/icons/cube.png" alt=""/>
                                        </div> 
                                        <p className={style.text}>{text}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    )
}
