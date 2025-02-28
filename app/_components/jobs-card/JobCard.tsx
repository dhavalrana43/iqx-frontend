"use client";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const JobCard = (props: any) => {
  const { JobTitle, Id } = props;

  return (
    <Link
      className="bg-transparent rounded-lg flex h-full flex-col transition-all ease-in-out p-px w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.33%-1.5rem)] xl:w-[calc(25%-1.5rem)]  bg-gradient-to-tr from-pink via-light-purple to-light-blue"
      href={"/careers/search-job/" + Id}
    >
      <div className="bg-white flex flex-col gap-10 p-10 justify-end h-full transition-all ease-in-out min-h-60 w-full  rounded-lg group hover:bg-gradient-to-tr from-pink via-light-purple to-light-blue  ">
        <p className="text-steel text-sm font-semibold group-hover:text-white transition-all ease-in-out">
          {JobTitle}
        </p>
        <div className="h-[3.125rem] w-[3.125rem] flex-shrink-0 rounded-full flex items-center p-3 justify-center transition-all ease-in-out bg-gradient-to-tr from-pink via-light-purple to-light-blue  group-hover:bg-none group-hover:bg-white">
          <FaArrowRightLong className="-rotate-45 text-white group-hover:text-steel transition-all ease-in-out" />
        </div>
      </div>
    </Link>
  );
};

export default JobCard;
