import style from "./SocialLinkWithTooltip.module.scss";
import {FC, useEffect, useRef, useState} from "react";
import {svgIcons} from "../../../assets/svgIcons";
import clsx from "clsx";
import {useOutsideButNotOnTargetClick} from "../../../hooks/useOutsideClick";
import {gsap} from "gsap";

interface ISocialLinkWithTooltip {
    className?: string
    label: string
    icon: JSX.Element
    tooltip: boolean
    href: string
}

export const SocialLinkWithTooltip: FC<ISocialLinkWithTooltip> = ({
                                                                      className,
                                                                      label,
                                                                      icon,
                                                                      tooltip,
                                                                      href
                                                                  }) => {

    const onCopyHandler = () => {
        navigator.clipboard.writeText(label);
    }

    const ref = useRef<HTMLDivElement>(null!);
    const [hover, setHover] = useState(false)
    const onMouseEnter = () => {
        setHover(true)
    }
    const onMouseLeave = () => {
        setHover(false)
    }

    useEffect(() => {
        gsap.to(ref.current, {
            scale: hover ? 1 : 0,
            opacity: hover ? 1 : 0,
            transformOrigin: "right top",
            duration: 0.2,
        })
    }, [hover])

    return (
        <div className={clsx(
            style.socialLinkWithTooltip,
            Boolean(className) && className
        )}
             onMouseEnter={onMouseEnter}
             onMouseLeave={onMouseLeave}
        >
            {
                tooltip ? (
                    <div className={style.btn}>
                        {icon}
                    </div>
                ) : (
                    <a className={style.btn}
                       href={href}
                       target="_blank"
                    >
                        {icon}
                    </a>
                )
            }

            {
                tooltip && (
                    <div className={style.tooltipWrapper}
                         ref={ref}
                    >
                        <div className={style.tooltip}

                        >
                            <a className={style.link}
                               href={href}
                               target="_blank"
                            >
                                {label}
                            </a>
                            <button className={style.copyBtn}
                                    onClick={onCopyHandler}
                            >
                                {svgIcons.copy}
                            </button>
                        </div>
                    </div>

                )
            }
        </div>
    )
}
