import style from "./Subcategories.module.scss"
import {H2} from "../X_common/H2/H2";
import {Tag} from "../X_common/Tag/Tag";
import {FC} from "react";
import {svgIcons} from "../../assets/svgIcons";

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

interface ISubcategories {
    title: string
    tags: string[]
    items: {
        title: string
        texts: string[]
        image: string
        icon_image: string
        icon_label: string
    }[]
}

export const Subcategories: FC<ISubcategories> = ({
                                                      title,
                                                      tags,
                                                      items
                                                  }) => {
    return (
        <div className={style.subcategories}>
            <div className={style.inner}>

                <div className={style.header}>
                    <H2 preTitle="Subcategories"
                        title={title}
                        white={false}
                    />
                    <div className={style.tagsMobile}>
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
                    <div className={style.tagsDesktop}>
                        <div className={style.tagsRow}>
                            {
                                [tags[0], tags[1], tags[2]].map((tag, key) => (
                                    <Tag key={key}
                                         tag={tag}
                                         white={false}
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
                                         white={false}
                                         className={style.tag}
                                    />
                                ))
                            }
                        </div>
                    </div>
                </div>

                <div className={style.items}>
                    {
                        items.map(({title, texts, image, icon_image, icon_label}, key) => (
                            <div className={style.item} key={key}>
                                <img src={image} alt="" className={style.img}/>

                                <div className={style.textsBlock}>
                                    <p className={style.title}>{title}</p>

                                    <div className={style.bottomText}>
                                        <div className={style.iconWrapper}>
                                            <img src={icon_image} alt=""/>
                                            {svgIcons.arrowBow2}
                                            <p>{icon_label}</p>
                                        </div>
                                        <div className={style.texts}>
                                            <p className={style.text}>{texts[0]}</p>
                                            <br/>
                                            <p className={style.text}>{texts[1]}</p>
                                        </div>

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
