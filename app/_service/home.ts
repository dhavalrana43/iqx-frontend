// app\_service\home.ts

import qs from "qs";

import { siteConfig } from "@/_config/site";
import { fetchData } from "@/_data/loaders";

import { footerBlock } from "./common/footer";

const baseUrl = siteConfig.apiUrl;

export const getHomeData = async () => {
  try {
    const url = new URL("/api/home-page", baseUrl);

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
        blocks: true,
        footerCta: footerBlock,
      },
    });

    return await fetchData(url.href);
  } catch (error) {
    throw error;
  }
};
