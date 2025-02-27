"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import TestimonialDivider from "@/_images/testimonial-divider.png";
import TestimonialSign from "@/_images/testimonial.png";
import "swiper/css";
import "swiper/css/pagination";
import { testimonialTpye } from "@/_types/testimonial";

const Testimonials = (props: testimonialTpye) => {
  const { title, description, testimonial } = props;

  return (
    <section aria-label="CTA card" className="w-full py-16 lg:py-24">
      <div className="2xl:pl-48 xl:pl-20 pl-5">
        <div className="grid gap-10 lg:grid-cols-6 grid-cols-1 ">
          <div className="lg:col-span-2 grid gap-5">
            <Image
              alt="testimonial.png"
              height={55}
              src={TestimonialSign.src}
              width={70}
            />
            {title && <h3 className="text-2xl font-medium	">{title}</h3>}
            <Image
              alt="divider"
              className="w-full h-[3px]"
              height={3}
              src={TestimonialDivider.src}
              width={776}
            />
            {description && (
              <p className="text-xs font-semibold	">{description}</p>
            )}
          </div>
          <div className="lg:col-span-4">
            <Swiper
              autoplay={true}
              breakpoints={{
                640: { slidesPerView: "auto" },
              }}
              className="testimonial-slider"
              loop={true}
              modules={[Pagination]}
              slidesPerView={2}
              spaceBetween={40}
              speed={2000}
            >
              {testimonial &&
                testimonial?.map((testimonial, index) => (
                  <SwiperSlide
                    key={index}
                    className="bg-white rounded-[1.25rem] relative z-[1] overflow-hidden !h-auto"
                  >
                    <div className="flex flex-col h-full">
                      <div className="relative p-8 font-semibold text-sm text-steel flex-grow">
                        {testimonial?.description}
                      </div>
                      <div className="testimonial-footer" />
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

export default Testimonials;
