import style from "./TextBlockSmall.module.scss"

const texts = [
    "Cool ",
    " headline about price page",
];

export const TextBlockSmall = () => {
    return (
        <div className={style.textBlockSmall}>
            <div className={style.inner}>

                <p className={style.text}>
                    <span>{texts[0]}</span>
                    <img src="/png/TextBlockSmall/0.png" alt=""/>
                    <span>{texts[1]}</span>
                </p>

                    <p className={style.smallText}>
                    A small description, which can be composed in two or three stoic, which describes the essence
                </p>
            </div>
        </div>
    )
}
