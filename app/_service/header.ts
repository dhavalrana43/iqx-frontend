import qs from "qs";

import { siteConfig } from "@/_config/site";
import { fetchData } from "@/_data/loaders";

const baseUrl = siteConfig.apiUrl;

export const getHeaderData = async () => {
  try {
    const url = new URL("/api/header", baseUrl);

    url.search = qs.stringify({
      fields: ["documentId"],
      populate: {
        logoImage: {
          fields: ["url", "alternativeText", "height", "width"],
        },
        logo: {
          populate: "*",
        },
        favicon: {
          fields: ["url", "alternativeText", "height", "width"],
        },
        ctaButton: {
          populate: "*",
        },
        navigations: {
          fields: ["title", "url"],
          populate: {
            subMenu: {
              populate: true,
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
