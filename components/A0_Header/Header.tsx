import style from "./Header.module.scss"
import Link from "next/link";
import clsx from "clsx";
import {FC} from "react";
import {useRouter} from "next/router";
import {ButtonWithMenu} from "./ButtonWithMenu/ButtonWithMenu";
import {ButtonContained, ColorEnum} from "../X_common/ButtonContained/ButtonContained";
import {BurgerButton} from "./BurgerButton/BurgerButton";
import {SocialLinkWithTooltip} from "../X_common/SocialLinkWithTooltip/SocialLinkWithTooltip";
import {svgIcons} from "../../assets/svgIcons";
import {NavLink} from "../X_common/NavLink/NavLink";
import {observer} from "mobx-react-lite";
import {useStore} from "../../store/useStore";

//========= HEADER =========//
export const Header = observer(() => {
    //console.log(useRouter().pathname)
    const {setPopupForm} = useStore();

    return (
        <header className={style.header}>
            <div className={style.inner}>
                <Link href='/'
                      className={style.logo}
                >
                    <img src='/png/A0_Header/logo.png'
                         alt=""
                    />
                </Link>

                <div className={style.links}>
                    <NavLink href="/aboutUs" label="About us" className={style.link}/>
                    <ButtonWithMenu/>
                    <NavLink href="/pricing" label="Pricing" className={style.link}/>
                    <NavLink href="/contact" label="Contact" className={style.link}/>
                </div>

                <div className={style.contacts}>
                    <SocialLinkWithTooltip label="+971 58543 6008"
                                           icon={svgIcons.phone}
                                           tooltip={true}
                                           href="tel:+971585436008"
                    />
                    <SocialLinkWithTooltip label="info@trivahomes.com"
                                           icon={svgIcons.mail}
                                           tooltip={true}
                                           className={style.socialLink}
                                           href="mailto:info@trivahomes.com"
                    />
                    <ButtonContained label="Get started"
                                     color={ColorEnum.grey}
                                     className={style.startBtn}
                                     onClick={() => setPopupForm(true)}
                    />
                </div>

                <BurgerButton/>

            </div>
        </header>
    )
})
