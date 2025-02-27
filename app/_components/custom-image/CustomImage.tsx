"use client";
import Image, { StaticImageData } from "next/image";
import React from "react";

import { getStrapiAssetURI } from "@/_data/loaders";

type Props = {
  src?: string | StaticImageData | null; // Allow null but handle it
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
  loading?: "lazy" | "eager";
};

const CustomImage = ({
  src = null, // Allow null as valid input
  alt = "",
  width = 1440,
  height = 680,
  className = "",
  loading,
  ...children
}: Props) => {
  // Process the source with proper type handling
  const processedSrc = typeof src === "string" ? getStrapiAssetURI(src) : src;

  // Ensure finalSrc is always valid (never null)
  const finalSrc: string | StaticImageData =
    processedSrc ||
    "https://app.requestly.io/delay/5000/https://nextui.org/images/hero-card-complete.jpeg";

  return (
    <Image
      alt={alt}
      className={className}
      height={height}
      loading={loading}
      src={finalSrc} // Now guaranteed to be valid type
      width={width}
      {...children}
    />
  );
};

export default CustomImage;
