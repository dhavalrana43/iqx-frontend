import React from "react";
import { unstable_cache } from "next/cache";

import {
  getAllBlogsData,
  getAllBlogsIndutries,
  getAllBlogsTopics,
  getAllBLogsType,
} from "@/_service/blogs";
import CustomHead from "@/_components/custom-head/CustomHead";
import { getOurThoughtsData } from "@/_service/our-thoughts";
import { siteConfig } from "@/_config/site";
import FooterCTA from "@/_components/footer-cta/FooterCTA";

import OurThoughtsPage from "./OurThoughtsPage";

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

const getBlogsTopicsCached = unstable_cache(
  getAllBlogsTopics,
  ["blog-topics"],
  {
    revalidate: siteConfig.revalidateTime,
    tags: ["blog-topics"],
  },
);

const getAllIndustriesCached = unstable_cache(
  getAllBlogsIndutries,
  ["blog-industries"],
  {
    revalidate: siteConfig.revalidateTime,
    tags: ["blog-industries"],
  },
);

const getAllBLogsTypesCached = unstable_cache(getAllBLogsType, ["blog-types"], {
  revalidate: siteConfig.revalidateTime,
  tags: ["blog-industries"],
});

export const revalidate = 60;

const OurThoughts = async () => {
  try {
    const blogs = await getBlogDataCached();

    if (!blogs?.data) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <p>No blog posts available at the moment.</p>
        </div>
      );
    }

    const fetchOurThoughtsData = await getOurThoughtsCached();

    const { title, description, heroBanner, details, footerCta } =
      fetchOurThoughtsData?.data;

    const heroBannerData = {
      heroBanner,
      details,
    };

    const allBlogTopics = await getBlogsTopicsCached();

    const allBlogsIndustries = await getAllIndustriesCached();

    const allBlogsTypes = await getAllBLogsTypesCached();

    return (
      <>
        <CustomHead
          description={
            description ??
            "Opportunities are all around us. We just need to know where to look for them. Read more to see the industry insights from iqbusiness."
          }
          title={title ?? "Our thoughts - iqbusiness - The Insights Scoop"}
        />
        <OurThoughtsPage
          blogs={blogs?.data}
          heroBannerData={heroBannerData}
          industries={allBlogsIndustries?.data}
          topics={allBlogTopics?.data}
          types={allBlogsTypes?.data}
        />
        {footerCta && <FooterCTA {...footerCta} />}
      </>
    );
  } catch (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Unable to load blog posts. Please try again later. </p>
        <p>
          {error instanceof Error
            ? error.message
            : "An unknown error occurred."}
        </p>
      </div>
    );
  }
};

export default OurThoughts;
