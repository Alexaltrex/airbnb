import {MainLayout} from "../layouts/MainLayout/MainLayout";
import {Pricing} from "../components/B3_Pricing/Pricing";
import {TextBlockSmall} from "../components/X_common/TextBlockSmall/TextBlockSmall";
import {EstimateForm} from "../components/B6_EstimateForm/EstimateForm";
import style from "./PricingPage.module.scss"
import * as React from "react";
import {useMediaQuery} from "@mui/material";

const PricingPage = () => {
    const matchesDesktop = useMediaQuery('(min-width:1440px)');
    return (
        <MainLayout headTitle='Air BNB | Pricing'>
            <div className={style.textBlockSmall}>
                <TextBlockSmall text={
                    matchesDesktop
                        ? (
                            <>
                                <p>
                                    Tailored <img src='/png/TextBlockSmall/icon_1_desktop.png' alt=""/> Plans,
                                </p>
                                <p>Optimal Returns</p>
                            </>
                        )
                        : (
                            <>
                                <p>
                                    Tailored <img src='/png/TextBlockSmall/icon_1_mobile.png' alt=""/>
                                </p>
                                <p>Plans, Optimal</p>
                                <p>Returns</p>
                            </>
                        )
                }
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
