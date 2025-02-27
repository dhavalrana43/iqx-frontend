// app/careers/search-job/[id]/page.tsx
import React from "react";
import { FaFileLines, FaHouse, FaLocationDot } from "react-icons/fa6";

import { fetchSingleJob } from "@/_service/jobs";
import CustomButton from "@/_components/custom-button/CustomButton";
import { formattedText } from "@/_utils/formatted-text";
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date
    .toLocaleString("default", { month: "short" })
    .toUpperCase();
  const year = date.getFullYear();

  return `${day} ${month}, ${year}`;
};
const Page = async ({ params }: { params: { id: string } }) => {
  const job = await fetchSingleJob(params.id);

  return (
    <section className="flex flex-col items-center justify-center">
      <div className="w-full text-white py-12">
        <div className="container mx-auto">
          <div className="flex flex-col gap-8">
            <h1 className="font-extrabold uppercase text-xl lg:text-2xl text-white ">
              {job?.JobTitle}
            </h1>
            <div className="flex  gap-4 flex-col">
              <div className="flex gap-2 items-center">
                <FaHouse /> {job?.DivisionName} South Africa
              </div>
              <div className="flex gap-2 items-center">
                <FaLocationDot /> {job?.CityName} {job?.Address1}
              </div>
              <div className="flex gap-2 items-center">
                <FaFileLines /> {job?.ContractLength ? "Contract" : "Permanent"}
              </div>
            </div>
            <div className="flex gap-4">
              <CustomButton>Apply</CustomButton>
              <CustomButton href="/careers/search-job" variant="chrome">
                View All Jobs
              </CustomButton>
            </div>
            <div className="">
              Posted{" "}
              <strong>{formatDate(job?.PublishInternalStartDate)}</strong> -
              Closing Date <strong>{formatDate(job?.ClosedDate)}</strong>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white text-steel w-full">
        <div className="container mx-auto  py-14 content ">
          <div className="space-y-8">
            {job?.Description && (
              <div>
                <h3 className="font-semibold mb-4">Job Description</h3>
                <div
                  dangerouslySetInnerHTML={{
                    __html: formattedText(job.Description),
                  }}
                  className="prose"
                />
              </div>
            )}

            {job?.MinimumRequirements && (
              <div>
                <h2 className="text-xl font-bold mb-4">Minimum Requirements</h2>
                <ul className="list-disc pl-6 space-y-2">
                  {job.MinimumRequirements.split("\n").map(
                    (item: string, index: number) => (
                      <li key={index}>{item.trim()}</li>
                    ),
                  )}
                </ul>
              </div>
            )}

            {/* Responsibilities */}
            {job?.Responsibilities && (
              <div>
                <h2 className="text-xl font-bold mb-4">Responsibilities</h2>
                <ul className="list-disc pl-6 space-y-2">
                  {job.Responsibilities.split("\n").map(
                    (item: string, index: number) => (
                      <li key={index}>{item.trim()}</li>
                    ),
                  )}
                </ul>
              </div>
            )}

            {/* Personal Qualifications */}
            {job?.PersonalQualifications && (
              <div>
                <h2 className="text-xl font-bold mb-4">
                  Personal Qualifications
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  {job.PersonalQualifications.split("\n").map(
                    (item: string, index: number) => (
                      <li key={index}>{item.trim()}</li>
                    ),
                  )}
                </ul>
              </div>
            )}

            {/* Additional Information */}
            <div className="bg-gray-100 p-6 rounded-lg">
              <p className="text-sm text-gray-600">
                Please note: As all IQBusiness roles require honesty in the
                handling of or access to cash, finances, financial systems or
                confidential information, our recruitment process requires that
                the following background checks be completed: credit, criminal,
                ID and qualification verification.
              </p>
            </div>

            {/* Bottom Apply Button */}
            <div className="pt-8">
              <CustomButton>Apply Now</CustomButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
