import * as React from "react";
import {useRouter} from "next/router";
import {Advantages} from "../../components/B12_Advantages/Advantages";
import {FactBlock} from "../../components/B13_FactBlock/FactBlock";
import {Subcategories} from "../../components/B14_Subcategories/Subcategories";
import {FaqBlock} from "../../components/B15_FaqBlock/FaqBlock";
import {EstimateForm} from "../../components/B6_EstimateForm/EstimateForm";
import {MainLayout} from "../../layouts/MainLayout/MainLayout";
import {content} from "./content";
import {TextBlock} from "./TextBlock/TextBlock";
import {items} from "../../components/B2_Services/items";

const ServiceItem = () => {
    const router = useRouter();
    const slug = Number(router.query.slug);

    return (
        <MainLayout headTitle={`Air BNB | ${content[slug]?.title || ""}`}>
            {
                router.query.slug && (
                    <>
                        <TextBlock {...content[slug].textBlock}/>
                        <Advantages {...content[slug].advantages}/>
                        <FactBlock {...content[slug].fact}/>
                        <Subcategories {...content[slug].subcategories}/>
                        <FaqBlock title={items[slug].title}
                                  tags={content[slug].subcategories.tags}
                                  faq={items[slug].faq}
                                  card={content[slug].faq.card}
                        />
                        <EstimateForm/>
                    </>
                )
            }
        </MainLayout>
    )
}
export default ServiceItem
