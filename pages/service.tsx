import {MainLayout} from "../layouts/MainLayout/MainLayout";
import * as React from "react";
import {TextBlockMedium} from "../components/X_common/TextBlockMedium/TextBlockMedium";
import {Advantages} from "../components/B12_Advantages/Advantages";
import {FactBlock} from "../components/B13_FactBlock/FactBlock";
import {Subcategories} from "../components/B14_Subcategories/Subcategories";
import {FaqBlock} from "../components/B15_FaqBlock/FaqBlock";
import {EstimateForm} from "../components/B6_EstimateForm/EstimateForm";

const ServicePage = () => {
    return (
        <MainLayout headTitle='Air BNB | Service'>
            <TextBlockMedium/>
            <Advantages/>
            <FactBlock/>
            <Subcategories/>
            <FaqBlock/>
            <EstimateForm/>
        </MainLayout>
    )
}
export default ServicePage
