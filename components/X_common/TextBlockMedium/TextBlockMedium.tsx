import style from "./TextBlockMedium.module.scss";

const texts = [
    "Space for a large headline ",
    " maximum ",
    " for a large headline three lines maximum space for a large headline, ",
    " lines maximum."
];

export const TextBlockMedium = () => {
    return (
        <div className={style.textBlockMedium}>
            <div className={style.inner}>
                <p className={style.text}>
                    <span>{texts[0]}</span>
                    <img src="/png/TextBlockMedium/0.png" alt=""/>
                    <span>{texts[1]}</span>
                    <img src="/png/TextBlockMedium/1.png" alt=""/>
                    <span>{texts[2]}</span>
                    <img src="/png/TextBlockMedium/2.png" alt=""/>
                    <span>{texts[3]}</span>
                </p>
            </div>
        </div>
    )
}
