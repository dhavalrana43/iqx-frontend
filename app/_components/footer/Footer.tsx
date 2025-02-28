"use client";
import React from "react";
import Link from "next/link";

import CustomImage from "../custom-image/CustomImage";

const Footer = (props: any) => {
  const { logoImage, logo, socialLink, navigations } = props;

  return (
    <section
      aria-label="Footer"
      className="w-full pb-16 lg:pb-24 pt-16 lg:pt-20 bg-steel text-white"
    >
      <div className="container mx-auto">
        <div className="border-t border-white mb-11" />

        <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
          <Link className="mx-auto lg:mx-0" href={logo?.url ? logo?.url : "/"}>
            <CustomImage
              alt={logoImage?.alternativeText ?? "logo"}
              height={87}
              src={logoImage?.url ?? "/logo.svg"}
              width={152}
            />
          </Link>

          <div className="flex flex-col gap-9 ">
            <div className="flex flex-wrap gap-11">
              {socialLink &&
                socialLink.map((item: any, index: number) => (
                  <Link key={index} href={item?.url ?? "/"} target="_blank">
                    <CustomImage
                      alt={item?.icon?.alternativeText ?? "Social Media logo"}
                      height={40}
                      src={item?.icon?.url}
                      width={40}
                    />
                  </Link>
                ))}
            </div>
            <div className="flex gap-11 justify-end">
              {navigations &&
                navigations?.map((item: any, index: number) => (
                  <Link key={index} className="text-xs" href={item?.url ?? "/"}>
                    {item?.title}
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
