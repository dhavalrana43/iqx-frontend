"use client";
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { IoChevronBack } from "react-icons/io5";
import { IoChevronForwardOutline } from "react-icons/io5";
import clsx from "clsx";

import { featureSliderProps } from "@/_types/feature-slider.";

const FeatureSlider = (props: featureSliderProps) => {
  const { title, subTitle, description, variant, theme } = props;
  const swiperRef = useRef<any>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const variantClassName =
    variant && typeof variant.Variant === "string"
      ? `custom-bg-${variant?.Variant.toLowerCase()}`
      : "custom-bg-white";

  const themeColor = theme;

  const themeClassName =
    themeColor && themeColor.color
      ? `custom-bg-${themeColor.color.toLowerCase().replace(/ /g, "-")}`
      : "bg-transparent";

  return (
    <section
      aria-label="feature slider"
      className={clsx("w-full py-16 lg:py-24", variantClassName)}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-[4.5rem]">
          <div className="lg:col-span-4  flex flex-col gap-3">
            {subTitle && (
              <h3 className="font-bold text-xl lg:text-2xl">{subTitle}</h3>
            )}
            {title && (
              <h3 className="text-xl font-medium lg:text-2xl">{title}</h3>
            )}
          </div>

          <div className="border-0 lg:border-l border-current lg:pl-[4.5rem] lg:col-span-8">
            <div className="z-10 flex items-center gap-10 mb-6">
              <IoChevronBack
                className={clsx(
                  "h-10 w-10 p-3 rounded-full cursor-pointer",
                  themeClassName,
                )}
                onClick={() => swiperRef.current.swiper.slidePrev()}
              />
              <span className="text-md font-bold">
                {currentIndex + 1} / {description?.length}
              </span>
              <IoChevronForwardOutline
                className={clsx(
                  "h-10 w-10 p-3 rounded-full cursor-pointer",
                  themeClassName,
                )}
                onClick={() => swiperRef.current.swiper.slideNext()}
              />
            </div>
            <div>
              <Swiper
                ref={swiperRef}
                slidesPerView={1}
                spaceBetween={50}
                onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
              >
                {description?.map((item: any, index: number) => (
                  <SwiperSlide key={index} className="flex flex-col gap-6">
                    {item?.title && (
                      <h4 className="text-xl font-medium lg:text-2xl">
                        {item?.title}
                      </h4>
                    )}
                    {item?.content && (
                      <div
                        dangerouslySetInnerHTML={{
                          __html: item?.content,
                        }}
                        className="text-sm font-semibold lg:text-base pt-[24px]"
                      />
                    )}
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSlider;
