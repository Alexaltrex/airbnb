import {FC, useRef, useState} from "react";
import style from "./TextField.module.scss"
import {useField} from "formik";
import clsx from "clsx";

interface ITextField {
    name: string
    label: string
    className?: string
    dark?: boolean
}

export const TextField: FC<ITextField> = ({
                                              name,
                                              label,
                                              className,
                                              dark = true,
                                              ...props
                                          }) => {
    const [inputProps, metaProps] = useField(name);

    const [focus, setFocus] = useState(false);
    const onFocusHandler = () => setFocus(true)
    const onBlurHandler = (e: any) => {
        setFocus(false);
        inputProps.onBlur(e);
    }
    const ref = useRef<HTMLInputElement>(null!);

    return (
        <div className={clsx({
            [style.textField]: true,
            [style.textField_focus]: focus,
            [style.textField_error]: metaProps.touched && Boolean(metaProps.error),
            [style.textField_white]: !dark,
        }, Boolean(className) && className)}
             onClick={() => {
                 onFocusHandler();
                 ref.current.focus();
             }}
        >
            <input type="text"
                   ref={ref}
                   className={clsx({
                       [style.input]: true,
                       [style.input_white]: !dark,
                   })}
                   name={inputProps.name}
                   value={inputProps.value}
                   onChange={inputProps.onChange}
                   onFocus={onFocusHandler}
                   onBlur={onBlurHandler}
                   {...props}

            />

            <p className={clsx({
                [style.label]: true,
                [style.label_focus]: focus || inputProps.value,
                [style.label_white]: !dark
            })}>
                {label}
            </p>

            {
                metaProps.touched && Boolean(metaProps.error) && (
                    <p className={style.error}>
                        {metaProps.error}
                    </p>
                )
            }
        </div>
    )
}
