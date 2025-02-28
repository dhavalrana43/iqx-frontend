import qs from "qs";

import { siteConfig } from "@/_config/site";
import { fetchData } from "@/_data/loaders";

import { commonBlocks } from "./common/common-blocks";
import { footerBlock } from "./common/footer";

const baseUrl = siteConfig.apiUrl;

export const getCapabilityBySlug = async (slug: string) => {
  try {
    const url = new URL("/api/capabilities", baseUrl);

    url.search = qs.stringify({
      filters: {
        slug: {
          $eq: slug,
        },
      },
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

// Function to get all capabilities (minimal data for listing)
export const getAllCapabilitiesSlugs = async () => {
  try {
    const url = new URL("/api/capabilities", baseUrl);

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
      },
    });

    return await fetchData(url.href);
  } catch (error) {
    throw error;
  }
};
