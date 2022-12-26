import "../assets/scss/global.scss";
import type { AppProps } from 'next/app'
import {store, Store} from "../store/store";
import {createContext, useEffect} from "react";
import "aos/dist/aos.css";
import AOS from "aos";

export const StoreContext = createContext<Store>({} as Store)

export default function App({ Component, pageProps }: AppProps) {
    useEffect(() => {
        AOS.init({
            easing: "ease-out-cubic",
            //once: true,
        });
    }, []);

    return (
      <StoreContext.Provider value={store}>
        <Component {...pageProps} />
      </StoreContext.Provider>

      )
}
