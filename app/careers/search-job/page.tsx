// app/careers/search-job/page.tsx
import React from "react";
import { unstable_cache } from "next/cache";

import { fetchAllJobs, getJobSearchData } from "@/_service/jobs";
import { siteConfig } from "@/_config/site";
import CustomHead from "@/_components/custom-head/CustomHead";
import FooterCTA from "@/_components/footer-cta/FooterCTA";

import SearchJobPage from "./SearchJob";

const getJobsDataCached = unstable_cache(fetchAllJobs, ["job"], {
  revalidate: siteConfig.revalidateTime,
  tags: ["job"],
});

const getJobSearchDataCached = unstable_cache(
  getJobSearchData,
  ["search-job"],
  {
    revalidate: siteConfig.revalidateTime,
    tags: ["search-job"],
  },
);

const SearchJob = async () => {
  try {
    const jobs = await getJobsDataCached();

    if (!jobs) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <p>No jobs available at the moment.</p>
        </div>
      );
    }

    const fetchJobSearchData = await getJobSearchDataCached();

    const { title, description, heroBanner, details, footerCta, theme } =
      fetchJobSearchData?.data;

    const heroBannerData = {
      heroBanner,
      details,
    };

    return (
      <>
        <CustomHead
          description={
            description ??
            "Opportunities are all around us. We just need to know where to look for them. Read more to see the industry insights from iqbusiness."
          }
          title={title ?? "Our thoughts - iqbusiness - The Insights Scoop"}
        />
        <SearchJobPage
          heroBannerData={heroBannerData}
          jobsData={jobs}
          theme={theme}
        />
        {footerCta && <FooterCTA {...footerCta} />}
      </>
    );
  } catch (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Unable to load jobs. Please try again later. </p>
        <p>
          {error instanceof Error
            ? error.message
            : "An unknown error occurred."}
        </p>
      </div>
    );
  }
};

export default SearchJob;
