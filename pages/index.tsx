import {MainLayout} from "../layouts/MainLayout/MainLayout";
import {FirstBlock} from "../components/B0_FirstBlock/FirstBlock";
import {Pricing} from "../components/B3_Pricing/Pricing";
import {Reviewings} from "../components/B4_Reviewings/Reviewings";
import {EstimateForm} from "../components/B6_EstimateForm/EstimateForm";
import {TextBlockMedium} from "../components/X_common/TextBlockMedium/TextBlockMedium";
import {WeWorkWithUs} from "../components/B5_WeWorkWithUs/WeWorkWithUs";
import {Services} from "../components/B2_Services/Services";

const HomePage = () => {

    return (
      <MainLayout>
          <FirstBlock/>
          <TextBlockMedium/>
          <Services/>
          <Pricing/>
          <Reviewings/>
          <WeWorkWithUs/>
          <EstimateForm/>
      </MainLayout>
  )
}
export default HomePage
