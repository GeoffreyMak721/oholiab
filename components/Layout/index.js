import React from "react";

import HeaderSection from "./components/HeaderSection";
import FooterSection from "./components/FooterSection";
import GoToTopLink from "./components/GoToTopLink";
import Loader from "./components/Loader";

export default function Layout({ children }) {
  return (
    <>
      <HeaderSection />
      {children}
      <FooterSection />
      <GoToTopLink />
      {/*  <Loader /> */}
    </>
  );
}
