import React from "react";
import { unstable_cache } from "next/cache";

import { getHomeData } from "@/_service/home";
import { siteConfig } from "@/_config/site";
import FooterCTA from "@/_components/footer-cta/FooterCTA";
import CustomHead from "@/_components/custom-head/CustomHead";

import HomePage from "./HomePage";

const getHomeDataCached = unstable_cache(getHomeData, ["home-page"], {
  revalidate: siteConfig.revalidateTime,
  tags: ["home-page"],
});

const Home = async () => {
  const fetchHomePageData = await getHomeDataCached();

  const footerData = fetchHomePageData?.data?.footerCta;

  return (
    <>
      <CustomHead
        description={
          fetchHomePageData?.data?.description
            ? fetchHomePageData?.data?.description
            : ""
        }
        title={fetchHomePageData?.data?.title}
      />
      <HomePage pageData={fetchHomePageData?.data} />
      {footerData && <FooterCTA {...footerData} />}
    </>
  );
};

export default Home;
