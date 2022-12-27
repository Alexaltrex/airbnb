import {FC} from "react";
import style from "./AccordionItem.module.scss"
import clsx from "clsx";
import {svgIcons} from "../../../assets/svgIcons";
import {Collapse} from "@mui/material";

interface IAccordionItem {
    className?: string
    question: string
    answer: string
    open: boolean
    onClick: () => void
}

export const AccordionItem:FC<IAccordionItem> = ({
                                                     className,
                                                     question,
                                                     answer,
                                                     open,
                                                     onClick
                                                 }) => {
    return (
        <div className={clsx(
            {
                [style.accordionItem]: true,
                [style.accordionItem_open]: open,
            },
            Boolean(className) && className
        )}
             onClick={onClick}
        >
            <div className={style.questionBlock}>
                <p className={style.question}>
                    {question}
                </p>
                {svgIcons.arrowUp}
            </div>

            <Collapse in={open}>
                    <div className={style.answer}>
                        {answer}
                    </div>
            </Collapse>
        </div>
    )
}
