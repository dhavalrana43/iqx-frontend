"use client";
import React from "react";
import { Chip } from "@heroui/chip";
import clsx from "clsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import { serviceType } from "@/_types/service";

import CustomButton from "../custom-button/CustomButton";

import ServiceCard from "./service-card/ServiceCard";

import "swiper/css";
import "swiper/css/pagination";

const Services = (props: serviceType) => {
  const { ctaButton, details, variant, theme, Services } = props;

  const getServiceItems = (servicesCount: number) => {
    if (servicesCount === 1) return 2;
    if (servicesCount === 2) return 2;

    return "auto";
  };

  const variantClassName =
    variant && typeof variant.Variant === "string"
      ? `custom-bg-${variant?.Variant.toLowerCase()}`
      : "custom-bg-white";

  const themeClassName =
    theme && theme.color
      ? `custom-bg-${theme.color.toLowerCase().replace(/ /g, "-")}`
      : "bg-transparent";

  return (
    <section
      aria-label="service section"
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
        </div>
      </div>

      {Services && (
        <div className="w-full mt-8">
          <Swiper
            breakpoints={{
              640: { slidesPerView: getServiceItems(Services.length) },
            }}
            className="sevice-slider"
            modules={[Pagination]}
            slidesPerView={1}
            spaceBetween={40}
          >
            {Services.map((details: any, index: number) => (
              <SwiperSlide
                key={`service-${details?.title || index}`}
                className={clsx(
                  Services.length > 2 ? "sm:max-w-md" : "sm:max-w-full",
                )}
              >
                <ServiceCard {...details} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </section>
  );
};

export default Services;
