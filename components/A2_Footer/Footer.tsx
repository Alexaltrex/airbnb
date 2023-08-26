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
                    <div className={style.link}>
                        <ButtonWithMenu white={!white} bottom={false} center={true}/>
                    </div>
                    <NavLink href="/pricing" label="Pricing" className={style.link} white={!white}/>
                    <NavLink href="/contact" label="Contact" className={style.link} white={!white}/>
                </div>

                <div className={style.bottom}>
                    <p>Triva © 2023</p>
                    <p>All right reserved</p>
                </div>
            </div>
        </footer>
    )
}
