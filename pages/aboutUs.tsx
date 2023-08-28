import {MainLayout} from "../layouts/MainLayout/MainLayout";
import {Reviewings} from "../components/B4_Reviewings/Reviewings";
import * as React from "react";
import {TextBlockSmall} from "../components/X_common/TextBlockSmall/TextBlockSmall";
import {TrivaBlock} from "../components/B10_TrivaBlock/TrivaBlock";
import {EstimateForm} from "../components/B6_EstimateForm/EstimateForm";
import {useMediaQuery} from "@mui/material";

const AboutUsPage = () => {
    const matchesDesktop = useMediaQuery('(min-width:1440px)');
    return (
        <MainLayout headTitle='Air BNB | About us'>
            <TextBlockSmall text={
                matchesDesktop
                    ? (
                        <>
                            <p>
                                Your <img src='/png/TextBlockSmall/icon_desktop.png' alt=""/> Rental
                            </p>
                            <p>Success Start Here</p>
                        </>
                    )
                    : (
                        <>
                            <p>
                                Your <img src='/png/TextBlockSmall/icon_mobile.png' alt=""/> Rental
                            </p>
                            <p>Success</p>
                            <p>Start Here</p>
                        </>
                    )
            }
                            description="Discover the power of our expert management and multilingual team for exceptional guest experiences and increased income."
            />
            <TrivaBlock/>
            <Reviewings/>
            <EstimateForm/>
        </MainLayout>
    )
}
export default AboutUsPage
