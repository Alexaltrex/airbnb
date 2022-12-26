import {MainLayout} from "../layouts/MainLayout/MainLayout";
import {Reviewings} from "../components/B4_Reviewings/Reviewings";
import * as React from "react";
import {TextBlockSmall} from "../components/X_common/TextBlockSmall/TextBlockSmall";
import {TrivaBlock} from "../components/B10_TrivaBlock/TrivaBlock";
import {EstimateForm} from "../components/B6_EstimateForm/EstimateForm";

const AboutUsPage = () => {
    return (
        <MainLayout headTitle='Air BNB | About us'>
            <TextBlockSmall/>
            <TrivaBlock/>
            <Reviewings/>
            <EstimateForm/>
        </MainLayout>
    )
}
export default AboutUsPage
