import React from "react";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

import CustomImage from "@/_components/custom-image/CustomImage";
import FallbackImage from "@/_images/default.jpg";

const ServiceCard = (props: any) => {
  const { image, title, descriptions, url } = props;

  return (
    <Link className="mb-8 flex" href={url ?? "/"}>
      <div className="rounded-xl w-full transition-all ease-in-out relative group mb-8">
        <div className="w-full">
          {image?.url && (
            <CustomImage
              alt={image?.alternativeText ?? "Image"}
              className="object-cover rounded-xl  w-full h-full"
              height={424}
              src={image?.url || FallbackImage}
              width={424}
            />
          )}
          <div className="ml-8 absolute border-b-1 group-hover:bottom-0 group-hover:opacity-0 border-light-steel bg-white py-5 px-8 rounded-s-lg transition-all  ease-in-out right-0 left-0 flex items-center justify-between gap-5 -bottom-8">
            <div className="top">
              {title && (
                <h5 className="font-semibold text-sm text-black ">{title}</h5>
              )}
            </div>
            <FaArrowRightLong className="-rotate-45 text-black" />
          </div>
          <div className="text-center absolute left-0 top-0 py-10 group-hover:py-20 px-9 z-[1] h-4/5 flex justify-center transition-all  ease-in-out w-full invisible opacity-0 group-hover:top-0 group-hover:opacity-100 group-hover:visible group-hover:h-full after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-black after:-z-[1] after:opacity-90 after:rounded-xl after:transition-all after:ease-in-out">
            <div className="flex flex-col items-center gap-3 text-white text-center">
              {title && <h5 className="font-semibold text-sm">{title}</h5>}
              {descriptions && (
                <div
                  dangerouslySetInnerHTML={{ __html: descriptions }}
                  className="text-base text-center"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
