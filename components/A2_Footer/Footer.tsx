import style from "./Footer.module.scss";
import {FC, useRef, useState} from "react";
import clsx from "clsx";
import {NavLink} from "../X_common/NavLink/NavLink";
import {ButtonWithMenu} from "../A0_Header/ButtonWithMenu/ButtonWithMenu";
import {Collapse, useMediaQuery} from "@mui/material";
import {svgIcons} from "../../assets/svgIcons";
import {useRouter} from "next/router";

//========= FOOTER =========//
interface IFooter {
    white?: boolean
}

export const Footer: FC<IFooter> = ({white = false}) => {
    const matchDesktop = useMediaQuery('(min-width:1440px)')

    const [open, setOpen] = useState(false);

    const ref = useRef<HTMLDivElement>(null!);

    const onSwitch = () => {
        if (!open) {
            console.log("test");
            if (!open) {
                setTimeout(() => {
                    ref.current.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
        setOpen(!open);
    }

    const router = useRouter();

    const onSubmenuClick = (key: number) => {
        router.push(`/service/${key}`);
        setOpen(false);
    }

    return (
        <>
            <footer className={clsx({
                [style.footer]: true,
                [style.footer_white]: white,
            })}>
                <div className={style.inner}>
                    <div className={style.links}>
                        <NavLink href="/aboutUs" label="About us" white={!white}/>
                        <NavLink href="/pricing" label="Pricing" className={style.link} white={!white}/>

                        {
                            !matchDesktop && (
                                <div className={style.switchWrapper}>

                                    <button className={clsx({
                                        [style.switch]: true,
                                        [style.switch_open]: open,
                                    })}
                                            onClick={onSwitch}
                                    >
                                        <p>Services</p>
                                        {svgIcons.arrowUp}
                                    </button>

                                    <Collapse in={open}>
                                        <div className={style.subMenu}>
                                            {
                                                [
                                                    "Full Managment",
                                                    "Cleaning & Maintenance",
                                                    "Interior design"
                                                ].map((el, key) => (
                                                    <p key={key}
                                                       onClick={() => onSubmenuClick(key)}
                                                    >
                                                        {el}
                                                    </p>
                                                ))
                                            }


                                        </div>
                                    </Collapse>

                                </div>
                            )
                        }

                        {
                            matchDesktop && (
                                <ButtonWithMenu white={!white} bottom={false} center={!matchDesktop}/>
                            )
                        }

                        <NavLink href="/contact" label="Contact" className={style.link} white={!white}/>
                    </div>

                    <div className={style.bottom}>
                        <p>Triva © 2023</p>
                        <p>All right reserved</p>
                    </div>
                </div>
            </footer>
            <div ref={ref}/>
        </>

    )
}
