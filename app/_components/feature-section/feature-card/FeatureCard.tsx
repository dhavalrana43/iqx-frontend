"use client";
import React from "react";
import { Chip } from "@heroui/chip";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaArrowRightLong } from "react-icons/fa6";
import clsx from "clsx";

import FallbackImage from "@/_images/default.jpg";
import CustomImage from "@/_components/custom-image/CustomImage";

const FeatureCard = (props: any) => {
  const { image, title, subTitle, description, fullWidth, tags } = props;

  const themeClassName =
    props.theme &&
    props.theme.color &&
    `custom-gradient-${props.theme.color.toLowerCase().replace(/ /g, "-")}`;

  return (
    <div className="flex flex-col gap-2.5 max-h-[21rem] ">
      <div className="rounded-xl transition-all h-full ease-in-out relative group overflow-hidden feature-card">
        <div className="h-full">
          <CustomImage
            alt={image?.alternativeText ?? "Image"}
            className="object-cover rounded-xl w-full h-full"
            height={336}
            src={image?.url || FallbackImage}
            width={fullWidth ? 1352 : 416}
          />

          <div className="absolute left-0 top-0 p-10 z-[1] h-full flex items-end transition-all  ease-in-out w-full  after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-black after:-z-[1] after:opacity-50 group-hover:after:opacity-0 after:rounded-xl after:transition-all after:ease-in-out">
            <div
              className={clsx(
                "absolute left-0 top-full z-[2] rounded-xl  group-hover:top-0 transition-all  ease-in-out h-full w-full  bg-gradient-to-t  ",
                props.themeColor
                  ? themeClassName
                  : "from-light-blue via-light-purple to-pink opacity-90",
              )}
            />
            <div className="flex flex-col gap-5 text-white relative z-50  w-full">
              <div className="flex flex-col gap-5 relative w-full">
                {title && <h5 className="font-semibold text-lg">{title}</h5>}
                {subTitle && (
                  <h6 className="text-base font-medium">{subTitle}</h6>
                )}
                {description && (
                  <div
                    dangerouslySetInnerHTML={{ __html: description }}
                    className="text-base feature-card-description"
                  />
                )}
              </div>
              <div className="h-[3.125rem] w-[3.125rem] flex-shrink-0 rounded-full flex items-center p-3 z-50 relative justify-center bg-white">
                <FaArrowRightLong className="-rotate-45 text-black group-hover:rotate-0 transition-all  ease-in-out" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {tags && fullWidth && (
        <div>
          <Swiper
            autoplay={{
              delay: 0,
            }}
            className="mySwiper"
            freeMode={true}
            grabCursor={true}
            loop={true}
            modules={[Autoplay]}
            slidesPerView={"auto"}
            spaceBetween={20}
            speed={5000}
          >
            {tags.map((item: any, index: number) => (
              <SwiperSlide key={index} className="!w-fit">
                <Chip className="bg-chrome text-steel rounded-small m-0 p-0">
                  {item?.text}
                </Chip>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
};

export default FeatureCard;
