import qs from "qs";

import { siteConfig } from "@/_config/site";
import { fetchData } from "@/_data/loaders";

const baseUrl = siteConfig.apiUrl;

export const getFooterData = async () => {
  try {
    const url = new URL("/api/footer", baseUrl);

    url.search = qs.stringify({
      fields: ["documentId"],
      populate: {
        logoImage: {
          fields: ["url", "alternativeText", "height", "width"],
        },
        logo: {
          populate: "*",
        },
        socialLink: {
          populate: "*",
        },
        navigations: {
          populate: "*",
        },
      },
    });

    return await fetchData(url.href);
  } catch (error) {
    throw error;
  }
};
