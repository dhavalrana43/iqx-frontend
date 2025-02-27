"use client";
import React, { useState } from "react";

import HeroSection from "@/_components/hero-section/HeroSection";
import CustomButton from "@/_components/custom-button/CustomButton";
import { formattedText } from "@/_utils/formatted-text";
import JobCard from "@/_components/jobs-card/JobCard";

interface Job {
  Id: string;
  JobTitle: string;
  CityName: string;
  BusinessUnitName: string;
}

const CAREER_GROUPS: Record<string, { groups: string[]; description: string }> =
  {
    "Advanced Software Development": {
      groups: [
        "SOL_Software Development - Johannesburg",
        "SOL_Software Development - Cape Town",
        "GIG_Data and Analytics - Johannesburg",
      ],
      description: "Help our clients' solve tomorrow’s problems today.",
    },
    "Digital Transformation and Experience Innovation": {
      groups: [
        "GIG_Experience Innovation - Johannesburg",
        "GIG_Experience Innovation - Cape Town",
      ],
      description:
        "Help our clients' navigate Digital Transformation and create experiences that matter.",
    },
    "Customer Experience, Data Science and Insights": {
      groups: ["GIG_Data and Analytics - Cape Town"],
      description:
        "Uncover Customer Experience, Data, and Business insights to help our clients' grow their business.",
    },
    "Risk, Finance and Sustainability Consulting": {
      groups: [
        "GIG_Finance, Risk and Supply Chain - Johannesburg",
        "GIG_Finance, Risk and Supply Chain - Cape Town",
      ],
      description:
        "Help our clients navigate risk and compliance and target sustainable growth.",
    },
    "People Advisory, Change and Learning Solutions": {
      groups: [
        "GIG_People Solutions - Johannesburg",
        "GIG_People Solutions - Cape Town",
      ],
      description:
        "Help us ensure no human is left behind on our clients' growth journey.",
    },
    "Enterprise Agility Consulting": {
      groups: [
        "GIG_Business Agility - Johannesburg",
        "GIG_Business Agility - Cape Town",
      ],
      description: "Help our clients succeed in their Agile Transformations.",
    },
    "Business Analysis, Architecture and Delivery Leadership": {
      groups: [
        "GIG_Business Analysis - Johannesburg",
        "GIG_Business Analysis - Cape Town",
        "CX",
        "GIG_Delivery Leadership - Johannesburg",
        "GIG_Delivery Leadership - Cape Town",
      ],
      description:
        "Help us evolve, future-proof, and grow local and international clients.",
    },
    "Business and Account Management": {
      groups: [
        "GTM_Marketing - Johannesburg",
        "GTM_Marketing - Cape Town",
        "Operations",
      ],
      description: "Help us grow our impact as a business.",
    },
    "Other Vacancies": {
      groups: ["DATA ANALYTICS HUB"],
      description: "",
    },
  };

const getGroupName = (careerPath: string): string => {
  const foundGroup = Object.entries(CAREER_GROUPS).find(
    ([_, group]) => group.groups.includes(careerPath), // Changed from paths to groups
  );

  return foundGroup ? foundGroup[0] : careerPath;
};

interface ProcessedJob extends Job {
  groupName: string;
}

const SearchJobPage = ({
  jobsData = [],
  heroBannerData,
  theme,
}: {
  jobsData: Job[];
  heroBannerData: any;
  theme: any;
}) => {
  const [selectedCareerPath, setSelectedCareerPath] = useState<string>("");
  const [selectedLocation, setSelectedLocation] = useState<string>("");
  const [appliedFilters, setAppliedFilters] = useState({
    careerPath: "",
    location: "",
  });

  const processedJobs: ProcessedJob[] = jobsData.map((job) => ({
    ...job,
    groupName: getGroupName(job.BusinessUnitName),
  }));

  const availableGroups = Object.keys(CAREER_GROUPS).filter((group) =>
    processedJobs.some((job) => job.groupName === group),
  );

  const filteredJobs = processedJobs.filter((job) => {
    const matchesGroup =
      appliedFilters.careerPath === "" ||
      job.groupName === appliedFilters.careerPath;
    const matchesLocation =
      appliedFilters.location === "" ||
      job.CityName === appliedFilters.location;

    return matchesGroup && matchesLocation;
  });

  const groupedJobs = filteredJobs.reduce(
    (acc: Record<string, ProcessedJob[]>, job: ProcessedJob) => {
      const key = job.groupName;

      acc[key] = acc[key] || [];
      acc[key].push(job);

      return acc;
    },
    {},
  );

  const handleApply = () => {
    setAppliedFilters({
      careerPath: selectedCareerPath,
      location: selectedLocation,
    });
  };

  return (
    <section className="flex flex-col items-center justify-center">
      <HeroSection {...(heroBannerData?.heroBanner ?? "")} theme={theme} />
      <div className="w-full py-16 lg:py-24 bg-chrome">
        <div className="container mx-auto">
          <div className="flex flex-col gap-10 max-w-2xl">
            <h2 className="text-xl font-medium lg:text-2xl text-steel">
              Refine your search
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-base text-steel font-bold">
                  Career path
                </label>
                <select
                  className="w-full border p-2 rounded bg-white text-black"
                  value={selectedCareerPath}
                  onChange={(e) => setSelectedCareerPath(e.target.value)}
                >
                  <option value="">All Career Paths</option>
                  {availableGroups.map((group) => (
                    <option key={group} value={group}>
                      {group}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-base text-steel font-bold">
                  Location
                </label>
                <select
                  className="w-full border p-2 rounded bg-white text-black"
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                >
                  <option value="">All Locations</option>
                  {Array.from(new Set(processedJobs.map((job) => job.CityName)))
                    .filter(Boolean)
                    .map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                </select>
              </div>
            </div>
            <div className="flex gap-4">
              <CustomButton type="button" onClick={handleApply}>
                Apply
              </CustomButton>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        {availableGroups.length > 0 ? (
          availableGroups.map((group) => {
            const jobs = groupedJobs[group];

            if (!jobs?.length) return null;

            return (
              <div
                key={group}
                className="w-full py-16 lg:py-24  odd:bg-white odd:text-steel"
              >
                <div className="container mx-auto">
                  <div className="flex flex-col gap-12 items-center">
                    <div className="flex flex-col gap-4 items-center text-center">
                      {group && (
                        <h2
                          dangerouslySetInnerHTML={{
                            __html: formattedText(group),
                          }}
                          className="text-xl font-mediumlg:text-2xl"
                        />
                      )}
                      {CAREER_GROUPS[group].description && (
                        <div
                          dangerouslySetInnerHTML={{
                            __html: formattedText(
                              CAREER_GROUPS[group].description,
                            ),
                          }}
                          className="lg:text-lg font-semibold"
                        />
                      )}
                    </div>
                    <div className="flex flex-wrap gap-6 w-full justify-center">
                      {jobs.map((item: any, index: number) => (
                        <JobCard key={index} {...item} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="w-full py-16 lg:py-24 text-center bg-white text-steel">
            No jobs found.
          </div>
        )}
      </div>
    </section>
  );
};

export default SearchJobPage;
