import Snackbar from "@mui/material/Snackbar";
import {observer} from "mobx-react-lite";
import {useStore} from "../../../store/useStore";
import {Alert} from "@mui/material";

export const AlertCustom = observer(() => {
    const { alert, setAlert } = useStore();
    const { open, severity, text} = alert;
    const onClose = () => setAlert({
        open: false,
        severity: "success",
        text: "",
    })
    return (
        <Snackbar open={open} autoHideDuration={6000} onClose={onClose}>
            <Alert onClose={onClose}
                   severity={severity}
                   sx={{ width: '100%' }}
            >
                {text}
            </Alert>
        </Snackbar>
    )
})
