import React from "react";
import clsx from "clsx";

import { factWithTaskType } from "@/_types/fact-wth-task";

import FactCard from "../fact-card/FactCard";

const FactWithText = (props: factWithTaskType) => {
  const { variant, details, facts } = props;

  const variantClassName =
    variant && typeof variant.Variant === "string"
      ? `custom-bg-${variant?.Variant.toLowerCase()}`
      : "custom-bg-chrome";

  return (
    <section
      aria-label="facts with text"
      className={clsx("w-full py-16 lg:py-24", variantClassName)}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
          {/* Left Column: Title and Description */}
          <div className="lg:col-span-3 flex flex-col gap-8">
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

          {/* Right Column: Facts with Counter Animation */}
          <FactCard facts={facts} />
        </div>
      </div>
    </section>
  );
};

export default FactWithText;
