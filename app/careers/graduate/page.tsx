import React from "react";
import { unstable_cache } from "next/cache";

import { siteConfig } from "@/_config/site";
import CustomHead from "@/_components/custom-head/CustomHead";
import FooterCTA from "@/_components/footer-cta/FooterCTA";
import { getGraduateData } from "@/_service/graduate";

import GraduatePage from "./GraduatePage";

const Graduate = async () => {
  const getGraduateDataCached = unstable_cache(getGraduateData, ["graduate"], {
    revalidate: siteConfig.revalidateTime,
    tags: ["graduate"],
  });
  const fetchGraduateData = await getGraduateDataCached();

  return (
    <>
      <CustomHead
        description={
          fetchGraduateData?.data?.description
            ? fetchGraduateData?.data?.description
            : ""
        }
        title={fetchGraduateData?.data?.title}
      />
      <GraduatePage pageData={fetchGraduateData?.data} />
      <FooterCTA {...fetchGraduateData?.data?.footerCta} />
    </>
  );
};

export default Graduate;
