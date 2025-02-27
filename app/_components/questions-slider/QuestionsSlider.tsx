import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import clsx from "clsx";
import { Chip } from "@heroui/chip";

import { questionSliderType } from "@/_types/question-slider";

const QuestionsSlider = (props: questionSliderType) => {
  const { question, details, variant, theme } = props;

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
      aria-label="question slider"
      className={clsx("w-full py-16 lg:py-24", variantClassName)}
    >
      <div className="container mx-auto">
        <div className="py-14 px-5 lg:px-20 rounded-lg bg-steel flex flex-col gap-14">
          <div className="flex flex-col gap-4 ">
            {details?.subHeading && (
              <Chip
                classNames={{
                  base: `${themeClassName} rounded-small py-3 px-1 `,
                  content: "text-white text-base uppercase font-bold",
                }}
                size="lg"
              >
                {details?.subHeading}
              </Chip>
            )}
            {details?.title && (
              <h3 className="text-xl font-medium lg:text-2xl">
                {details?.title}
              </h3>
            )}
            {details?.description && (
              <div
                dangerouslySetInnerHTML={{ __html: details?.description }}
                className="content"
              />
            )}
          </div>
          <div>
            <Swiper
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="mySwiper"
              loop={true}
              modules={[Pagination, Autoplay]}
              pagination={{
                clickable: true,
              }}
              spaceBetween={0}
            >
              {question &&
                question.map((slide: any) => (
                  <SwiperSlide key={slide.id}>
                    <div className="flex items-center justify-center h-full lg:px-16 lg:border-r border-white">
                      {slide?.description && (
                        <div className="text-lg text-white font-semibold leading-tight ">
                          {slide?.description}
                        </div>
                      )}
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuestionsSlider;
