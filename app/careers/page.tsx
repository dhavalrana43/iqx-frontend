import React from "react";
import { unstable_cache } from "next/cache";

import { fetchCareersData } from "@/_service/careers";
import { siteConfig } from "@/_config/site";
import CustomHead from "@/_components/custom-head/CustomHead";
import FooterCTA from "@/_components/footer-cta/FooterCTA";

import CareersPage from "./CareersPage";

const getCareersCached = unstable_cache(fetchCareersData, ["careers"], {
  revalidate: siteConfig.revalidateTime,
  tags: ["careers"],
});

const Careers = async () => {
  const getCareersData = await getCareersCached();

  return (
    <>
      <CustomHead
        description={
          getCareersData?.data?.description
            ? getCareersData?.data?.description
            : ""
        }
        title={getCareersData?.data?.title}
      />
      <CareersPage {...getCareersData?.data} />
      {getCareersData?.data?.footerCta && (
        <FooterCTA {...getCareersData?.data?.footerCta} />
      )}
    </>
  );
};

export default Careers;
