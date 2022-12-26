import {FC} from "react";
import clsx from "clsx";
import Link from "next/link";
import style from "./NavLink.module.scss"
import {useRouter} from "next/router";

interface INavLink {
    href: string
    label: string
    className?: string
    white?: boolean
}

export const NavLink: FC<INavLink> = ({
                                          href,
                                          label,
                                          className,
                                          white = false
                                      }) => {
    const router = useRouter();
    return (
        <Link href={href} passHref legacyBehavior>
            <a className={clsx({
                [style.navLink]: true,
                [style.navLink_white]: white,
                [style.navLink_active]: router.pathname.includes(href),
            }, Boolean(className) && className)}>
                {label}
            </a>
        </Link>
    )
}
