import "../assets/scss/global.scss";
import type {AppProps} from 'next/app'
import {store, Store} from "../store/store";
import {createContext, useEffect, useState} from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import * as React from "react";
import {Preloader} from "../components/X_common/Preloader/Preloader";
import {getPreloaderFromLocalStorage, setPreloaderToLocalStorage} from "../localStorage/localStorage";

export const StoreContext = createContext<Store>({} as Store);

const App = ({Component, pageProps}: AppProps) => {
    useEffect(() => {
        AOS.init({
            easing: "ease-out-cubic",
            //once: true,
        });
    }, []);

    const [preloader, setPreloader] = useState(true);
    useEffect(() => {
        console.log("after effect");
        if (typeof window !== 'undefined') {
            const preloaderFromLocalStorage = getPreloaderFromLocalStorage();
            console.log(Boolean(preloaderFromLocalStorage));
            setPreloader(!Boolean(preloaderFromLocalStorage))
        }
    }, [])


    return (
        <>
            <StoreContext.Provider value={store}>
                <div style={{
                    position: "relative"
                }}>
                    {
                        preloader && (
                            <Preloader/>
                        )

                    }
                    <Component {...pageProps} />
                </div>

            </StoreContext.Provider>
        </>
    )
}
export default App
