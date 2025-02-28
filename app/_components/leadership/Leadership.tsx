"use client";
import clsx from "clsx";
import React from "react";

import LeadershipCard from "./LeadershipCard";

const Leadership = (props: any) => {
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
              {leaderships.map((item: any, index: any) => (
                <LeadershipCard
                  key={index}
                  imageUrl={item.profile?.url}
                  name={item.name}
                  profileUrl={item.url}
                  role={item.designation}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
