import {action, makeObservable, observable} from "mobx";
import {IValues} from "../components/B1_CalculateBlock/CalculateBlock";

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

    constructor() {
        makeObservable(this, {
            burgerMenu: observable,
            popupForm: observable,
            calculateModal: observable,
            rental: observable,
            preloader: observable,

            setBurgerMenu: action.bound,
            setPopupForm: action.bound,
            setCalculateModal: action.bound,
            setRental: action.bound,
            setPreloader: action.bound,
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


}
export const store = new Store()
