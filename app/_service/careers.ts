import qs from "qs";

import { siteConfig } from "@/_config/site";
import { fetchData } from "@/_data/loaders";

import { commonBlocks } from "./common/common-blocks";
import { footerBlock } from "./common/footer";

const baseUrl = siteConfig.apiUrl;

export const fetchCareersData = async () => {
  try {
    const url = new URL("/api/careers-page", baseUrl);

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
        footerCta: footerBlock,
      },
    });

    return await fetchData(url.href);
  } catch (error) {
    throw error;
  }
};
