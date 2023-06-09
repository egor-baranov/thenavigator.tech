import "../styles/globals.css"
import type {AppProps} from "next/app"
import Head from "next/head"
import {HeaderLayout} from "../components/HeaderLayout"
import {Footer} from "../components/Footer";
import React from "react";

export default function MyApp({Component, pageProps}: AppProps) {
    return (
        <HeaderLayout>
            <Head>
                <title>The navigator</title>
                <meta name="application-name" content="sitebook"/>
                <meta name="apple-mobile-web-app-capable" content="yes"/>
                <meta name="apple-mobile-web-app-status-bar-style" content="default"/>
                <meta name="apple-mobile-web-app-title" content="Sitebook"/>
                <meta name="description" content=""/>
                <meta name="format-detection" content="telephone=no"/>
                <meta name="mobile-web-app-capable" content="yes"/>
                <meta name="theme-color" content="#FFFFFF"/>
            </Head>
            <Component {...pageProps} > </Component>
            {/*<Footer/>*/}
        </HeaderLayout>
    )
}