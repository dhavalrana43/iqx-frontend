import React from "react";

import { infoCardType } from "@/_types/info-card";

const InfoCard = (props: infoCardType) => {
  const { infoList, details } = props;

  return (
    <section aria-label="info cards" className="w-full py-16 lg:py-24">
      <div className="container mx-auto">
        <div className="flex flex-col gap-14">
          <div className="flex flex-col gap-3">
            {details && details?.title && (
              <h2
                dangerouslySetInnerHTML={{ __html: details?.title }}
                className="text-xl font-medium	lg:text-2xl"
              />
            )}

            {details && details?.description && (
              <p className="text-base">{details?.description}</p>
            )}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 ">
            {infoList &&
              infoList?.map((item: any, index: number) => (
                <div
                  key={index}
                  className="bg-light-steel px-10 py-10 text-sm font-semibold flex justify-center items-center "
                >
                  {item?.description}
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoCard;
