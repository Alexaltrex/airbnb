import Select, {SelectProps} from "@mui/material/Select";
import {FC} from "react";
import {FormControl, InputLabel, MenuItem} from "@mui/material";
import {useField} from "formik";
import clsx from "clsx";
import style from "./SelectField.module.scss";

export interface IMenuItem {
    value: string
    label: string
}

type FieldSelectType = {
    name: string
    menuItems: Array<IMenuItem>
    className?: string
} & SelectProps;

export const SelectField: FC<FieldSelectType> = ({
                                                     name,
                                                     menuItems,
                                                     className,
                                                     ...props
                                                 }) => {
    const [field, meta, helper] = useField(name);
    return (
        <div>
            <FormControl fullWidth={true}
                         size='small'
                         error={meta.touched && Boolean(meta.error)}
                         className={clsx(Boolean(className) && className)}
                         sx={{
                             "& .MuiInputBase-root": {
                                 color: "#F4F0EC",
                                 fontFamily: 'Urbanist',
                                 fontWeight: 400,
                                 fontSize: '16px',
                                 lineHeight: '140%',
                                 height: "60px",
                                 borderRadius: "30px",
                                 border: "none",
                                 boxSizing: "border-box",
                                 background: 'rgba(255, 255, 255, 0.1)',
                                 transition: "0.3s",
                                 //backdropFilter: 'blur(11px)',
                                 "&:hover": {
                                     background: 'rgba(255, 255, 255, 0.35)'
                                 },
                                 "&.Mui-focused": {
                                     background: 'rgba(255, 255, 255, 0.35)',
                                 },
                             },
                             "& .MuiOutlinedInput-notchedOutline": {
                                 border: "none",
                             },
                             "& .MuiSelect-select": {
                                 paddingLeft: "32px",
                             },
                             "& .MuiSvgIcon-root": {
                                 fill: "#F4F0EC",
                                 right: "30px"
                             },
                         }}
            >
                {/*<InputLabel id={name}>*/}
                {/*    {props.label}*/}
                {/*</InputLabel>*/}
                <Select name={field.name}
                        label={props.label}
                        value={field.value}
                        onBlur={field.onBlur}
                        onChange={field.onChange}
                        error={meta.touched && Boolean(meta.error)}
                        renderValue={selected => <p className={style.selected}>{selected}</p>}
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
        </div>
    )

}
