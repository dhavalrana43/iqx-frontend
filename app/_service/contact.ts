import qs from "qs";

import { siteConfig } from "@/_config/site";
import { fetchData, postData } from "@/_data/loaders";

import { getAuthToken } from "./auth";
import { footerBlock } from "./common-service-components/footer";

const baseUrl = siteConfig.apiUrl;

export const getContactData = async () => {
  try {
    const url = new URL("/api/contact-page", baseUrl);

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
        contactForm: {
          populate: {
            fields: ["documentId"],
            details: {
              populate: "*",
            },
            form: {
              populate: {
                formFields: {
                  on: {
                    "forms.dropdown": {
                      populate: ["options"],
                    },
                    "forms.input": {
                      populate: "*",
                    },
                    "forms.textarea": {
                      populate: "*",
                    },
                  },
                },
              },
            },
            variant: {
              populate: "*",
            },
            buttonVarient: {
              populate: "*",
            },

            image: {
              populate: {
                fields: ["url", "alternativeText", "height", "width"],
              },
            },
          },
        },
        contactInfo: {
          fields: ["*"],
          populate: {
            contact: {
              fields: ["*"],
              populate: {
                contactLink: {
                  fields: ["*"],
                  populate: ["icon"],
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

export const saveContactFormData = async (data: any) => {
  const authToken = await getAuthToken();

  if (!authToken) throw new Error("No auth token found");

  try {
    const url = new URL("/api/inquiries", baseUrl);

    const response = await postData(url.href, {
      key: data.key,
      origin: data.origin,
      title: data.title,
      data,
    });

    return response;
  } catch (error) {
    throw error;
  }
};
