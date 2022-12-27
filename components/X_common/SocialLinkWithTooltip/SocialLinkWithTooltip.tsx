import style from "./SocialLinkWithTooltip.module.scss";
import {FC, useRef, useState} from "react";
import {svgIcons} from "../../../assets/svgIcons";
import {observer} from "mobx-react-lite";
import {useStore} from "../../../store/useStore";
import clsx from "clsx";
import {useOutsideButNotOnTargetClick} from "../../../hooks/useOutsideClick";

interface ISocialLinkWithTooltip {
    className?: string
    label: string
    icon: JSX.Element
    tooltip: boolean
    href: string
}

export const SocialLinkWithTooltip: FC<ISocialLinkWithTooltip> = observer(({
                                                                               className,
                                                                               label,
                                                                               icon,
                                                                               tooltip,
                                                                               href
                                                                           }) => {
    const {socialLinkTooltip, setSocialLinkTooltip} = useStore();
    const [enter, setEnter] = useState(false);

    const onMouseEnterHandler = () => {
        if (!socialLinkTooltip) {
            setSocialLinkTooltip(true);
            setEnter(true);
        }
    }

    const onClickHandler = () => setEnter(true);

    const onCopyHandler = () => {
        navigator.clipboard.writeText(label)
        setEnter(false);
        setSocialLinkTooltip(false);
    }


    const tooltipRef = useRef<HTMLDivElement>(null!);
    const exceptRef = useRef<HTMLDivElement>(null!);

    useOutsideButNotOnTargetClick(tooltipRef, exceptRef, () => setEnter(false))

    return (
        <div className={clsx(
            style.socialLinkWithTooltip,
            Boolean(className) && className
        )}>
            {
                tooltip ? (
                    <div className={style.btn}
                        //onMouseEnter={onMouseEnterHandler}
                        //onMouseLeave={() => setEnter(false)}
                         onClick={onClickHandler}
                         ref={exceptRef}
                    >
                        {icon}
                    </div>
                ) : (
                    <a className={style.btn}
                       onMouseEnter={() => setEnter(true)}
                       onMouseLeave={() => setEnter(false)}
                       href={href}
                       target="_blank"
                    >
                        {icon}
                    </a>
                )
            }

            {
                enter && tooltip && (
                    <div className={style.tooltip}
                         ref={tooltipRef}
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
                )
            }

        </div>
    )
})
