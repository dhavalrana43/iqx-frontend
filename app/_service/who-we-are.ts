import qs from "qs";

import { siteConfig } from "@/_config/site";
import { fetchData } from "@/_data/loaders";

import { footerBlock } from "./common-service-components/footer";

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
        // blocks: commonBlocks,
        blocks: {
          on: {
            "common.leaderships": {
              populate: {
                details: {
                  fields: ["title", "subHeading", "description"],
                },
                leaderships: {
                  populate: {
                    fields: ["name", "designation", "url"],
                    profile: {
                      fields: ["url", "alternativeText", "width", "height"],
                    },
                  },
                },
                variant: {
                  populate: {
                    fields: ["Variant"],
                  },
                },
              },
            },
          },
        },
        footerCta: footerBlock,
      },
    });

    return await fetchData(url.href);
  } catch (error) {
    throw error;
  }
};
