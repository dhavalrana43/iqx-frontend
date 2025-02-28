"use client";
import React from "react";
import clsx from "clsx";

import { ctaCardType } from "@/_types/cta-card";
import FallbackImage from "@/_images/default.jpg";

import CustomButton from "../custom-button/CustomButton";
import CustomImage from "../custom-image/CustomImage";

const CTACard = (props: ctaCardType) => {
  const { details, ctaButton, image, variant } = props;

  const variantClassName =
    variant && typeof variant.Variant === "string"
      ? `custom-bg-${variant?.Variant.toLowerCase()}`
      : "custom-bg-white";

  return (
    <section
      aria-label="CTA card"
      className={clsx("w-full py-16 lg:py-24", variantClassName)}
    >
      <div className="container mx-auto">
        <div className="custom-bg-gradient rounded-lg">
          <div
            className={clsx(
              "grid  py-20 px-5 lg:px-20 gap-10",
              image
                ? "grid-cols-1 lg:grid-cols-2"
                : "grid-cols-1 justify-center text-center",
            )}
          >
            <div
              className={clsx(
                "flex flex-col gap-4",
                image ? "items-start" : "items-center",
              )}
            >
              {details?.title && (
                <h2
                  dangerouslySetInnerHTML={{ __html: details?.title }}
                  className="text-xl font-medium	lg:text-2xl"
                />
              )}
              {details?.subHeading && (
                <h3
                  dangerouslySetInnerHTML={{ __html: details?.subHeading }}
                  className="text-xs uppercase lg:text-sm"
                />
              )}
              {details?.description && (
                <div
                  dangerouslySetInnerHTML={{ __html: details?.description }}
                  className="content max-w-4xl"
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
            {image && (
              <div>
                <CustomImage
                  alt={image?.alternativeText ?? "image"}
                  className="max-w-full h-auto"
                  height={image.height ?? 145}
                  src={image?.url || FallbackImage}
                  width={image.width ?? 571}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTACard;
