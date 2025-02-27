"use client";
import { Accordion, AccordionItem } from "@heroui/accordion";
import { Chip } from "@heroui/chip";
import React, { useRef } from "react";
import clsx from "clsx";
import Link from "next/link";

import { faqType } from "@/_types/faq";

interface AccordionContentProps {
  description:
    | string
    | Array<{
        type: string;
        children: Array<{
          text: string;
          type: string;
        }>;
      }>;
  documentId: string;
  tags: any[];
}

const AccordionContent = ({
  description,
  documentId,
  tags,
}: AccordionContentProps) => {
  const contentRef = useRef<HTMLDivElement>(null);

  const contentText =
    typeof description === "string"
      ? description
      : Array.isArray(description)
        ? description
            .map((item) => item.children.map((child) => child.text).join(""))
            .join("")
        : "";

  return (
    <div
      className="relative grid grid-cols-1 lg:grid-cols-1 py-5 gap-5"
      id={documentId}
    >
      <div
        dangerouslySetInnerHTML={{ __html: contentText }}
        ref={contentRef}
        className={clsx(
          "content max-w-none transition-all duration-300 lg:col-span-4",
        )}
      />
      {tags && (
        <div className="flex flex-wrap gap-5 lg:col-span-4 ">
          {tags?.map((tag, index) => (
            <Link key={index} href={tag?.url ?? "/"}>
              <Chip className="bg-chrome text-base font-normal	 text-steel rounded-sm">
                {tag?.text}
              </Chip>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

const FaqsSection = (props: faqType) => {
  const { details, faqs, variant, theme } = props;

  const variantClassName =
    variant && typeof variant.Variant === "string"
      ? `custom-bg-${variant?.Variant.toLowerCase()}`
      : "custom-bg-white";

  const themeClassName =
    theme && theme.color
      ? `custom-bg-${theme.color.toLowerCase().replace(/ /g, "-")}`
      : "bg-transparent";

  return (
    <section
      aria-label="faqs section"
      className={clsx("w-full py-16 lg:py-24", variantClassName)}
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-8">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            <div className="flex flex-col gap-4 lg:col-span-4">
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
          {faqs && faqs.length > 0 ? (
            <Accordion
              itemClasses={{
                trigger: "py-0 accordion-button",
              }}
              showDivider={false}
              variant="light"
            >
              {faqs.map((item: any, index: number) => (
                <AccordionItem
                  key={index}
                  aria-label={item?.title}
                  disableIndicatorAnimation={true}
                  hideIndicator={true}
                  title={
                    <div className={clsx("accordion-title")}>
                      {item?.title}
                      <div className="accordion-indicator">
                        <span />
                        <span />
                      </div>
                    </div>
                  }
                >
                  {item.description ? (
                    <AccordionContent
                      description={item.description}
                      documentId={item.documentId}
                      tags={item?.tags}
                    />
                  ) : (
                    <p>No description available</p>
                  )}
                </AccordionItem>
              ))}
            </Accordion>
          ) : (
            <p>No FAQs available</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default FaqsSection;
