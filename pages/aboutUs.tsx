import {MainLayout} from "../layouts/MainLayout/MainLayout";
import {Reviewings} from "../components/B4_Reviewings/Reviewings";
import * as React from "react";
import {TextBlockSmall} from "../components/X_common/TextBlockSmall/TextBlockSmall";
import {TrivaBlock} from "../components/B10_TrivaBlock/TrivaBlock";
import {EstimateForm} from "../components/B6_EstimateForm/EstimateForm";

const AboutUsPage = () => {
    return (
        <MainLayout headTitle='Air BNB | About us'>
            <TextBlockSmall texts={[
                'Your ',
                ' Rental Success Start Here',
            ]}
                            image={{
                                mobile: '/png/TextBlockSmall/icon_mobile.png',
                                desktop: '/png/TextBlockSmall/icon_desktop.png',
                            }}
                            description="Discover the power of our expert management and multilingual team for exceptional guest experiences and increased income."
            />
            <TrivaBlock/>
            <Reviewings/>
            <EstimateForm/>
        </MainLayout>
    )
}
export default AboutUsPage
