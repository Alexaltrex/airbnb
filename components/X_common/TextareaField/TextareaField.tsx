import {FC, useState} from "react";
import {useField} from "formik";
import clsx from "clsx";
import style from "./TextareaField.module.scss";

interface ITextareaField {
    name: string
    placeholder: string
    className?: string
}

export const TextareaField: FC<ITextareaField> = ({
                                                      name,
                                                      className,
                                                      placeholder,
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
            [style.textareaField]: true,
            [style.textareaField_focus]: focus,
            [style.textareaField_error]: metaProps.touched && Boolean(metaProps.error),
        }, Boolean(className) && className)}>
            <textarea className={style.textarea}
                      name={inputProps.name}
                      value={inputProps.value}
                      onChange={inputProps.onChange}
                      onFocus={onFocusHandler}
                      onBlur={onBlurHandler}
                      placeholder={placeholder}
                      {...props}

            />

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
