import {MainLayout} from "../layouts/MainLayout/MainLayout";
import {FirstBlock} from "../components/B0_FirstBlock/FirstBlock";
import {Pricing} from "../components/B3_Pricing/Pricing";
import {Reviewings} from "../components/B4_Reviewings/Reviewings";
import {EstimateForm} from "../components/B6_EstimateForm/EstimateForm";
import {TextBlockMedium} from "../components/X_common/TextBlockMedium/TextBlockMedium";
import {WeWorkWithUs} from "../components/B5_WeWorkWithUs/WeWorkWithUs";
import {Services} from "../components/B2_Services/Services";
import {CalculateBlock} from "../components/B1_CalculateBlock/CalculateBlock";
import {useEffect} from "react";
import {Preloader} from "../components/X_common/Preloader/Preloader";
import * as React from "react";
import {observer} from "mobx-react-lite";
import {useStore} from "../store/useStore";

const HomePage = observer(() => {
    const { preloader, setPreloader } = useStore();

    useEffect(() => {
      const timer = setTimeout(() => setPreloader(false), 4000)
      return () => clearInterval(timer);
    },[])

    return (
        <>
            {
                preloader ? (
                    <Preloader/>
                ) : (
                    <MainLayout>
                        <FirstBlock/>
                        <CalculateBlock/>
                        <TextBlockMedium/>
                        <Services/>
                        <Pricing/>
                        <Reviewings/>
                        <WeWorkWithUs/>
                        <EstimateForm/>
                    </MainLayout>
                )
            }
        </>

  )
})
export default HomePage
