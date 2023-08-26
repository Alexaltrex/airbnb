import {observer} from "mobx-react-lite";
import style from "./BurgerButton.module.scss"
import {svgIcons} from "../../../assets/svgIcons";
import {useStore} from "../../../store/useStore";

export const BurgerButton = observer(() => {
    const {
        burgerMenu, setBurgerMenu,
        setBurgerDropDown,
    } = useStore();

    const onClick = () => {
        setBurgerMenu(!burgerMenu);
        setBurgerDropDown(false);
    }

    return (
        <button className={style.burgerButton}
                onClick={onClick}
        >
            {burgerMenu ? svgIcons.close : svgIcons.menu}
        </button>
    )
})
