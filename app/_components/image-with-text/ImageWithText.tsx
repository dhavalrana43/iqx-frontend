"use client";

import { Chip } from "@heroui/react";
import React from "react";
import clsx from "clsx";

import { imageWithTextType } from "@/_types/image-with-text";
import FallbackImage from "@/_images/default.jpg";

import CustomImage from "../custom-image/CustomImage";
import CustomButton from "../custom-button/CustomButton";

const ImageWithText = (props: imageWithTextType) => {
  const {
    imageLeft,
    ctaButton,
    image,
    Highlight,
    details,
    variant,
    videoUrl,
    showVideo,
    theme,
    smallImageContainer,
  } = props;

  const variantClassName =
    variant && typeof variant.Variant === "string"
      ? `custom-bg-${variant?.Variant.toLowerCase()}`
      : "custom-bg-white";

  const themeColor = theme;

  const themeClassName =
    themeColor && themeColor.color
      ? `custom-bg-${themeColor.color.toLowerCase().replace(/ /g, "-")}`
      : "bg-transparent";

  const contentRender = () => {
    return (
      <div
        className={clsx(
          "flex flex-col gap-8",
          smallImageContainer ? "lg:col-span-3" : "lg:col-span-2",
        )}
      >
        {!imageLeft && (
          <>
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
          </>
        )}
        {details?.title && (
          <h2
            dangerouslySetInnerHTML={{ __html: details?.title }}
            className="text-xl font-medium lg:text-2xl"
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
    );
  };

  const imageRender = () => {
    return (
      <div
        className={clsx(
          smallImageContainer ? "lg:col-span-2" : "lg:col-span-3",
        )}
      >
        {videoUrl && showVideo === true ? (
          <div className="relative  flex justify-center items-center">
            <iframe
              className="w-full aspect-video max-w-full rounded-lg overflow-hidden"
              frameBorder="0"
              loading="lazy"
              src={`${videoUrl}?controls=0&modestbranding=1&rel=0&disablekb=1&fs=0&playsinline=1&autoplay=0`}
              title="YouTube video player"
            />
          </div>
        ) : (
          image && (
            <CustomImage
              alt={"Image"}
              className="lg:col-span-3 rounded-base"
              height={700}
              src={image?.url || FallbackImage}
              width={1192}
            />
          )
        )}
      </div>
    );
  };

  return (
    <section
      aria-label="image with text"
      className={clsx("w-full py-16 lg:py-24", variantClassName)}
    >
      <div className="container mx-auto">
        {imageLeft ? (
          <div className="flex flex-col gap-8">
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
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
              {imageRender()}
              {contentRender()}
            </div>
            {Highlight && (
              <h3 className="text-xl font-medium lg:text-2xl">{Highlight}</h3>
            )}
          </div>
        ) : (
          <div className="flex flex-col gap-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
              {contentRender()}
              {imageRender()}
            </div>
            {Highlight && (
              <h3 className="text-xl font-medium lg:text-2xl">{Highlight}</h3>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default ImageWithText;
