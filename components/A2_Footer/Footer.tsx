import style from "./Footer.module.scss";
import {FC} from "react";
import clsx from "clsx";
import {NavLink} from "../X_common/NavLink/NavLink";
import {ButtonWithMenu} from "../A0_Header/ButtonWithMenu/ButtonWithMenu";

//========= FOOTER =========//
interface IFooter {
    white?: boolean
}

export const Footer: FC<IFooter> = ({white = false}) => {
    return (
        <footer className={clsx({
            [style.footer]: true,
            [style.footer_white]: white,
        })}>
            <div className={style.inner}>
                <div className={style.links}>
                    <NavLink href="/aboutUs" label="About us" white={!white}/>
                    <ButtonWithMenu white={!white} className={style.link}/>
                    <NavLink href="/pricing" label="Pricing" className={style.link} white={!white}/>
                    <NavLink href="/contact" label="Contact" className={style.link} white={!white}/>
                </div>

                <div className={style.bottom}>
                    <p>All right reserved</p>
                    <p>Triva © 2022</p>
                </div>
            </div>
        </footer>
    )
}
