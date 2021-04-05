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
          content="Bootstrap, Landing page, Template, Registration, Landing"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta name="author" content="Grayrids" />
        <title>oholiab sarl</title>

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
