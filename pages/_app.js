import React from "react";

import Head from "next/head";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="keywords"
          content="Zenith Ressort de Kinshasa est le fruit d’un dûr labeur d’un digne fils du pays, qui n’a ni hérité d’un bien, ni des millions de la part d’une quelconque personne, mais qui a forgé sa vie par la peine, par la passion et par la rage de vaincre tel est Monsieur Nzau Ngoma Camille qui incarne toute une génération et qui est à la tête de Zénith Ressort de Kinshasa sarl."
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta name="author" content="Grayrids" />
        <title>Oholiab sarl</title>

        <link
          rel="shortcut icon"
          href="/favicon.jpg"
          type="image/jpg"
        />
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/font-awesome.min.css" />
        <link rel="stylesheet" href="/css/line-icons.css" />
        <link rel="stylesheet" href="/css/owl.carousel.css" />
        <link rel="stylesheet" href="/css/owl.theme.css" />
        <link rel="stylesheet" href="/css/nivo-lightbox.css" />
        <link rel="stylesheet" href="/css/magnific-popup.css" />
        <link rel="stylesheet" href="/css/animate.css" />
        <link rel="stylesheet" href="/css/menu_sideslide.css" />
        <link rel="stylesheet" href="/css/main.css" />
        <link rel="stylesheet" href="/css/responsive.css" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
