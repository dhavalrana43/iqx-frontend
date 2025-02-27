import React from "react";
import { unstable_cache } from "next/cache";

import CustomHead from "@/_components/custom-head/CustomHead";
import { getAllCapabilitiesSlugs } from "@/_service/capability";
import { siteConfig } from "@/_config/site";
import FooterCTA from "@/_components/footer-cta/FooterCTA";

import CapabilitiesPage from "./CapabilitiesPage";

const getCapabilitiesCached = unstable_cache(
  getAllCapabilitiesSlugs,
  ["capabilities"],
  {
    revalidate: siteConfig.revalidateTime,
    tags: ["capabilities"],
  },
);

const Capabilities = async () => {
  const capabilites = await getCapabilitiesCached();

  return (
    <>
      <CustomHead
        description={capabilites.data.description}
        title={capabilites.data.title}
      />
      <CapabilitiesPage pageData={capabilites.data} />
      {capabilites.data.footerCta && (
        <FooterCTA {...capabilites?.data.footerCta} />
      )}
    </>
  );
};

export default Capabilities;
