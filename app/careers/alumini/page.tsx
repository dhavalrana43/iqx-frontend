import React from "react";
import { unstable_cache } from "next/cache";

import { siteConfig } from "@/_config/site";
import { getAluminiData } from "@/_service/alumini";
import CustomHead from "@/_components/custom-head/CustomHead";
import FooterCTA from "@/_components/footer-cta/FooterCTA";

import AluminiPage from "./AluminiPage";

const Alumini = async () => {
  const getAluminiDataCached = unstable_cache(getAluminiData, ["alumini"], {
    revalidate: siteConfig.revalidateTime,
    tags: ["alumini"],
  });
  const fetchAluminiData = await getAluminiDataCached();

  return (
    <>
      <CustomHead
        description={
          fetchAluminiData?.data?.description
            ? fetchAluminiData?.data?.description
            : ""
        }
        title={fetchAluminiData?.data?.title}
      />
      <AluminiPage pageData={fetchAluminiData?.data} />
      <FooterCTA {...fetchAluminiData?.data?.footerCta} />
    </>
  );
};

export default Alumini;
