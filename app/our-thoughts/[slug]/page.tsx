import React from "react";
import { unstable_cache } from "next/cache";

import { getAllBlogsData } from "@/_service/blogs";
import CustomHead from "@/_components/custom-head/CustomHead";
import { siteConfig } from "@/_config/site";
import FooterCTA from "@/_components/footer-cta/FooterCTA";
import { getOurThoughtsData } from "@/_service/our-thoughts";

import OurThoughtsDetailsPage from "./OurThoughtsDetailsPage";

const getBlogDataCached = unstable_cache(getAllBlogsData, ["blog"], {
  revalidate: siteConfig.revalidateTime,
  tags: ["blog"],
});

const getOurThoughtsCached = unstable_cache(
  getOurThoughtsData,
  ["our-thoughts"],
  {
    revalidate: siteConfig.revalidateTime,
    tags: ["our-thoughts"],
  },
);

const OurThoughtsDetails = async ({ params }: any) => {
  const { slug: slug } = await params;
  const fetchBlogsData = await getBlogDataCached();

  let filterData: any[] = [];

  if (slug && fetchBlogsData) {
    filterData = fetchBlogsData?.data?.filter(
      (item: any) => item.slug === slug,
    );
  }

  const fetchOurThoughtsData = await getOurThoughtsCached();

  const { footerCta } = fetchOurThoughtsData?.data;

  return (
    <>
      <CustomHead
        description={
          filterData[0]?.description ? filterData[0]?.description : ""
        }
        title={filterData[0]?.title}
      />
      <OurThoughtsDetailsPage pageData={filterData[0]} />
      {footerCta && <FooterCTA {...footerCta} />}
    </>
  );
};

export default OurThoughtsDetails;
