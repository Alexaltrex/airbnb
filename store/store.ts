import {action, makeObservable, observable} from "mobx";
import {AlertColor} from "@mui/material";

interface IAlert {
    open: boolean
    severity: AlertColor
    text: string
}

export interface ICalculateValues {
    area: string
    bedrooms: string
    furnishing: string
}

export class Store {
    burgerMenu = false
    burgerDropDown = false
    popupForm = false
    calculateModal = false
    rental = {
        area: "",
        bedrooms: "",
        furnishing: "",
    } as ICalculateValues
    preloader = true
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
            burgerDropDown: observable,

            setBurgerMenu: action.bound,
            setPopupForm: action.bound,
            setCalculateModal: action.bound,
            setRental: action.bound,
            setPreloader: action.bound,
            setAlert: action.bound,
            setBurgerDropDown: action.bound,
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

    setRental(rental: ICalculateValues) {
        this.rental = rental
    }

    setPreloader(preloader: boolean) {
        this.preloader = preloader
    }

    setAlert(alert: IAlert) {
        this.alert = alert
    }

    setBurgerDropDown(burgerDropDown: boolean) {
        this.burgerDropDown = burgerDropDown;
    }


}
export const store = new Store()
