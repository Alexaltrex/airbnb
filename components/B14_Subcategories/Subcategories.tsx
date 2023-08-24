import style from "./Subcategories.module.scss"
import {H2} from "../X_common/H2/H2";
import {Tag} from "../X_common/Tag/Tag";
import {FC, useLayoutEffect, useRef} from "react";
import {ArrowAnimated} from "../X_common/ArrowAnimated/ArrowAnimated";
import gsap from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
    const appRef = useRef<HTMLDivElement>(null!);
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {

            const items = gsap.utils.toArray<gsap.DOMTarget>([".arrowAnimated0", ".arrowAnimated1", ".arrowAnimated2"]);
            items.forEach((item, index) => {
                gsap
                    .timeline({
                        scrollTrigger: {
                            trigger: item, // ".arrowAnimated",
                            markers: true,
                            start: "center center",
                            end: "center center",
                            toggleActions: "play none reverse none",
                        }
                    })
                    .to(`.arrowAnimated${index} .arrow .mask`, {
                        scaleY: 0,
                        duration: 0.3,
                        ease: "none",
                    }, )
                    .to(`.arrowAnimated${index} .label .mask`, {
                        scaleX: 0,
                        duration: 0.3,
                        ease: "none",
                    })
            })



        }, appRef);
        return () => ctx.revert();
    }, [])

    return (
        <div className={style.subcategories}
             ref={appRef}
        >
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


                                        <ArrowAnimated image={icon_image}
                                                       label={icon_label}
                                                       className={style.arrowAnimated}
                                                       target={`arrowAnimated${key}`}
                                        />

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
