"use client";
import React from "react";

import HeroSection from "@/_components/hero-section/HeroSection";
import { blockComponents } from "@/_data/common-blocks";

function blockRenderer(block: any, index: number, theme: any) {
  const Component =
    blockComponents[block.__component as keyof typeof blockComponents];

  return Component ? <Component key={index} {...block} theme={theme} /> : null;
}
const WhoWeArePage = (props: any) => {
  const { blocks, heroBanner, theme } = props;

  return (
    <section className="flex flex-col items-center justify-center">
      {heroBanner && <HeroSection {...(heroBanner ?? "")} theme={theme} />}
      {blocks?.map((block: any, index: number) =>
        blockRenderer(block, index, theme),
      )}
    </section>
  );
};

export default WhoWeArePage;
