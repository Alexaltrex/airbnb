import {MainLayout} from "../layouts/MainLayout/MainLayout";
import * as React from "react";
import {TextBlockMedium} from "../components/X_common/TextBlockMedium/TextBlockMedium";
import {Advantages} from "../components/B12_Advantages/Advantages";

const ServicePage = () => {
    return (
        <MainLayout headTitle='Air BNB | Service'>
            <TextBlockMedium/>
            <Advantages/>
        </MainLayout>
    )
}
export default ServicePage
