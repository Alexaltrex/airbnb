import {FC, useState} from "react";
import style from "./ButtonWithMenu.module.scss"
import {svgIcons} from "../../../assets/svgIcons";
import clsx from "clsx";
import {Menu} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { useRouter } from "next/router";

const menuItems = [
    {label: "Full Managment", icon: svgIcons.clockRefresh},
    {label: "Cleaning & Maintenance", icon: svgIcons.settings},
    {label: "Interior design", icon: svgIcons.homeSmile},
]

interface IButtonWithMenu {
    white?: boolean
    className?: string
}

export const ButtonWithMenu:FC<IButtonWithMenu> = ({
                                                       white = false,
                                                       className
}) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const onClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const router = useRouter();
    const menuItemOnClick = () => {
        router.push("/service")
        handleClose();
    }

    return (
        <>
            <button className={clsx(
                style.buttonWithMenu,
                Boolean(className) && className
            )}
                    onClick={onClickHandler}
            >
                <p className={clsx({
                    [style.label]: true,
                    [style.label_white]: white,
                    [style.label_open]: open,
                })}>
                    Services
                </p>
                <div className={clsx({
                    [style.arrowWrapper]: true,
                    [style.arrowWrapper_white]: white,
                    [style.arrowWrapper_open]: open,
                })}>
                    {svgIcons.arrowUp}
                </div>

            </button>

            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
                sx={{
                    "& .MuiPaper-root": {
                        borderRadius: "15px",
                        background: "#2A2631",
                    },
                    "& .MuiList-root": {
                        background: "#2A2631",
                        padding: "3px!important",
                        borderRadius: "15px",
                    }
                }}
            >
                {
                    menuItems.map(({label, icon}, key) => (
                        <MenuItem key={key}
                                  onClick={menuItemOnClick}
                                  className={style.menuItem}
                        >
                            <div className={style.iconWrapper}>
                                {icon}
                            </div>
                            <p className={style.label}>{label}</p>

                        </MenuItem>
                    ))
                }
            </Menu>
        </>
    )
}
