// app\_service\home.ts
import qs from "qs";

import { siteConfig } from "@/_config/site";
import { fetchData } from "@/_data/loaders";

import { footerBlock } from "./common/footer";
import { getFilteredBlocks } from "./utils";

const baseUrl = siteConfig.apiUrl;

export const getHomeData = async () => {
  try {
    // First get minimal data to identify components
    const initialUrl = new URL("/api/home-page", baseUrl);

    initialUrl.search = qs.stringify({
      fields: ["blocks"],
      populate: { blocks: { fields: ["__component"] } },
    });

    const initialData = await fetchData(initialUrl.href);

    // Extract required components
    const components =
      initialData?.data?.blocks
        ?.map((block: any) => block.__component)
        ?.filter((c: string) => c) || [];

    // Create filtered populate config
    const filteredBlocks = getFilteredBlocks(components);

    // Make full request with filtered populate
    const url = new URL("/api/home-page", baseUrl);

    url.search = qs.stringify({
      fields: ["documentId", "title", "description", "slug"],
      populate: {
        theme: { populate: "*" },
        heroBanner: { populate: { image: { fields: ["url"] } } },
        blocks: filteredBlocks,
        footerCta: footerBlock,
      },
    });

    return await fetchData(url.href);
  } catch (error) {
    throw error;
  }
};
