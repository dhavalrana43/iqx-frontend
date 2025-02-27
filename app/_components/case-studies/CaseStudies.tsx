import React from "react";

import { caseStudiesType } from "@/_types/case-studies";
import FallbackImage from "@/_images/default.jpg";

import CustomImage from "../custom-image/CustomImage";
const CaseStudies = (props: caseStudiesType) => {
  const { details, caseStudiesCard } = props;

  return (
    <section
      aria-label="case study section"
      className="w-full py-16 lg:py-24 bg-white"
    >
      <div className="container mx-auto">
        <div className="flex-col gap-14">
          {details?.title && (
            <h2
              dangerouslySetInnerHTML={{ __html: details?.title }}
              className="text-xl font-medium text-black lg:text-2xl"
            />
          )}
          {details?.description && (
            <div
              dangerouslySetInnerHTML={{ __html: details?.description }}
              className="content text-black"
            />
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8">
            {caseStudiesCard?.map((item: any, index: number) => (
              <div key={index} className="bg-white   overflow-hidden">
                <CustomImage
                  alt={item?.alternativeText ?? "image"}
                  className="h-[418px] w-full rounded-lg  object-cover object-center	"
                  height={418}
                  src={item?.image?.url || FallbackImage}
                  width={417.667}
                />
                <div className="pt-5 mt-[3rem] flex-col gap-5">
                  <h5 className="text-black font-semibold text-lg">
                    {item?.title}
                  </h5>
                  {item?.description && (
                    <p className="text-black text-sm mt-5">
                      {item?.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
