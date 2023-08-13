import style from "./Pricing.module.scss"
import {H2} from "../X_common/H2/H2";
import {cards} from "./cards";
import {Card} from "./Card/Card";

export const Pricing = () => {
    return (
        <div className={style.pricing}>
            <div className={style.inner}>
                <div className={style.topBlock}>
                    <H2 preTitle=""
                        title="Pricing"
                    />
                    <div className={style.right}>
                        <div className={style.iconWrapper}>
                            <img src="/png/icons/smile.png" alt=""/>
                        </div>
                        <p className={style.description}>
                            Transparent and competitive pricing tailored to your specific needs.
                        </p>
                    </div>
                </div>

                <div className={style.cards}>
                    {
                        cards.map((card, key) => (
                            <Card key={key} {...card}/>
                        ))
                    }
                </div>
            </div>


        </div>
    )
}
