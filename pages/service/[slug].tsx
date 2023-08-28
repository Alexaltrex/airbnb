import * as React from "react";
import {useRouter} from "next/router";
import {Advantages} from "../../components/B12_Advantages/Advantages";
import {FactBlock} from "../../components/B13_FactBlock/FactBlock";
import {Subcategories} from "../../components/B14_Subcategories/Subcategories";
import {FaqBlock} from "../../components/B15_FaqBlock/FaqBlock";
import {EstimateForm} from "../../components/B6_EstimateForm/EstimateForm";
import {MainLayout} from "../../layouts/MainLayout/MainLayout";
import {TextBlock} from "../../components/B17_TextBlock/TextBlock";
import {items} from "../../components/B2_Services/items";
import {service} from "../../constants/service";

const ServiceItem = () => {
    const router = useRouter();
    const slug = Number(router.query.slug);

    return (
        <MainLayout headTitle={`Air BNB | ${service[slug]?.title || ""}`}>
            {
                router.query.slug && (
                    <>
                        <TextBlock slug={slug}/>
                        <Advantages {...service[slug].advantages}/>
                        <FactBlock {...service[slug].fact}/>
                        <Subcategories {...service[slug].subcategories}/>
                        <FaqBlock title={items[slug].title}
                                  tags={service[slug].subcategories.tags}
                                  faq={items[slug].faq}
                                  card={service[slug].faq.card}
                        />
                        <EstimateForm topRadius={false}/>
                    </>
                )
            }
        </MainLayout>
    )
}
export default ServiceItem
