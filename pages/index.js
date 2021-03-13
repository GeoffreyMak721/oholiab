import React from "react";

/* import BlogSection from "../components/BlogSection"; */
import ServicesDetailSection from "../components/ServicesDetailSection";
import ClientBrandSection from "../components/ClientBrandSection";
import ContactSection from "../components/ContactSection ";
import CounterSection from "../components/CounterSection";
/* import DownloadSection from "../components/DownloadSection "; */
import FeaturesSection from "../components/FeaturesSection";
import Features2Sections from "../components/Features2Sections";
import PortfolioSection from "../components/PortfolioSection";
/* import PricingTableSection from "../components/PricingTableSection "; */
import ServicesSection from "../components/ServicesSection ";
/* import SubcribeSection from "../components/SubcribeSection"; */
import TestimonialSection from "../components/TestimonialSection";
import VideoPromoSection from "../components/VideoPromoSection";

export default function Home() {
  return (
    <>
      <ServicesSection />
      <FeaturesSection />
      <VideoPromoSection />
      <Features2Sections />
      {/* <PricingTableSection /> */}
      <CounterSection />
      <PortfolioSection />
      <ServicesDetailSection />
      <TestimonialSection />

      <ClientBrandSection />
      {/* <DownloadSection /> */}

      <ContactSection />
      {/* <SubcribeSection /> */}
    </>
  );
}
