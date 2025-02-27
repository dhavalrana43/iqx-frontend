"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import clsx from "clsx";

import { questionSliderType } from "@/_types/question-slider";

const SingleSlider = (props: questionSliderType) => {
  const { question, variant } = props;

  const variantClassName =
    variant && typeof variant.Variant === "string"
      ? `custom-bg-${variant?.Variant.toLowerCase()}`
      : "custom-bg-white";

  return (
    <section
      aria-label="single slider"
      className={clsx("w-full py-16 lg:py-24", variantClassName)}
    >
      <div className="container mx-auto">
        <div className="custom-bg-gradient py-14 px-20 rounded-medium">
          <Swiper
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            className="mySwiper"
            loop={true}
            modules={[Pagination, Autoplay]}
            pagination={{
              clickable: true,
            }}
            slidesPerView={1}
            spaceBetween={0}
          >
            {question &&
              question.map((slide: any, index: number) => (
                <SwiperSlide key={index}>
                  <div className="flex items-center justify-center h-full ">
                    <div className="text-lg text-white font-semibold leading-tight ">
                      {slide?.description}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default SingleSlider;
