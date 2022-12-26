import style from "./BurgerMenu.module.scss"
import clsx from "clsx";
import {observer} from "mobx-react-lite";
import {useStore} from "../../store/useStore";
import {FC, useState} from "react";
import {useRouter} from "next/router";
import Link from "next/link";
import {svgIcons} from "../../assets/svgIcons";
import {Collapse} from "@mui/material";
import {SocialLinkWithTooltip} from "../X_common/SocialLinkWithTooltip/SocialLinkWithTooltip";
import {ButtonContained, ColorEnum} from "../X_common/ButtonContained/ButtonContained";

interface IMenuLink {
    href: string
    label: string
    onClick: () => void
}

export const MenuLink: FC<IMenuLink> = ({
                                            href,
                                            label,
                                            onClick
                                        }) => {
    return (
        <Link href={href} passHref legacyBehavior>
            <a className={style.menuLink}
               onClick={onClick}
            >
                {label}
            </a>
        </Link>
    )
}


export const BurgerMenu = observer(() => {
    const {burgerMenu, setBurgerMenu} = useStore();
    const [open, setOpen] = useState(false);
    const router = useRouter();
    const onClose = () => setBurgerMenu(false);
    const onSubmenuClick = () => {
        router.push("/service");
        onClose();
    }

    return (
        <div className={clsx({
            [style.burgerMenu]: true,
            [style.burgerMenu_open]: burgerMenu,
        })}>

            <div className={style.links}>
                <MenuLink href="/aboutUs" label="About us" onClick={onClose}/>
                <div className={clsx({
                    [style.switcher]: true,
                    [style.switcher_open]: open,
                })}
                >
                    <div className={style.switch}
                         onClick={() => setOpen(!open)}
                    >
                        <p>Services</p>
                        {svgIcons.arrowUp}
                    </div>
                    <Collapse in={open}>
                        <div className={style.subMenu}>
                            {
                                [
                                    "Full Managment",
                                    "Cleaning & Maintenance",
                                    "Interior design"
                                ].map((el, key) => (
                                    <p key={key}
                                       onClick={onSubmenuClick}
                                    >
                                        {el}
                                    </p>
                                ))
                            }


                        </div>
                    </Collapse>
                </div>
                <MenuLink href="/pricing" label="Pricing" onClick={onClose}/>
                <MenuLink href="/contact" label="Contact" onClick={onClose}/>
            </div>

            <div className={style.bottom}>
                <div className={style.socialLinks}>
                    <SocialLinkWithTooltip label="+971 58543 6008"
                                           icon={svgIcons.phone}
                                           tooltip={false}
                                           href="tel:+971585436008"
                    />
                    <SocialLinkWithTooltip label="info@trivahomes.com"
                                           icon={svgIcons.mail}
                                           tooltip={false}
                                           className={style.socialLink}
                                           href="mailto:info@trivahomes.com"
                    />
                </div>

                <ButtonContained label="Get started"
                                 color={ColorEnum.grey}
                                 className={style.startBtn}
                />
            </div>


        </div>
    )
})
