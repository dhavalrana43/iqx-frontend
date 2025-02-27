import qs from "qs";

import { siteConfig } from "@/_config/site";
import { fetchData } from "@/_data/loaders";
import { commonBlocks } from "@/_service/common-service-components/common-blocks";

const baseUrl = siteConfig.apiUrl;

export const getWhoWeareData = async () => {
  try {
    const url = new URL("/api/who-we-are-page", baseUrl);

    url.search = qs.stringify({
      fields: ["documentId", "title", "description", "slug"],
      populate: {
        theme: {
          populate: "*",
        },
        heroBanner: {
          fields: ["title"],
          populate: {
            image: {
              fields: ["url", "alternativeText", "height", "width"],
            },
          },
        },
        blocks: commonBlocks,

        footerCta: {
          populate: {
            ctaImage: {
              fields: ["url", "alternativeText", "height", "width"],
            },
            details: {
              populate: true,
            },
            ctaButton: {
              populate: "*",
            },
          },
        },
      },
    });

    return await fetchData(url.href);
  } catch (error) {
    throw error;
  }
};
