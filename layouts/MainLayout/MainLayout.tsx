import {FC, ReactNode} from "react";
import style from "./MainLayout.module.scss"
import Head from "next/head";
import {Header} from "../../components/A0_Header/Header";
import { Footer } from "../../components/A2_Footer/Footer";
import {BurgerMenu} from "../../components/A1_BurgerMenu/BurgerMenu";
import {TextField} from "../../components/X_common/TextField/TextField";

interface IMainLayout {
    children: ReactNode
    headTitle?: string
}

export const MainLayout: FC<IMainLayout> = ({
                                                children,
                                                headTitle = 'Air BNB',
                                            }) => {

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

            <Header/>
            <BurgerMenu/>

            <main>
                {children}
            </main>

            <Footer/>
        </div>
   )

}
