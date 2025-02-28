"use client";
import React from "react";
import clsx from "clsx";
import * as motion from "motion/react-client";

import { CtaBannerType } from "@/_types/cta-banner";
import { formattedText } from "@/_utils/formatted-text";
import FallbackImage from "@/_images/default.jpg";

import CustomImage from "../custom-image/CustomImage";

const HeroSection = (props: CtaBannerType) => {
  const { image, title } = props;
  const theme = props?.theme;

  const themeClassName =
    theme && theme.color
      ? `custom-bg-${theme.color.toLowerCase().replace(/ /g, "-")}`
      : "bg-transparent";

  return (
    <section
      aria-label="hero section"
      className="relative min-h-[calc(100vh-7.875rem)] w-full flex items-end py-24 overflow-hidden"
    >
      {image && (
        <div className="h-full w-full absolute top-0 left-0  z-0 after:bg-black/40 after:h-full after:w-full after:top-0 after:left-0 after:absolute after:z-auto">
          <CustomImage
            alt={image?.alternativeText ?? "image"}
            className="h-full w-full object-cover"
            height={803}
            src={image?.url || FallbackImage}
            width={1512}
          />
        </div>
      )}

      <motion.div
        className={clsx(
          "absolute h-full w-[36rem] top-0 left-0 z-10 opacity-60",
          themeClassName,
        )}
        initial="hidden"
        style={{
          clipPath: "polygon(0 0, 0% 100%, 100% 0)",
        }}
        transition={{ duration: 0.5, delay: 0.7 }}
        variants={{
          visible: {
            visibility: "visible",
            opacity: 0.6,
            translateY: "0%",
            translateX: "0%",
          },
          hidden: {
            visibility: "hidden",
            opacity: 0,
            translateY: "-100%",
            translateX: "-100%",
          },
        }}
        viewport={{ once: true }}
        whileInView="visible"
      />
      <div className="container relative z-20 mx-auto">
        <div className="flex justify-end">
          <div className="lg:max-w-[58.75rem] lg:min-w-[39.5rem]  lg:ml-auto">
            {title && (
              <motion.h1
                dangerouslySetInnerHTML={{ __html: formattedText(title) }}
                className="font-extrabold uppercase text-3xl lg:text-6xl text-white"
                initial="hidden"
                transition={{ duration: 0.5, delay: 1.6 }}
                variants={{
                  visible: {
                    visibility: "visible",
                    opacity: 1,
                    translateY: "0%",
                  },
                  hidden: {
                    visibility: "hidden",
                    opacity: 0,
                    translateY: "-50%",
                  },
                }}
                viewport={{ once: true }}
                whileInView="visible"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
