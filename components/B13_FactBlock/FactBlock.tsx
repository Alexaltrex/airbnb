import style from "./FactBlock.module.scss"
import {Dot} from "../X_common/Dot/Dot";
import {FC, useRef, useState} from "react";
import clsx from "clsx";
import {svgIcons} from "../../assets/svgIcons";

interface IFactBlock {
    title: string
    text: string
    image: string
    video: string
}

export const FactBlock: FC<IFactBlock> = ({title, text, image, video}) => {
    const ref = useRef<HTMLVideoElement>(null!);
    const onClick = () => {
        if (playing) {
            ref.current.pause();
            setPlaying(false)
        } else {
            ref.current.play();
            setPlaying(true)
        }

    }

    const [playing, setPlaying] = useState(true);

    return (
        <div className={style.factBlock}>
            <div className={style.inner}>
                <div className={style.top}>
                    <div className={style.top_top}>
                        <p className={style.preTitle}>Fact</p>
                        <h2 className={style.title}>{title}</h2>
                    </div>
                    <div className={style.top_bottom}>
                        <Dot className={style.dot}/>
                        <p className={style.description}>{text}</p>
                    </div>

                </div>
                <div className={style.videoWrapper}
                     onClick={onClick}
                >
                    <video ref={ref}
                           src={video}
                           autoPlay={true}
                           muted={true}
                           loop={true}
                           playsInline={true}
                    />

                    <div className={clsx({
                        [style.mask]: true,
                        [style.mask_show]: !playing,
                    })}>
                        <div className={style.circleWrapper}>
                            {
                                svgIcons.pause_circle
                            }
                            <p>Pause</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
