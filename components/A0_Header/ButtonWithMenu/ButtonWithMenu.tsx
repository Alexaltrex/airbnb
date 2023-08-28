import {FC, useEffect, useRef, useState} from "react";
import style from "./ButtonWithMenu.module.scss"
import {svgIcons} from "../../../assets/svgIcons";
import clsx from "clsx";
import {useRouter} from "next/router";
import {gsap} from "gsap";
import {useMediaQuery} from "@mui/material";

const menuItems = [
    {label: "Full Management", icon: svgIcons.clockRefresh, url: "/service/0"},
    {label: "Cleaning & Maintenance", icon: svgIcons.settings, url: "/service/1"},
    {label: "Interior design", icon: svgIcons.homeSmile, url: "/service/2"},
]

interface IButtonWithMenu {
    white?: boolean
    className?: string
    bottom?: boolean
    center?: boolean
}

export const ButtonWithMenu: FC<IButtonWithMenu> = ({
                                                        white = false,
                                                        className,
                                                        bottom = true,
                                                        center = false,
                                                    }) => {
    const matchesDesktop = useMediaQuery('(min-width:1440px)');
    const ref = useRef<HTMLDivElement>(null!);
    const [show, setShow] = useState(false)

    const onMouseEnterHandler = () => {
        if (matchesDesktop) {
            setShow(true)
        }
    }

    const onMouseLeave = () => {
        if (matchesDesktop) {
            setShow(false)
        }
    }

    const onClick = () => {
        if (!matchesDesktop) {
            setShow(!show);
        }
    }

    const router = useRouter();

    useEffect(() => {
        gsap.to(ref.current, {
            scale: show ? 1 : 0,
            opacity: show ? 1 : 0,
            transformOrigin: bottom ? "left top" : "left bottom",
            duration: 0.2,
        })
    }, [show])

    return (
        <div className={style.buttonWithMenuWrapper}
             onMouseEnter={onMouseEnterHandler}
             onMouseLeave={onMouseLeave}
        >
            <button className={clsx(
                style.buttonWithMenu,
                Boolean(className) && className
            )}>
                <p className={clsx({
                    [style.label]: true,
                    [style.label_white]: white,
                    [style.label_open]: show,
                })}
                   onClick={onClick}
                >
                    Services
                </p>
                <div className={clsx({
                    [style.arrowWrapper]: true,
                    [style.arrowWrapper_white]: white,
                    [style.arrowWrapper_open]: show,
                })}>
                    {svgIcons.arrowUp}
                </div>
            </button>

            <div className={clsx({
                [style.menu]: true,
                [style.menu_top_left]: !bottom && !center,
                [style.menu_top_center]: !bottom && center,
            })}
                 ref={ref}
            >
                {
                    menuItems.map(({label, icon, url}, key) => (
                        <div key={key}
                             onClick={async () => {
                                 setShow(false);
                                 await router.push(url);
                             }}
                             className={style.menuItem}>
                            <div className={style.iconWrapper}>
                                {icon}
                            </div>
                            <p className={style.label}>{label}</p>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}
