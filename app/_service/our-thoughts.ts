import qs from "qs";

import { siteConfig } from "@/_config/site";
import { fetchData } from "@/_data/loaders";

import { footerBlock } from "./common-service-components/footer";

const baseUrl = siteConfig.apiUrl;

export const getOurThoughtsData = async () => {
  try {
    const url = new URL("/api/our-thought", baseUrl);

    url.search = qs.stringify({
      fields: ["title", "description", "slug"],
      populate: {
        theme: {
          populate: "*",
        },
        heroBanner: {
          populate: {
            fields: ["title"],
            image: {
              fields: ["url", "alternativeText", "height", "width"],
            },
          },
        },
        block: {
          populate: {
            details: {
              populate: "*",
            },
            variant: {
              populate: "*",
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
