import React from "react";
import MenuWrap from "./components/MenuWrap";
import HeaderSection from "./components/HeaderSection ";
import FooterSection from "./components/FooterSection";
import GoToTopLink from "./components/GoToTopLink";
import Loader from "./components/Loader";
export default function Layout({ children }) {
  return (
    <>
      <MenuWrap />
      <HeaderSection />
      {children}
      <FooterSection />
      <GoToTopLink />
      {/*  <Loader /> */}
    </>
  );
}
