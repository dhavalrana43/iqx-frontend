"use client";
import React from "react";
import clsx from "clsx";
import { Chip } from "@heroui/chip";

import { factWithTaskType } from "@/_types/fact-wth-task";

import FactCard from "../fact-card/FactCard";

const FactWithText = (props: factWithTaskType) => {
  const { variant, theme, content, factCard } = props;

  const variantClassName =
    variant && typeof variant.Variant === "string"
      ? `custom-bg-${variant?.Variant.toLowerCase()}`
      : "custom-bg-chrome";

  const themeClassName =
    theme && theme.color
      ? `custom-bg-${theme.color.toLowerCase().replace(/ /g, "-")}`
      : "bg-transparent";

  return (
    <section
      aria-label="facts with text"
      className={clsx("w-full py-16 lg:py-24", variantClassName)}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 ">
          <div className="lg:col-span-3 flex flex-col gap-8">
            {content?.subHeading && (
              <Chip
                classNames={{
                  base: `${themeClassName} rounded-small py-3 px-1`,
                  content: "text-white text-base uppercase font-bold",
                }}
                size="lg"
              >
                {content?.subHeading}
              </Chip>
            )}
            {content?.title && (
              <h2
                dangerouslySetInnerHTML={{ __html: content?.title }}
                className="text-xl font-medium lg:text-2xl"
              />
            )}
            {content?.description && (
              <div
                dangerouslySetInnerHTML={{ __html: content?.description }}
                className="content"
              />
            )}
          </div>

          {factCard && <FactCard facts={factCard} />}
        </div>
      </div>
    </section>
  );
};

export default FactWithText;
