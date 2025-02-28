"use client";
import React from "react";
import clsx from "clsx";
import { Chip } from "@heroui/chip";

import { FullTextProps } from "@/_types/full-text";

import CustomButton from "../custom-button/CustomButton";

const FullText = (data: FullTextProps) => {
  const { details, ctaButton, variant } = data;

  const variantClassName =
    variant && typeof variant.Variant === "string"
      ? `custom-bg-${variant?.Variant.toLowerCase()}`
      : "custom-bg-white";

  const theme = data?.theme;

  const themeClassName =
    theme && theme.color
      ? `custom-bg-${theme.color.toLowerCase().replace(/ /g, "-")}`
      : "bg-transparent";

  return (
    <section
      aria-label="full text"
      className={clsx("w-full py-16 lg:py-24", variantClassName)}
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-8 max-w-screen-xl">
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
          {ctaButton != null && (
            <div>
              <CustomButton
                btnText={ctaButton?.text}
                href={ctaButton?.url}
                isExternal={ctaButton?.isExternal}
                variant={ctaButton?.variant?.Variant}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FullText;
