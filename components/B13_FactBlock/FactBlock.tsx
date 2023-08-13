import style from "./FactBlock.module.scss"
import {Dot} from "../X_common/Dot/Dot";
import {FC} from "react";

interface IFactBlock {
    title: string
    text: string
    image: string
}

export const FactBlock: FC<IFactBlock> = ({ title, text, image }) => {
    return (
        <div className={style.factBlock}>
             <div className={style.inner}>
                <div className={style.top}>
                    <div className={style.top_top}>
                        <p className={style.preTitle}>Fact</p>
                        <h2 className={style.title}>{title}</h2>
                    </div>
                    <div className={style.top_bottom}>
                        <Dot className={style.dot}/>
                        <p className={style.description}>{text}</p>
                    </div>

                </div>
                 <div className={style.bottom}
                      style={{
                          backgroundImage: `url(${image})`
                      }}
                 />
             </div>
        </div>
    )
}
