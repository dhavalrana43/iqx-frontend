"use client";
import Link from "next/link";
import React from "react";

import FallbackImage from "@/_images/default.jpg";

import CustomImage from "../custom-image/CustomImage";

// Date formatting helper function
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date
    .toLocaleString("default", { month: "short" })
    .toUpperCase();
  const year = date.getFullYear();

  return `${day} ${month}, ${year}`;
};

const BlogCard = (props: any) => {
  const { slug, title, bannerImage, date, readingTime } = props;

  return (
    <Link
      className="bg-transparent rounded-lg flex h-full flex-col transition-all ease-in-out p-px hover:bg-gradient-to-tr from-light-blue via-light-purple to-pink"
      href={slug ? "/our-thoughts/" + slug : "/"}
    >
      <div className="bg-white flex flex-col rounded-lg h-full gap-8">
        <CustomImage
          className="w-full object-cover h-72 rounded-t-lg"
          src={bannerImage?.url || FallbackImage}
        />
        <div className="p-6 flex flex-col gap-3 text-steel">
          <ul className="blogs-meta">
            {date && <li>{formatDate(date)}</li>}
            {readingTime && <li>{readingTime} read</li>}
          </ul>
          <h4 className="text-sm font-semibold">{title}</h4>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
