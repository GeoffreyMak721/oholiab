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
          content={`Face aux grandes mutations énergétiques de l’heure, nous nous taillons une place de choix et non le moindre dans le secteur des hydrocarbures dans le monde. Aguerris et déterminé, nous le sommes.
OHOLIAB a pour secteurs d’activité prioritaire, le trading pétrolier et l'affrètement des unités fluviales spécialisée pour le convoyage des produits pétroliers. Avec comme leitmotiv de numéro 1 mondial.

Acteur majeur aux mutations de l’heure dans la chaine d’approvisionnement en République Démocratique du Congo et dans le monde, nous participons aux projets majeurs de relier l’ensemble du pays par un réseau de pipe line.`}
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta name="author" content="Grayrids" />
        <title>oholiab sarl</title>

        <link rel="shortcut icon" href="/favicon.png" />
        <link rel="stylesheet" href="css/bootstrap.min.css" />
        <link rel="stylesheet" href="css/font-awesome.min.css" />
        <link rel="stylesheet" href="css/line-icons.css" />
        <link rel="stylesheet" href="css/owl.carousel.css" />
        <link rel="stylesheet" href="css/owl.theme.css" />
        <link rel="stylesheet" href="css/nivo-lightbox.css" />
        <link rel="stylesheet" href="css/magnific-popup.css" />
        <link rel="stylesheet" href="css/animate.css" />
        <link rel="stylesheet" href="css/color-switcher.css" />
        <link rel="stylesheet" href="css/menu_sideslide.css" />
        <link rel="stylesheet" href="css/main.css" />
        <link rel="stylesheet" href="css/responsive.css" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
