import {FC, ReactNode} from "react";
import style from "./MainLayout.module.scss"
import Head from "next/head";
import {Header} from "../../components/A0_Header/Header";
import {Footer} from "../../components/A2_Footer/Footer";
import {BurgerMenu} from "../../components/A1_BurgerMenu/BurgerMenu";
import {TextField} from "../../components/X_common/TextField/TextField";
import {useRouter} from "next/router";
import {PopupForm} from "../../components/A3_PopupForm/PopupForm";

interface IMainLayout {
    children: ReactNode
    headTitle?: string
}

export const MainLayout: FC<IMainLayout> = ({
                                                children,
                                                headTitle = 'Air BNB',
                                            }) => {
    const router = useRouter();

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

            <PopupForm/>

            <Header/>
            <BurgerMenu/>

            <main>
                {children}
            </main>

            <Footer white={router.pathname === "/contact"}/>
        </div>
    )

}
