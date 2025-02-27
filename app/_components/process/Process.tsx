"use client";
import clsx from "clsx";
import React, { useState, useRef } from "react";
import { IoChevronBack } from "react-icons/io5";
import { IoChevronForwardOutline } from "react-icons/io5";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Chip } from "@heroui/chip";

import { processType } from "@/_types/process";

import ProcessCard from "./process-card/ProcessCard";

const Process = (props: processType) => {
  const swiperRef = useRef<any>(null);
  const [currentIndex, setCurrentIndex] = useState(1); // State for current slide index
  const { details, process, variant, theme } = props;

  const variantClassName =
    variant && typeof variant.Variant === "string"
      ? `custom-bg-${variant?.Variant.toLowerCase()}`
      : "custom-bg-steel";

  const themeClassName =
    theme && theme.color
      ? `custom-bg-${theme.color.toLowerCase().replace(/ /g, "-")}`
      : "bg-transparent";

  // Function to handle slide change
  const handleSlideChange = (swiper: any) => {
    setCurrentIndex(swiper.realIndex + 1); // Update currentIndex based on Swiper's realIndex
  };

  return (
    <section
      aria-label="process-section"
      className={clsx("w-full py-16 lg:py-24", variantClassName)}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="flex flex-col gap-4 lg:col-span-3">
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
                className="text-xl font-medium lg:text-2xl"
              />
            )}
            {details?.description && (
              <div
                dangerouslySetInnerHTML={{ __html: details?.description }}
                className="content"
              />
            )}
          </div>
          <div className="col-span-2">
            <div className="z-10 flex items-center gap-10 mb-6">
              <IoChevronBack
                className={clsx(
                  "h-10 w-10 p-3 rounded-full cursor-pointer",
                  themeClassName,
                )}
                onClick={() => swiperRef.current.swiper.slidePrev()}
              />
              <span className="text-md font-bold">
                {currentIndex} / {process?.length}
              </span>
              <IoChevronForwardOutline
                className={clsx(
                  "h-10 w-10 p-3 rounded-full cursor-pointer",
                  themeClassName,
                )}
                onClick={() => swiperRef.current.swiper.slideNext()}
              />
            </div>
          </div>
        </div>
      </div>
      {process && (
        <div className="w-full mt-8">
          <Swiper
            ref={swiperRef}
            breakpoints={{
              640: { slidesPerView: "auto" },
            }}
            className="process-slider"
            loop={true}
            modules={[Pagination]}
            slidesPerView={1}
            spaceBetween={40}
            onSlideChange={(swiper) => handleSlideChange(swiper)} // Add this line
          >
            {process.map((details: any, index: number) => (
              <SwiperSlide key={index} className="max-w-96 !h-auto">
                <ProcessCard {...details} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </section>
  );
};

export default Process;
