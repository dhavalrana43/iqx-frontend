"use client";
import React, { useRef } from "react";
import clsx from "clsx";
import { Chip } from "@heroui/chip";

import { FactType } from "@/_types/facts";

import FactCard from "../fact-card/FactCard";

const Facts = (props: FactType) => {
  const { details, factCards, variant } = props;
  const variantClassName =
    variant && typeof variant.Variant === "string"
      ? `custom-bg-${variant?.Variant.toLowerCase()}`
      : "custom-bg-white";
  const ref = useRef(null);
  const theme = props?.theme;
  const themeClassName =
    theme && theme.color
      ? `custom-bg-${theme.color.toLowerCase().replace(/ /g, "-")}`
      : "bg-transparent";

  return (
    <section
      ref={ref}
      aria-label="Facts"
      className={clsx("w-full py-16 lg:py-24", variantClassName)}
    >
      <div className="container mx-auto">
        <section className="w-full py-8">
          <div className="container mx-auto ">
            <div className="flex flex-col gap-14">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="flex flex-col gap-4">
                  {details?.subHeading && (
                    <Chip
                      classNames={{
                        base: `${themeClassName} rounded-small py-3 px-1`,
                        content: "text-white text-base uppercase font-bold",
                      }}
                      size="lg"
                    >
                      {details?.subHeading?.toUpperCase()}
                    </Chip>
                  )}
                  {details?.title && (
                    <h2
                      dangerouslySetInnerHTML={{ __html: details?.title }}
                      className="text-xl font-medium	lg:text-2xl"
                    />
                  )}
                  {details?.description && (
                    <div
                      dangerouslySetInnerHTML={{ __html: details?.description }}
                      className="content"
                    />
                  )}
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
                {factCards &&
                  factCards?.map((item: any, index: number) => {
                    const variantFAQCardClassName =
                      item?.variant?.Variant &&
                      typeof item.variant.Variant === "string"
                        ? `custom-bg-${item.variant.Variant.toLowerCase()}`
                        : "custom-bg-dark";

                    return (
                      <FactCard
                        key={index}
                        facts={item}
                        variantClassName={variantFAQCardClassName}
                      />
                    );
                  })}
                {details?.description && (
                  <div className=" flex flex-col rounded-lg gap-8 justify-center">
                    <div
                      dangerouslySetInnerHTML={{ __html: details?.description }}
                      className="content"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Facts;
