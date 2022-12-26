import style from "./Advantages.module.scss"
import {H2} from "../X_common/H2/H2";

export const Advantages = () => {
    return (
        <div className={style.advantages}>
            <div className={style.inner}>

                <div className={style.header}>
                    <H2 preTitle="Advantages"
                        title="A headline that will talk about the benefits"
                        white={false}
                    />
                </div>

            </div>
        </div>
    )
}
