import {action, makeObservable, observable} from "mobx";

export class Store {
    burgerMenu = false
    socialLinkTooltip = false

    constructor() {
        makeObservable(this, {
            burgerMenu: observable,
            socialLinkTooltip: observable,

            setBurgerMenu: action.bound,
            setSocialLinkTooltip: action.bound,
        })
    }

    setBurgerMenu(burgerMenu: boolean) {
        this.burgerMenu = burgerMenu
    }

    setSocialLinkTooltip(socialLinkTooltip: boolean) {
        this.socialLinkTooltip = socialLinkTooltip
    }

}
export const store = new Store()
