import Select, {SelectProps} from "@mui/material/Select";
import {FC} from "react";
import {FormControl, InputLabel, MenuItem} from "@mui/material";
import {useField} from "formik";
import clsx from "clsx";
import style from "./SelectFieldWithLabel.module.scss";

export interface IMenuItem {
    value: number
    label: string
}

type FieldSelectType = {
    name: string
    menuItems: IMenuItem[]
    className?: string
    backgroundGray?: boolean
} & SelectProps;

export const SelectFieldWithLabel: FC<FieldSelectType> = ({
                                                              name,
                                                              menuItems,
                                                              className,
                                                              backgroundGray = false,
                                                              ...props
                                                          }) => {
    const [field, meta, helper] = useField(name);
    return (
            <FormControl fullWidth={true}
                         size='small'
                         error={meta.touched && Boolean(meta.error)}
                         className={clsx(Boolean(className) && className)}
                         sx={{
                             "& .MuiInputBase-root": {
                                 color: backgroundGray ? '#000' : "#F4F0EC",
                                 fontFamily: 'Urbanist',
                                 fontWeight: 400,
                                 fontSize: '16px',
                                 lineHeight: '140%',
                                 height: "60px",
                                 borderRadius: "30px",
                                 border: "none",
                                 boxSizing: "border-box",
                                 background: backgroundGray ? 'rgba(42, 38, 49, 0.05)' : 'rgba(255, 255, 255, 0.1)',
                                 transition: "0.3s",
                                 backdropFilter: 'blur(11px)',
                                 display: "flex",
                                 "alignItems": "flex-end",
                                 "&:hover": {
                                     background: backgroundGray ? 'rgba(42, 38, 49, 0.35)' : 'rgba(255, 255, 255, 0.35)'
                                 },
                                 "&.Mui-focused": {
                                     background: backgroundGray ? 'rgba(42, 38, 49, 0.35)' : 'rgba(255, 255, 255, 0.35)',
                                 },
                             },
                             "& .MuiOutlinedInput-notchedOutline": {
                                 border: "none",
                             },
                             "& .MuiSelect-select": {
                                 paddingLeft: "32px",
                                 paddingBottom: "9px"
                             },
                             "& .MuiSvgIcon-root": {
                                 fill: backgroundGray ? "#000" : "#F4F0EC",
                                 right: "30px"
                             },
                         }}
            >
                <InputLabel id={name}
                            shrink={false}
                            sx={{
                                fontFamily: 'Urbanist',
                                fontWeight: 400,
                                fontSize: '14px',
                                lineHeight: '140%',
                                color: backgroundGray ? "rgba(0,0,0,0.5)" : "#B5B1B8!important",
                                left: "16px"
                            }}
                >
                    {props.label}
                </InputLabel>
                <Select name={field.name}
                        label={props.label}
                        value={field.value}
                        onBlur={field.onBlur}
                        onChange={field.onChange}
                        error={meta.touched && Boolean(meta.error)}
                        renderValue={selected => (
                            <p className={clsx({
                                [style.selected]: true,
                                [style.selected_backgroundGray]: backgroundGray,
                            })}>
                                {menuItems[selected as number].label}
                            </p>
                        )}
                        {...props}
                        MenuProps={{
                            sx: {
                                "& .MuiPaper-root": {
                                    borderRadius: "20px",
                                }
                            }
                        }}

                >
                    {
                        menuItems.map(el => (
                                <MenuItem key={el.value}
                                          value={el.value}
                                          sx={{
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
                                          }}
                                >
                                    <div className={style.menuItem}>
                                        <p>{el.label}</p>
                                        <div className={clsx({
                                            [style.check]: true,
                                            [style.check_selected]: el.value === field.value,
                                        })}/>
                                    </div>

                                </MenuItem>
                            )
                        )
                    }
                </Select>
            </FormControl>
    )

}
