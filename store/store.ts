import {action, makeObservable, observable} from "mobx";
import {IValues} from "../components/B1_CalculateBlock/CalculateBlock";
import {AlertColor} from "@mui/material";

interface IAlert {
    open: boolean
    severity: AlertColor
    text: string
}

export class Store {
    burgerMenu = false
    popupForm = false
    calculateModal = false
    rental = {
        area: "",
        bedrooms: "",
        furnishing: "",
    } as IValues
    preloader = false
    alert = {
        open: false,
        severity: "success",
        text: ""
    } as IAlert

    constructor() {
        makeObservable(this, {
            burgerMenu: observable,
            popupForm: observable,
            calculateModal: observable,
            rental: observable,
            preloader: observable,
            alert: observable,

            setBurgerMenu: action.bound,
            setPopupForm: action.bound,
            setCalculateModal: action.bound,
            setRental: action.bound,
            setPreloader: action.bound,
            setAlert: action.bound,
        })
    }

    setBurgerMenu(burgerMenu: boolean) {
        this.burgerMenu = burgerMenu
    }


    setPopupForm(popupForm: boolean) {
        this.popupForm = popupForm
    }

    setCalculateModal(calculateModal: boolean) {
        this.calculateModal = calculateModal
    }

    setRental(rental: IValues) {
        this.rental = rental
    }

    setPreloader(preloader: boolean) {
        this.preloader = preloader
    }

    setAlert(alert: IAlert) {
        this.alert = alert
    }


}
export const store = new Store()
