import React from "react";
import Link from "next/link";

import CustomImage from "../custom-image/CustomImage";

const LeadershipCard = ({ name, role, imageUrl, profileUrl }: any) => {
  return (
    <div className="m-0 p-0 border-0 outline-0">
      <div className="relative ">
        <div className="relative w-full h-full">
          <CustomImage
            alt="Team Member"
            className="object-cover w-full h-full border-none outline-none min-w-[302px] min-h-[250px] rounded-xl"
            height={250}
            src={imageUrl}
            width={302}
          />
        </div>

        <Link href={profileUrl || "#"}>
          <div className="absolute  right-[50px] bottom-[-32px] z-10">
            <div className="relative z-10 bg-white rounded-[60px] border-[10px] border-transparent">
              <div className="absolute left-[-28px] bottom-[22px] h-[40px] w-[22px] rounded-br-[20px]" />

              <div className="inline-flex h-[45px] w-[45px] items-center justify-center bg-black text-white rounded-full cursor-pointer">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 17L17 7M17 7H7M17 7V17"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div className="absolute right-[-17px] bottom-[22px] h-[27px] w-[8px] rounded-bl-[10px]" />
            </div>
          </div>
        </Link>
      </div>

      <div className="flex flex-col gap-1 pt-8 px-2">
        <h3 className="text-lg font-medium text-gray-900">
          {name || "Team Member Name"}
        </h3>
        <p className="text-base text-gray-600">{role || "Position"}</p>
      </div>
    </div>
  );
};

export default LeadershipCard;
