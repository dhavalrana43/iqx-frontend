"use client";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { IoChevronBack } from "react-icons/io5";
import { IoChevronForwardOutline } from "react-icons/io5";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Chip, Spinner } from "@heroui/react";
import { Autoplay } from "swiper/modules";

import { getLatestBlogs } from "@/_service/blogs";
import { ourThoughtsType } from "@/_types/our-thoughts";

import OurThoughtsCard from "./our-thougths-card/OurThoughtsCard";

interface Blog {
  documentId: string;
  title: string;
  author: string;
  date: string;
  readingTime: string;
  content: string;
  slug: string;
  bannerImage?: {
    url?: string;
    alternativeText?: string;
    height?: number;
    width?: number;
  };
}

const OurThoughtsSlider = (props: ourThoughtsType) => {
  const { details, variant, theme } = props;
  const swiperRef = useRef<any>(null);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const { data } = await getLatestBlogs(6);

        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const variantClassName =
    variant && typeof variant.Variant === "string"
      ? `custom-bg-${variant?.Variant.toLowerCase()}`
      : "custom-bg-white";

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
      aria-label="Our thoughts slider"
      className={clsx("w-full py-16 lg:py-24", variantClassName)}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-end">
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
                {currentIndex} / {blogs?.length}
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
      <div className="w-full mt-8">
        {loading ? (
          <Spinner color="default" label="Loading..." />
        ) : blogs.length > 0 ? (
          <Swiper
            ref={swiperRef}
            autoplay={true}
            breakpoints={{
              1024: { slidesPerView: 2 },
              1400: { slidesPerView: 3 },
            }}
            centeredSlides={true}
            className="our-thoughts-slider"
            freeMode={true}
            grabCursor={true}
            loop={true}
            modules={[Autoplay]}
            slidesPerView={1}
            spaceBetween={50}
            onSlideChange={(swiper) => handleSlideChange(swiper)}
          >
            {blogs.map((blog: Blog) => (
              <SwiperSlide key={blog.documentId}>
                <OurThoughtsCard {...blog} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <p>No blogs found</p>
        )}
      </div>
    </section>
  );
};

export default OurThoughtsSlider;
