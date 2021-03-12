import React from "react";

import BlogSection from "../components/BlogSection";
import ClientBrandSection from "../components/ClientBrandSection";
import ContactSection from "../components/ContactSection ";
import CounterSection from "../components/CounterSection";
import DownloadSection from "../components/DownloadSection ";
import FeaturesSection from "../components/FeaturesSection";
import PortfolioSection from "../components/PortfolioSection";
import PricingTableSection from "../components/PricingTableSection ";
import ServicesSection from "../components/ServicesSection ";
import SubcribeSection from "../components/SubcribeSection";
import TestimonialSection from "../components/TestimonialSection";
import VideoPromoSection from "../components/VideoPromoSection";

export default function Home() {
  return (
    <>
      <ServicesSection />
      <FeaturesSection />
      <VideoPromoSection />
      <PortfolioSection />
      {/* <PricingTableSection /> */}
      <CounterSection />
      <TestimonialSection />
      <ClientBrandSection />
      {/* <DownloadSection /> */}
      {/* <BlogSection /> */}
      <ContactSection />
      <SubcribeSection />
    </>
  );
}
