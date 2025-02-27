"use client";
import React from "react";
import { Chip } from "@heroui/chip";

import FallbackImage from "@/_images/default.jpg";

import CustomImage from "../custom-image/CustomImage";
import CustomButton from "../custom-button/CustomButton";

const FooterCTA = (props: any) => {
  const { details, ctaButton, ctaImage } = props;

  return (
    <section
      aria-label="Footer CTA"
      className="w-full pt-16 lg:pt-24 bg-steel text-white"
    >
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-3">
          {ctaImage && (
            <CustomImage
              alt={ctaImage?.alternativeText ?? "image"}
              className="max-h-[106] w-auto"
              height={ctaImage?.height ?? 106}
              src={ctaImage?.url || FallbackImage}
              width={ctaImage?.width ?? 746}
            />
          )}
          <div className="flex flex-col gap-4 items-center">
            {details?.subHeading && (
              <Chip
                classNames={{
                  base: ` rounded-small py-3 px-1`,
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
                className="text-lg font-bold lg:text-3xl"
              />
            )}
            {details?.description && (
              <div
                dangerouslySetInnerHTML={{ __html: details?.description }}
                className="content"
              />
            )}
          </div>
          {ctaButton != null && (
            <div className="mt-9">
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

export default FooterCTA;
