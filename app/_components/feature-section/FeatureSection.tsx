"use client";
import React from "react";
import { Chip } from "@heroui/chip";
import clsx from "clsx";

import { featureSectionType } from "@/_types/feature-section";

import FeatureCard from "./feature-card/FeatureCard";

const FeatureSection = (props: featureSectionType) => {
  const { details, features, variant, fullWidth, themeColor } = props;

  const getGridCols = (servicesCount: number) => {
    if (servicesCount === 1) return "lg:grid-cols-1";
    if (servicesCount === 2) return "lg:grid-cols-2";
    if (servicesCount === 4) return "lg:grid-cols-2";
    // if (servicesCount === 5) return "lg:grid-cols-2";

    return "lg:grid-cols-3";
  };

  const variantClassName =
    variant && typeof variant.Variant === "string"
      ? `custom-bg-${variant?.Variant.toLowerCase()}`
      : "custom-bg-white";

  const theme = props?.theme;

  const themeClassName =
    theme && theme.color
      ? `custom-bg-${theme.color.toLowerCase().replace(/ /g, "-")}`
      : "bg-transparent";

  return (
    <section
      aria-label="feature section"
      className={clsx("w-full py-16 lg:py-24", variantClassName)}
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-8">
          <div
            className={clsx(
              "flex flex-col gap-4 lg:col-span-4",
              !fullWidth && "items-center mx-auto text-center max-w-6xl",
            )}
          >
            {details?.subHeading && (
              <Chip
                classNames={{
                  base: `${themeClassName} rounded-small py-3 px-1`,
                  content: "text-white text-base uppercase font-bold",
                }}
                size="lg"
              >
                {details?.subHeading}
              </Chip>
            )}
            {details?.title && (
              <h2
                dangerouslySetInnerHTML={{ __html: details?.title }}
                className="text-xl font-medium	lg:text-2xl"
              />
            )}
            {details?.description && (
              <div
                dangerouslySetInnerHTML={{ __html: details?.description }}
                className="content"
              />
            )}
          </div>

          {features && (
            <div
              className={clsx(
                "grid gap-8",
                fullWidth ? "lg:grid-cols-1" : getGridCols(features.length),
              )}
            >
              {features?.map((item: any, index: number) => (
                <FeatureCard
                  {...item}
                  key={index}
                  theme={theme}
                  themeColor={themeColor}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
