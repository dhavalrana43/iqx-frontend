import clsx from "clsx";
import React from "react";
import Link from "next/link";

import { leadershipType } from "@/_types/leadership";
import FallbackImage from "@/_images/default.jpg";

import CustomImage from "../custom-image/CustomImage";

const Leadership = (props: leadershipType) => {
  const { variant, details, leaderships } = props;

  const variantClassName =
    variant && typeof variant.Variant === "string"
      ? `custom-bg-${variant?.Variant.toLowerCase()}`
      : "custom-bg-white";

  return (
    <section
      aria-label="leaderships"
      className={clsx("w-full py-16 lg:py-24", variantClassName)}
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-14">
          {details?.title && (
            <h3
              dangerouslySetInnerHTML={{ __html: details?.title }}
              className="text-xl font-semibold lg:text-2xl"
            />
          )}
          {leaderships && (
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
              {leaderships?.map((item: any, index: number) => {
                return (
                  <div
                    key={index}
                    className="flex flex-col rounded-lg h-full gap-8"
                  >
                    <div className="relative w-full ">
                      <CustomImage
                        alt={item?.profile?.alternativeText ?? "image"}
                        className="w-full object-cover h-auto rounded-lg"
                        height={462}
                        src={item.profile?.url || FallbackImage}
                        width={462}
                      />
                      <Link href={item?.url ?? "/"} target="_blank">
                        <div className="absolute bottom-2 mb-3 mr-3 right-2 bg-white p-2 rounded-full shadow-md">
                          <svg
                            className="h-5 w-5 "
                            fill="#DDDDDF"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M19 0H5C2.25 0 0 2.25 0 5V19C0 21.75 2.25 24 5 24H19C21.75 24 24 21.75 24 19V5C24 2.25 21.75 0 19 0ZM7 20.25H4.25V9H7V20.25ZM5.625 7.75C4.5 7.75 3.625 6.875 3.625 5.75C3.625 4.625 4.5 3.75 5.625 3.75C6.75 3.75 7.625 4.625 7.625 5.75C7.625 6.875 6.75 7.75 5.625 7.75ZM20.25 20.25H17.5V14.375C17.5 13.125 17.5 11.5 15.875 11.5C14.25 11.5 14 13 14 14.5V20.25H11.25V9H13.75V10.125C14.25 9 15.375 8.5 16.5 8.5C19.25 8.5 20.25 10.375 20.25 13.25V20.25Z" />
                          </svg>
                        </div>
                      </Link>
                    </div>
                    <div className=" flex flex-col gap-3 text-steel">
                      <p className="text-sm font-semibold">{item?.name}</p>
                      <p className="text-sm font-semibold">
                        {item?.designation}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
