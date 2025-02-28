import qs from "qs";

import { siteConfig } from "@/_config/site";
import { fetchData } from "@/_data/loaders";
import { commonBlocks } from "@/_service/common/common-blocks";

import { footerBlock } from "./common/footer";

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
        footerCta: footerBlock,
      },
    });

    return await fetchData(url.href);
  } catch (error) {
    throw error;
  }
};
