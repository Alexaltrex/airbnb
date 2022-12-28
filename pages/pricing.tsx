import {MainLayout} from "../layouts/MainLayout/MainLayout";
import {Pricing} from "../components/B3_Pricing/Pricing";
import {TextBlockSmall} from "../components/X_common/TextBlockSmall/TextBlockSmall";
import {EstimateForm} from "../components/B6_EstimateForm/EstimateForm";
import style from "./PricingPage.module.scss"

const PricingPage = () => {
    return (
        <MainLayout headTitle='Air BNB | Pricing'>
            <div className={style.textBlockSmall}>
                <TextBlockSmall/>
            </div>
            <div className={style.wrapper}>
                <Pricing/>
                <EstimateForm/>
            </div>

        </MainLayout>
    )
}
export default PricingPage
