import React from "react";
import { unstable_cache } from "next/cache";

import { getContactData } from "@/_service/contact";
import CustomHead from "@/_components/custom-head/CustomHead";
import { siteConfig } from "@/_config/site";
import FooterCTA from "@/_components/footer-cta/FooterCTA";

import ContactUsPage from "./ContactUsPage";

const getContactDataCached = unstable_cache(getContactData, ["contact-page"], {
  revalidate: siteConfig.revalidateTime,
  tags: ["contact-page"],
});

const Contact = async () => {
  const fetchContactUsData = await getContactDataCached();

  return (
    <>
      <CustomHead
        description={
          fetchContactUsData?.data?.description
            ? fetchContactUsData?.data?.description
            : ""
        }
        title={fetchContactUsData?.data?.title}
      />
      <ContactUsPage {...fetchContactUsData?.data} />
      {fetchContactUsData?.data?.footerCta && (
        <FooterCTA {...fetchContactUsData?.data?.footerCta} />
      )}
    </>
  );
};

export default Contact;
