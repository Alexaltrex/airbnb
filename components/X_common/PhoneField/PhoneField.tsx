import {useField} from "formik";
import {ChangeEvent, FC, useRef, useState} from "react";
import style from "./PhoneField.module.scss"
import clsx from "clsx";
import {countries, hasFlag } from 'country-flag-icons'
import Select from "@mui/material/Select";
import {FormControl, MenuItem} from "@mui/material";
import codes from 'country-calling-code';
import {svgIcons} from "../../../assets/svgIcons";
import {MenuProps} from "@mui/material/Menu/Menu";

type PhoneFieldType = {
    className?: string
    dark?: boolean
}


export const PhoneField: FC<PhoneFieldType> = ({
                                                   className,
                                                   dark = true,
                                                   ...props
                                               }) => {

    // flag
    const [inputFlag, metaFlag, helper] = useField("isoCode2");

    // console.log(countries)
    // console.log(codes)

    const [searchValue, setSearchValue] = useState("")
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    }

    const onKeyDown = (e: any) => {
        e.stopPropagation();
    }

    const onCloseSelect = () => {
        console.log("onCloseSelect")
        setSearchValue("")
    }

    // phone
    const [inputPhone, metaPhone, helperPhone] = useField("phone");
    const ref = useRef<HTMLInputElement>(null!);
    const [focus, setFocus] = useState(false);
    const onFocusHandler = () => setFocus(true)
    const onBlurHandler = (e: any) => {
        setFocus(false);
        inputPhone.onBlur(e);
    }

    return (
        <div className={clsx({
            [style.phoneField]: true,
            [style.phoneField_focus]: focus,
            [style.phoneField_error]: metaPhone.touched && Boolean(metaPhone.error),
            [style.phoneField_white]: !dark,
        }, Boolean(className) && className)}>

            <div className={style.selectFlag}>
                <FormControl fullWidth={true}
                             size='small'
                             sx={sxFormControl(dark)}
                >
                    <Select name={inputFlag.name}
                            value={inputFlag.value}
                            onBlur={inputFlag.onBlur}
                            onChange={inputFlag.onChange}
                            error={metaFlag.touched && Boolean(metaFlag.error)}
                            onClose={() => {
                                onCloseSelect()
                            }}
                            renderValue={
                                isoCode2 => (
                                    <img alt={isoCode2}
                                         src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${isoCode2}.svg`}
                                         className={style.renderValue}
                                    />
                                )
                            }
                            MenuProps={{
                                sx: sxMenu,
                            }}
                            {...props}
                    >
                        <div className={style.searchWrapper}>
                            {svgIcons.search}
                            <input type="text"
                                   onChange={e => onChange(e)}
                                   value={searchValue}
                                   onKeyDown={e => onKeyDown(e)}
                                   className={style.searchField}
                                   placeholder="Search"
                            />
                        </div>

                        {
                            codes
                                .sort((itemA, itemB) => {
                                    if (itemA.isoCode2 === inputFlag.value) {
                                        return -1
                                    }
                                    if (itemB.isoCode2 === inputFlag.value) {
                                        return 1
                                    }

                                    return 0
                                })
                                .filter(item => item.isoCode2.includes(searchValue.toUpperCase()) || (item.countryCodes[0] as string).includes(searchValue) )
                                //.slice(0,3)
                                .map(({isoCode2, countryCodes, country}, key) => {
                                    if (!hasFlag(isoCode2)) return
                                    return (
                                        <MenuItem key={key}
                                                  value={isoCode2}
                                                  sx={sxMenuItem}
                                                  disableTouchRipple={true}
                                                  disableRipple={true}
                                        >
                                            <div className={clsx({
                                                [style.menuItem]: true,
                                                [style.menuItem_selected]: isoCode2 === inputFlag.value,
                                            })}>
                                                <img alt={country}
                                                     src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${isoCode2}.svg`}
                                                     className={style.flag}
                                                />
                                                <p>
                                                    <span>{isoCode2}</span> <span>{`+${countryCodes[0]}`}</span>
                                                </p>
                                            </div>
                                        </MenuItem>
                                    )
                                }
                            )
                        }
                    </Select>
                </FormControl>
            </div>

            <div className={style.phoneWrapper}
                 onClick={() => {
                     onFocusHandler();
                     ref.current.focus();
                 }}
            >
                {
                    (focus || inputPhone.value) && (
                        <p className={clsx({
                            [style.code]: true,
                            [style.code_white]: !dark,
                        })}>
                            {`+${ codes.find(el => el.isoCode2 === inputFlag.value)?.countryCodes[0] || "+666"}`}
                        </p>
                    )
                }

                <input type="text"
                       ref={ref}
                       className={clsx({
                           [style.input]: true,
                           [style.input_white]: !dark,
                       })}
                       name={inputPhone.name}
                       value={inputPhone.value}
                       onChange={inputPhone.onChange}
                       onFocus={onFocusHandler}
                       onBlur={onBlurHandler}
                       {...props}
                />

                <p className={clsx({
                    [style.label]: true,
                    [style.label_focus]: focus || inputPhone.value,
                    [style.label_white]: !dark
                })}>
                    Phone number
                </p>

            </div>

            {
                metaPhone.touched && Boolean(metaPhone.error) && (
                    <p className={style.error}>
                        {metaPhone.error}
                    </p>
                )
            }

        </div>
    )

}

//========= SX =========//
const sxFormControl = (dark: boolean) => ({
    "& .MuiInputBase-root": {
        color: dark ? "#F4F0EC" : "#2A2631",
        fontFamily: 'Urbanist',
        fontWeight: 400,
        fontSize: '16px',
        lineHeight: '140%',
        height: "60px",
        borderRadius: "30px",
        border: "none",
        boxSizing: "border-box",
        //background: dark ? 'rgba(255, 255, 255, 0.1)' : "transparent",
        transition: "0.3s",
        //backdropFilter: 'blur(11px)',
        "&:hover": {
            //background: 'rgba(255, 255, 255, 0.35)'
        },
        "&.Mui-focused": {
            //background: 'rgba(255, 255, 255, 0.35)',
        },
    },
    "& .MuiOutlinedInput-notchedOutline": {
        border: "none",
    },
    "& .MuiSelect-select": {
        padding: "19px 0 19px 26px",
        paddingRight: "0!important",
    },
    "& .MuiSvgIcon-root": {
        fill: dark ? "#F4F0EC" : "#304250",
        right: "6px"
    },
})

const sxMenu = {
    "& .MuiPaper-root": {
        borderRadius: "20px",
    },
    "& .MuiList-root": {
        paddingTop: "5px",
        paddingBottom: "5px",
    }
}

const sxMenuItem = {
    padding: "2.5px 32px",
    "&:hover": {
        backgroundColor: "#FFF",
    },
    "&.Mui-selected": {
        backgroundColor: "#FFF",
        "&:hover": {
            backgroundColor: "#FFF",
        },
    }
}
