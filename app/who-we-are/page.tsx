import React from "react";
import { unstable_cache } from "next/cache";

import { getWhoWeareData } from "@/_service/who-we-are";
import { siteConfig } from "@/_config/site";
import CustomHead from "@/_components/custom-head/CustomHead";
import FooterCTA from "@/_components/footer-cta/FooterCTA";

import WhoWeArePage from "./WhoWeArePage";

const WhoWeAre = async () => {
  const getWhoWeAreCached = unstable_cache(getWhoWeareData, ["wh-we-are"], {
    revalidate: siteConfig.revalidateTime,
    tags: ["who-we-are"],
  });

  const fetchData = await getWhoWeAreCached();

  return (
    <>
      <CustomHead
        description={
          fetchData?.data?.description ? fetchData?.data?.description : ""
        }
        title={fetchData?.data?.title}
      />
      <WhoWeArePage {...fetchData?.data} />
      {fetchData?.data?.footerCta && (
        <FooterCTA {...fetchData?.data?.footerCta} />
      )}
    </>
  );
};

export default WhoWeAre;
