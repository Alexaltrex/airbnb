import "../assets/scss/global.scss";
import type {AppProps} from 'next/app'
import {store, Store} from "../store/store";
import {createContext, useEffect, useLayoutEffect, useState} from "react";
import "aos/dist/aos.css";
import AOS from "aos";

import {gsap} from "gsap-trial";
import {ScrollTrigger} from "gsap-trial/dist/ScrollTrigger";
import {ScrollSmoother} from "gsap-trial/dist/ScrollSmoother";


export const StoreContext = createContext<Store>({} as Store);
const SmootherContext = createContext(null as ScrollSmoother | null);

const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default function App({Component, pageProps}: AppProps) {
    useEffect(() => {
        AOS.init({
            easing: "ease-out-cubic",
            //once: true,
        });
    }, []);

    // const [smoother, setSmoother] = useState<ScrollSmoother | null>(null);
    // useIsomorphicLayoutEffect(() => {
    //     gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
    //
    //     let smoother = ScrollSmoother.create({
    //         //smooth: 1,
    //         normalizeScroll: true, // prevents address bar from showing/hiding on most devices, solves various other browser inconsistencies
    //         //ignoreMobileResize: true, // skips ScrollTrigger.refresh() on mobile resizes from address bar showing/hiding
    //         //effects: true,
    //         //preventDefault: true
    //     });
    //
    //     setSmoother(smoother);
    // }, []);

    return (
        //     <SmootherContext.Provider value={smoother}>
        <StoreContext.Provider value={store}>
            <Component {...pageProps} />
        </StoreContext.Provider>
        // </SmootherContext.Provider>
    )
}
