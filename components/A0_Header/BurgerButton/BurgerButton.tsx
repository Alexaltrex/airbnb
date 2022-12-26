import {observer} from "mobx-react-lite";
import style from "./BurgerButton.module.scss"
import {svgIcons} from "../../../assets/svgIcons";
import {useStore} from "../../../store/useStore";

export const BurgerButton = observer(() => {
    const {burgerMenu, setBurgerMenu} = useStore();


    return (
        <button className={style.burgerButton}
                onClick={() => setBurgerMenu(!burgerMenu)}
        >
            {burgerMenu ? svgIcons.close : svgIcons.menu}
        </button>
    )
})
