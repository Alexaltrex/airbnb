import Select, {SelectProps} from "@mui/material/Select";
import {FC} from "react";
import {FormControl, InputLabel, MenuItem} from "@mui/material";
import {useField} from "formik";
import clsx from "clsx";
import style from "./SelectFieldWithLabel.module.scss";

export interface IMenuItem {
    value: string
    label: string
}

type FieldSelectType = {
    name: string
    menuItems: IMenuItem[]
    className?: string
} & SelectProps;

export const SelectFieldWithLabel: FC<FieldSelectType> = ({
                                                              name,
                                                              menuItems,
                                                              className,
                                                              ...props
                                                          }) => {
    const [field, meta, helper] = useField(name);
    return (
            <FormControl fullWidth={true}
                         size='small'
                         error={meta.touched && Boolean(meta.error)}
                         className={clsx(style.formControl,  Boolean(className) && className)}
                         sx={{
                             "& .MuiInputBase-root": {
                                 color: '#000',
                                 fontFamily: 'Urbanist',
                                 fontWeight: 400,
                                 fontSize: '16px',
                                 lineHeight: '140%',
                                 height: "60px",
                                 borderRadius: "30px",
                                 border: (meta.touched && Boolean(meta.error)) ? "1px solid #D84747" : "none",
                                 boxSizing: "border-box",
                                 background: 'rgba(42, 38, 49, 0.05)',
                                 transition: "0.3s",
                                 backdropFilter: 'blur(11px)',
                                 display: "flex",
                                 "alignItems": "flex-end",
                                 "&:hover": {
                                     background: 'rgba(42, 38, 49, 0.35)',
                                 },
                                 "&.Mui-focused": {
                                     background: 'rgba(42, 38, 49, 0.35)',
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
                                 fill: "#000",
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
                                color: "rgba(0,0,0,0.5)",
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
                                [style.selected_backgroundGray]: true,
                            })}>
                                {selected}
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
                        menuItems.map((el, key) => (
                                <MenuItem key={el.value}
                                          value={el.value}
                                          sx={{
                                              display: key === 0 ? "none": "flex",
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

                {
                    meta.touched && Boolean(meta.error) && (
                        <p className={style.error}>
                            {meta.error}
                        </p>
                    )
                }

            </FormControl>
    )

}
