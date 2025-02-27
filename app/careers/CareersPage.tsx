"use client";
import React from "react";

import CaseStudies from "@/_components/case-studies/CaseStudies";
import CTACard from "@/_components/cta-card/CTACard";
import Facts from "@/_components/facts/Facts";
import FaqsSection from "@/_components/faqs-section/FaqsSection";
import FullText from "@/_components/full-text/FullText";
import ImageWithText from "@/_components/image-with-text/ImageWithText";
import OurThoughtsSlider from "@/_components/our-thoughts-slider/OurThoughtSlider";
import Partners from "@/_components/partners/Partners";
import QuestionsSlider from "@/_components/questions-slider/QuestionsSlider";
import Services from "@/_components/services/Services";
import Testimonials from "@/_components/testimonials/Testimonials";
import VideoCTA from "@/_components/video-cta/VideoCTA";
import Leadership from "@/_components/leadership/Leadership";
import HeroSection from "@/_components/hero-section/HeroSection";
import InfoCard from "@/_components/info-card/InfoCard";
import Timeline from "@/_components/timeline/Timeline";

const blockComponents = {
  "common.full-text": FullText,
  "common.image-with-text": ImageWithText,
  "common.video-cta": VideoCTA,
  "common.testimonials": Testimonials,
  "common.services": Services,
  "common.questions-slider": QuestionsSlider,
  "common.partners": Partners,
  "common.facts": Facts,
  "common.cta-card": CTACard,
  "common.case-studies": CaseStudies,
  "common.faqs": FaqsSection,
  "common.our-thoughts": OurThoughtsSlider,
  "common.leaderships": Leadership,
  "common.help-info": InfoCard,
  "common.timeline": Timeline,
};

function blockRenderer(block: any, index: number, theme: any) {
  const Component =
    blockComponents[block.__component as keyof typeof blockComponents];

  return Component ? <Component key={index} {...block} theme={theme} /> : null;
}
const CareersPage = (props: any) => {
  const { blocks, heroBanner, theme } = props;

  return (
    <>
      <section className="flex flex-col items-center justify-center">
        {heroBanner && <HeroSection {...(heroBanner ?? "")} theme={theme} />}
        {blocks?.map((block: any, index: number) =>
          blockRenderer(block, index, theme),
        )}
      </section>
    </>
  );
};

export default CareersPage;
