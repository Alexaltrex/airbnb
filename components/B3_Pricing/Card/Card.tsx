import {FC, useRef, useState} from "react";
import {ICard} from "../cards";
import style from "./Card.module.scss"
import clsx from "clsx";
import {ButtonOutlined} from "../../X_common/ButtonOutlined/ButtonOutlined";
import {ButtonContained, ColorEnum} from "../../X_common/ButtonContained/ButtonContained";
import {svgIcons} from "../../../assets/svgIcons";
import {ClickAwayListener, styled, Tooltip, tooltipClasses, TooltipProps} from "@mui/material";
import Zoom from '@mui/material/Zoom';
import {useOutsideClick} from "../../../hooks/useOutsideClick";

const LightTooltip = styled(({className, ...props}: TooltipProps) => (
    <Tooltip {...props} classes={{popper: className}}/>
))(({theme}) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        // backgroundColor: theme.palette.common.white,
        // color: 'rgba(0, 0, 0, 0.87)',
        // boxShadow: theme.shadows[1],
        // fontSize: 11,
    },
}));


export const Card: FC<ICard> = ({
                                    tooltip,
                                    label,
                                    items,
                                    price,
                                    span,
                                    dark
                                }) => {
    const [open, setOpen] = useState(false);

    const handleTooltipClose = () => {
        setOpen(false);
    };

    const handleTooltipOpen = () => {
        setTimeout(() => setOpen(true), 2000);
    };

    const cardRef = useRef<HTMLDivElement>(null);
    useOutsideClick(cardRef, handleTooltipClose);

    return (
        <ClickAwayListener onClickAway={handleTooltipClose}>

            <LightTooltip PopperProps={{
                disablePortal: true,
            }}
                          onClose={handleTooltipClose}
                          open={open}
                          disableFocusListener
                          disableHoverListener
                          disableTouchListener
                // enterDelay={2000}
                // enterTouchDelay={2000}
                          title={tooltip}
                          placement="top"
                          TransitionComponent={Zoom}
                          TransitionProps={{
                              timeout: 500
                          }}
                          arrow
                          sx={{
                              //backgroundColor: "red",
                              "& .MuiTooltip-tooltip": {
                                  padding: "14px 34px 20px",
                                  backgroundColor: "#F4F0EC",
                                  color: "#2A2631",
                                  fontWeight: 500,
                                  fontSize: "16px",
                                  borderRadius: "15px",
                                  fontFamily: 'Urbanist'
                              },
                              "& .MuiTooltip-arrow": {
                                  color: "#F4F0EC"
                              }
                          }}
                          className={style.tooltip}
            >

                <div className={clsx({
                    [style.card]: true,
                    [style.card_white]: !dark,
                })}
                     onClick={handleTooltipOpen}
                     ref={cardRef}
                >
                    <div>
                        <div className={style.header}>
                            <p className={style.label}>{label}</p>
                            <p className={style.price}>
                                <span>{`${price}`}</span>{span && <span>{span}</span>}
                            </p>
                        </div>
                        <div className={style.items}>
                            {
                                items.map((item, key) => (
                                    <div key={key} className={style.item}>
                                        {svgIcons.check}
                                        <p>{item}</p>
                                    </div>

                                ))
                            }
                        </div>
                    </div>

                    {/*{*/}
                    {/*    dark*/}
                    {/*        ? <ButtonOutlined label="Activate"*/}
                    {/*                          className={style.activateBtn}*/}
                    {/*        />*/}
                    {/*        : <ButtonContained label="Activate"*/}
                    {/*                           color={ColorEnum.black}*/}
                    {/*                           className={style.activateBtn}*/}
                    {/*        />*/}
                    {/*}*/}

                </div>

            </LightTooltip>

        </ClickAwayListener>

    )
}
