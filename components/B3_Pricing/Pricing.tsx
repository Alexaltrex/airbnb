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
                    <div className={style.right}>
                        <div className={style.iconWrapper}>
                            <img src="/png/icons/smile.png" alt=""/>
                        </div>
                        <p className={style.description}>
                            A small description, which can be composed in two or three stoic, which describes the essence
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
