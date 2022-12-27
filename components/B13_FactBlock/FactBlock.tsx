import style from "./FactBlock.module.scss"
import {Dot} from "../X_common/Dot/Dot";


export const FactBlock = () => {
    return (
        <div className={style.factBlock}>
             <div className={style.inner}>

                <div className={style.top}>
                    <p className={style.preTitle}>Fact</p>
                    <h2 className={style.title}>We are ranked first among our competitors</h2>
                    <Dot className={style.dot}/>
                    <p className={style.description}>
                        A small description, which can be composed in two or three stoic, which describes the essence. A small description, which can be composed.
                    </p>
                </div>

                 <div className={style.bottom}>

                 </div>
             </div>
        </div>
    )
}
