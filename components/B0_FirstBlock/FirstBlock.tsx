import style from "./FirstBlock.module.scss"
import {ButtonContained, ColorEnum} from "../X_common/ButtonContained/ButtonContained";
import {observer} from "mobx-react-lite";
import {useStore} from "../../store/useStore";

const text = "Simplify the management of your properties and maximize your income effortlessly "

const items = [
    {
        value: "230+",
        label: "Partners"
    },
    {
        value: "1500+",
        label: "Happy Customers"
    },
    {
        value: "400+",
        label: "Homes"
    },
]


export const FirstBlock = observer(() => {
    const {setPopupForm} = useStore();
    return (
        <div className={style.firstBlock}>
            <div className={style.inner}>
                <div className={style.topBlock}>
                    <h1 className={style.title}>
                        Unlock the Full Potential of Your Rentals with Triva
                    </h1>
                    <ButtonContained label="Manage my property"
                                     color={ColorEnum.black}
                                     className={style.manageBtn}
                                     onClick={() => setPopupForm(true)}
                    />
                </div>

                <div className={style.bottomBlock}>
                    <p className={style.text}>
                        {text}
                    </p>
                    <div className={style.items}>
                        {
                            items.map(({value, label}, key) => (
                                <div className={style.item} key={key}>
                                    <p>{value}</p>
                                    <p>{label}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
})
