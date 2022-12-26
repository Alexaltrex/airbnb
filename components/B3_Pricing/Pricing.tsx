import style from "./Pricing.module.scss"
import {H2} from "../X_common/H2/H2";
import {cards} from "./cards";
import {Card} from "./Card/Card";

export const Pricing = () => {
    return (
        <div className={style.pricing}>
            <div className={style.inner}>
                <div className={style.topBlock}>
                    <H2 preTitle="Pricing"
                        title="Space for a large headline of two lines long"
                    />
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
