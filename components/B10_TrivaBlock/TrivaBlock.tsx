import style from "./TrivaBlock.module.scss"
import {svgIcons} from "../../assets/svgIcons";
import clsx from "clsx";
import {MouseEvent, useRef, useState} from "react";
import src from "../../assets/logo.webm";

const text0 = "A place for a company description, here should be a text description in several lines text place here";
const text1 = "Frank is a globetrotter – having traveled and lived all over the world. He speaks 15 languages fluently – English, Arabic, Swedish, French, Russian, Spanish, Italian, Turkish, Urdu, German, Hindi, Filipino, Swahili, Afrikaans and Polish. He understands your needs, and your guests’ needs. And most importantly – Frank is here to make you money.";

const items = [
    {
        title: "Title 1",
        description: "Description text 1",
        src: "/png/icons/smile_glass.png",
    },
    {
        title: "Title 2",
        description: "Description text 2",
        src: "/png/icons/smile_brain.png",
    }
]

export const TrivaBlock = () => {
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
        <div className={style.trivaBlock}>
            <div className={style.inner}>

                <div className={style.topBlock}
                     ref={ref}
                     onMouseMove={onMouseMoveHandler}
                >
                    <div className={style.box}>
                        <img src="/png/B10_TrivaBlock/logo.png" alt=""/>
                        {/*<picture>*/}
                        {/*    <img src={src} alt=""/>*/}
                        {/*    <source srcSet={src} type='image/webp' />*/}
                        {/*</picture>*/}

                    </div>

                    {
                        items.map(({title, description, src}, key) => (
                            <div className={clsx(style.item, style[`item${key}`])}
                                 key={key}
                                 style={{
                                     transform: `translate(${deltaX}px, ${deltaY}px)`
                                 }}
                            >
                                <div className={style.iconWrapper}>
                                    <img src={src} alt=""/>
                                </div>
                                <div className={style.texts}>
                                    <p>{title}</p>
                                    <p>{description}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>

                <div className={style.bottomBlock}>
                    <p className={style.topText}>
                        {text0}
                    </p>

                    <div className={style.bottom}>

                        <div className={style.arrowBlock}>
                            <div className={style.iconWrapper}>
                                <img src="/png/icons/cube.png" alt=""/>
                            </div>
                            <div className={style.arrowWrapper}>
                               <p>Some text</p>
                                {svgIcons.arrowBow2}
                            </div>
                        </div>

                        <p className={style.bottomText}>
                            {text1}
                        </p>
                    </div>

                </div>

            </div>
        </div>
    )
}
