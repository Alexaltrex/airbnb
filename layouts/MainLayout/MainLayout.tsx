import {FC, ReactNode, useEffect, useState} from "react";
import style from "./MainLayout.module.scss"
import Head from "next/head";
import {Header} from "../../components/A0_Header/Header";
import {Footer} from "../../components/A2_Footer/Footer";
import {BurgerMenu} from "../../components/A1_BurgerMenu/BurgerMenu";
import {useRouter} from "next/router";
import {PopupForm} from "../../components/A3_PopupForm/PopupForm";
import {AlertCustom} from "../../components/X_common/AlertCustom/AlertCustom";
import {observer} from "mobx-react-lite";
import {useStore} from "../../store/useStore";
import {Preloader} from "../../components/X_common/Preloader/Preloader";
import {getPreloaderFromLocalStorage, setPreloaderToLocalStorage} from "../../localStorage/localStorage";

interface IMainLayout {
    children: ReactNode
    headTitle?: string
}

export const MainLayout: FC<IMainLayout> = observer(({
                                                         children,
                                                         headTitle = 'Air BNB',
                                                     }) => {
    const router = useRouter();
    const { preloader, setPreloader } = useStore();

    useEffect(() => {
      const timer = setTimeout(() => setPreloader(false), 5000)
      return () => clearInterval(timer);
    },[])

    //let preloader = null as null | string;
    // if (typeof window !== 'undefined') {
    //     preloader = getPreloaderFromLocalStorage();
    // }

    //console.log(preloader)

    // const [preloader, setPreloader] = useState<null | string>(null)
    // const [read, setRead] = useState(false);
    //
    // useEffect(() => {
    //     //const
    //     const preloader_ls = getPreloaderFromLocalStorage();
    //     setRead(true)
    //     console.log(preloader)
    //     if (!preloader_ls) {
    //         setPreloaderToLocalStorage("done");
    //         setPreloader("done")
    //     }
    // }, [])


    return (
        <div className={style.mainLayout}>
            <Head>
                {/*<meta name="keywords" content="next,js,nextjs,react"/>*/}
                {/*<meta name="description" content="this is demo site"/>*/}
                <meta charSet="utf-8"/>
                <title>
                    {headTitle}
                </title>
            </Head>

            {
                preloader &&
                <Preloader/>
            }

            <PopupForm/>
            <AlertCustom/>

            <Header/>
            <BurgerMenu/>

            <main>
                {children}
            </main>

            <Footer white={router.pathname === "/contact"}/>
        </div>
    )
})
