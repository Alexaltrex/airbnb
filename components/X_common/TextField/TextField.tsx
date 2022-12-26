import {FC, useState} from "react";
import style from "./TextField.module.scss"
import {useField} from "formik";
import clsx from "clsx";

interface ITextField {
    name: string
    label: string
    className?: string
}

export const TextField: FC<ITextField> = ({
                                              name,
                                              label,
                                              className,
                                              ...props
                                          }) => {
    const [inputProps, metaProps] = useField(name);

    const [focus, setFocus] = useState(false);
    const onFocusHandler = () => setFocus(true)
    const onBlurHandler = (e: any) => {
        setFocus(false);
        inputProps.onBlur(e);
    }

    return (
        <div className={clsx({
            [style.textField]: true,
            [style.textField_focus]: focus ,
            [style.textField_error]: metaProps.touched && Boolean(metaProps.error),
        }, Boolean(className) && className)}>
            <input type="text"
                   className={style.input}
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
