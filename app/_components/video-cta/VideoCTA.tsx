import React from "react";
import clsx from "clsx";
import { Chip } from "@heroui/chip";

import { videoCtaType } from "@/_types/viddeo-cta";

import CustomButton from "../custom-button/CustomButton";

const VideoCTA = (props: videoCtaType) => {
  const { videoUrl, ctaButton, details, isFullWidth, variant } = props;

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
      aria-label="video component"
      className={clsx("w-full py-16 lg:py-24", variantClassName)}
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4 max-w-screen-xl">
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
          {videoUrl && (
            <div className="relative  flex justify-center items-center">
              <iframe
                className={`w-full aspect-video ${isFullWidth === true ? "max-w-full" : "max-w-[796px]"}  rounded-lg overflow-hidden`}
                frameBorder="0"
                loading="lazy"
                src={`${videoUrl}?controls=0&modestbranding=1&rel=0&disablekb=1&fs=0&playsinline=1&autoplay=0`}
                title="YouTube video player"
              />
            </div>
          )}
          {ctaButton != null && (
            <div className="flex justify-center mt-16">
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

export default VideoCTA;
