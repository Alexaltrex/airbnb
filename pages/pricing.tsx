import {MainLayout} from "../layouts/MainLayout/MainLayout";
import {Pricing} from "../components/B3_Pricing/Pricing";
import {TextBlockSmall} from "../components/X_common/TextBlockSmall/TextBlockSmall";
import {EstimateForm} from "../components/B6_EstimateForm/EstimateForm";
import style from "./PricingPage.module.scss"
import * as React from "react";

const PricingPage = () => {
    return (
        <MainLayout headTitle='Air BNB | Pricing'>
            <div className={style.textBlockSmall}>
                <TextBlockSmall texts={[
                    'Tailored ',
                    ' Plans, Optimal Returns',
                ]}
                                image={{
                                    mobile: '/png/TextBlockSmall/icon_1_mobile.png',
                                    desktop: '/png/TextBlockSmall/icon_1_desktop.png',
                                }}
                                description="Discover our competitive pricing plans tailored to your needs, while enjoying premium property management services for optimal success."
                />
            </div>
            <div className={style.wrapper}>
                <Pricing/>
                <EstimateForm/>
            </div>

        </MainLayout>
    )
}
export default PricingPage
