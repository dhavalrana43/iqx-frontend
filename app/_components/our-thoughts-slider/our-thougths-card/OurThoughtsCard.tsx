import React from "react";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

import CustomImage from "@/_components/custom-image/CustomImage";
import FallbackImage from "@/_images/default.jpg";

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date
    .toLocaleString("default", { month: "short" })
    .toUpperCase();
  const year = date.getFullYear();

  return `${day} ${month}, ${year}`;
};

const OurThoughtsCard = (props: any) => {
  const { slug, title, bannerImage, date, readingTime } = props;

  return (
    <div aria-label="our-thoughts-card" className="our-thoughts-card">
      <CustomImage
        alt={title}
        className="w-full h-full object-cover rounded-base border border-transparent"
        height={bannerImage?.height}
        src={bannerImage?.url || FallbackImage}
        width={bannerImage?.width}
      />
      <div className="overlay">
        <div className="flex flex-col gap-2.5">
          <div className="flex gap-2.5 items-center">
            {readingTime && (
              <div className="py-1.5 px-3 text-xs text-steel rounded-full border border-steel-100 font-medium">
                {readingTime}
              </div>
            )}
            {date && (
              <div className="text-xs text-steel rounded-full uppercase font-medium">
                {formatDate(date)}
              </div>
            )}
          </div>
          {title && <h4 className="text-lg text-steel font-bold">{title}</h4>}
        </div>
        <Link
          className="flex items-center uppercase text-steel font-bold"
          href={slug}
        >
          Read More
          <FaArrowRightLong className="-rotate-45 text-steel group-hover:rotate-0 transition-all  ease-in-out" />
        </Link>
      </div>
    </div>
  );
};

export default OurThoughtsCard;
