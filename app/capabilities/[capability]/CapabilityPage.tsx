"use client";
import React from "react";

import FullText from "@/_components/full-text/FullText";
import HeroSection from "@/_components/hero-section/HeroSection";
import ImageWithText from "@/_components/image-with-text/ImageWithText";
import VideoCTA from "@/_components/video-cta/VideoCTA";
import Testimonials from "@/_components/testimonials/Testimonials";
import Services from "@/_components/services/Services";
import Partners from "@/_components/partners/Partners";
import Facts from "@/_components/facts/Facts";
import CTACard from "@/_components/cta-card/CTACard";
import CaseStudies from "@/_components/case-studies/CaseStudies";
import FaqsSection from "@/_components/faqs-section/FaqsSection";
import OurThoughtsSlider from "@/_components/our-thoughts-slider/OurThoughtSlider";
import Leadership from "@/_components/leadership/Leadership";
import InfoCard from "@/_components/info-card/InfoCard";
import FeatureSlider from "@/_components/feature-slider/FeatureSlider";
import FeatureSection from "@/_components/feature-section/FeatureSection";
import SingleSlider from "@/_components/single-slider/singleSlider";
import ContactUsForm from "@/_components/contact-us-form/ContactUsForm";
import Process from "@/_components/process/Process";
// import FactWithText from "@/_components/fact-with-text/FactWithText";

const blockComponents = {
  "common.full-text": FullText,
  "common.image-with-text": ImageWithText,
  "common.video-cta": VideoCTA,
  "common.testimonials": Testimonials,
  "common.services": Services,
  "common.questions-slider": SingleSlider,
  "common.partners": Partners,
  "common.facts": Facts,
  "common.cta-card": CTACard,
  "common.case-studies": CaseStudies,
  "common.faqs": FaqsSection,
  "common.our-thoughts": OurThoughtsSlider,
  "common.leaderships": Leadership,
  "common.help-info": InfoCard,
  "common.feature-slider": FeatureSlider,
  "common.features-section": FeatureSection,
  "common.form-section": ContactUsForm,
  "common.process": Process,
  // "common.facts-with-text": FactWithText,
};

function blockRenderer(block: any, index: number, theme: any) {
  const Component =
    blockComponents[block.__component as keyof typeof blockComponents];

  return Component ? <Component key={index} {...block} theme={theme} /> : null;
}

const CapabilityPage = ({ pageData }: any) => {
  const { heroBanner, blocks, theme } = pageData;

  return (
    <section className="flex flex-col items-center justify-center">
      {heroBanner && <HeroSection {...heroBanner} theme={theme} />}
      {blocks?.map((block: any, index: number) =>
        blockRenderer(block, index, theme),
      )}
    </section>
  );
};

export default CapabilityPage;
