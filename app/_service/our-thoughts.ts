import qs from "qs";

import { siteConfig } from "@/_config/site";
import { fetchData } from "@/_data/loaders";

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
