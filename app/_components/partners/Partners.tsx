"use client";
import { Chip } from "@heroui/chip";
import React from "react";
import clsx from "clsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import { PartnerTypes } from "@/_types/partner";
import FallbackImage from "@/_images/default.jpg";

import CustomImage from "../custom-image/CustomImage";

import "swiper/css";
import "swiper/css/pagination";

const Partners = (props: PartnerTypes) => {
  const { details, darkMode } = props;
  const { logos } = props;

  const theme = props?.theme;

  const themeClassName =
    theme && theme.color
      ? `custom-bg-${theme.color.toLowerCase().replace(/ /g, "-")}`
      : "bg-transparent";

  const backgroundColor = darkMode === true ? "bg-steel" : "bg-white";

  return (
    <section
      aria-label="partners"
      className={clsx(backgroundColor, "w-full py-24")}
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
            <div className="lg:col-span-2 flex flex-col gap-4 ">
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
                  className={clsx(
                    darkMode ? "text-white" : "text-steel",
                    "text-xl font-medium	lg:text-2xl",
                  )}
                />
              )}
              {details?.description && (
                <div
                  dangerouslySetInnerHTML={{ __html: details?.description }}
                  className="content"
                />
              )}
            </div>
            <div
              className={clsx(
                "lg:col-span-3 gap-10 rounded-2xl py-8",
                darkMode ? "bg-white/20" : "bg-chrome",
              )}
            >
              <div>
                <Swiper
                  autoplay={true}
                  breakpoints={{
                    640: { slidesPerView: "auto" },
                  }}
                  className="partner-slider"
                  freeMode={true}
                  grabCursor={true}
                  loop={true}
                  modules={[Autoplay]}
                  slidesPerView={1}
                  spaceBetween={0}
                >
                  {logos &&
                    logos?.map((image, index) => (
                      <SwiperSlide key={index} className="sm:!w-fit  w-fit ">
                        <CustomImage
                          alt="Image"
                          height={image?.height}
                          src={image?.url || FallbackImage}
                          width={image?.width}
                        />
                      </SwiperSlide>
                    ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
