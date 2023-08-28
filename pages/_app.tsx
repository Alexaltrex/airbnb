import "../assets/scss/global.scss";
import type {AppProps} from 'next/app'
import {store, Store} from "../store/store";
import {createContext, useEffect} from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import * as React from "react";
import {Preloader} from "../components/X_common/Preloader/Preloader";

export const StoreContext = createContext<Store>({} as Store);

const App = ({Component, pageProps}: AppProps) => {
    useEffect(() => {
        AOS.init({
            easing: "ease-out-cubic",
            //once: true,
        });
    }, []);

    return (
        <>
            <StoreContext.Provider value={store}>
                <div style={{
                    position: "relative"
                }}>
                    {/*<Preloader/>*/}
                    <Component {...pageProps} />
                </div>

            </StoreContext.Provider>
        </>
    )
}
export default App
