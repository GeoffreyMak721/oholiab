import React from "react";

import BlogSection from "../components/BlogSection";
import CallToActionSection2 from "../components/CallToActionSection2";
import ClientSection from "../components/ClientSection";
import ContactSection from "../components/ContactSection ";
import CounterSection from "../components/CounterSection";
import MapSection from "../components/MapSection";
import FeaturesSection from "../components/FeaturesSection";
import CallToActionSection from "../components/CallToActionSection";
import PortfolioSection from "../components/PortfolioSection";
import PortofolioSection2 from "../components/PortofolioSection2";
import PricingTableSection from "../components/PricingTableSection ";
import ServicesSection from "../components/ServicesSection ";
import SubcribeSection from "../components/SubcribeSection";
import TestimonialSection from "../components/TestimonialSection";
import VideoPromoSection from "../components/VideoPromoSection";
import TeamSection from "../components/TeamSection";
import AboutSection from "../components/AboutSection";
import AboutSection2 from "../components/AboutSection2";

export default function Home() {
  return (
    <>
      <ServicesSection />
      <CallToActionSection />
      <FeaturesSection />
      <CallToActionSection2 />
      <AboutSection />
      <CounterSection />
      <PortfolioSection />
      <AboutSection2 />

      {/* <PricingTableSection /> */}
      <TestimonialSection />
      {/*  <CallToActionSection2 /> */}
      {/* <TeamSection /> */}
      <SubcribeSection />
      {/* <BlogSection /> */}
      <ClientSection />
      {/* <ContactSection /> */}
      <MapSection />
    </>
  );
}
