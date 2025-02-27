import qs from "qs";

import { siteConfig } from "@/_config/site";
import { fetchData } from "@/_data/loaders";

const baseUrl = siteConfig.apiUrl;

export const fetchCareersData = async () => {
  try {
    const url = new URL("/api/careers-page", baseUrl);

    url.search = qs.stringify({
      fields: ["documentId", "title", "description", "slug"],
      populate: {
        heroBanner: {
          populate: {
            image: {
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
        blocks: {
          on: {
            "common.full-text": {
              populate: {
                details: {
                  populate: true,
                },
                ctaButton: {
                  populate: "*",
                },
                variant: {
                  populate: "*",
                },
              },
            },
            "common.image-with-text": {
              populate: {
                image: {
                  fields: ["url", "alternativeText", "height", "width"],
                },
                details: {
                  populate: true,
                },
                ctaButton: {
                  populate: "*",
                },
                fields: ["imageLeft"],
                variant: {
                  populate: "*",
                },
              },
            },
            "common.video-cta": {
              populate: {
                details: {
                  populate: true,
                },
                fields: ["videoUrl"],
                ctaButton: {
                  populate: "*",
                },
                variant: {
                  populate: "*",
                },
              },
            },
            "common.testimonials": {
              populate: {
                fields: ["title"],
                testimonial: {
                  populate: true,
                },
                variant: {
                  populate: "*",
                },
              },
            },
            "common.services": {
              populate: {
                details: {
                  populate: "*",
                },
                variant: {
                  populate: "*",
                },
                Services: {
                  populate: "*",
                },
              },
            },
            "common.questions-slider": {
              populate: {
                details: {
                  populate: "*",
                },
                question: {
                  populate: "*",
                },
                variant: {
                  populate: "*",
                },
              },
            },
            "common.partners": {
              populate: {
                details: {
                  populate: "*",
                },
                ctaButton: {
                  populate: "*",
                },
                logos: {
                  populate: {
                    fields: ["url", "alternativeText", "width", "height"],
                  },
                },
                fields: ["darkMode"],
              },
            },
            "common.facts": {
              populate: {
                details: {
                  populate: "*",
                },
                factCards: {
                  populate: "*",
                },
                variant: {
                  populate: "*",
                },
              },
            },
            "common.cta-card": {
              populate: {
                details: {
                  populate: "*",
                },
                ctaButton: {
                  populate: "*",
                },
                image: {
                  fields: ["url", "alternativeText", "height", "width"],
                },
                variant: {
                  populate: "*",
                },
              },
            },
            "common.case-studies": {
              populate: {
                details: {
                  populate: "*",
                },
                caseStudiesCard: {
                  populate: "*",
                },
              },
            },
            "common.faqs": {
              populate: {
                details: {
                  populate: "*",
                },
                faqs: {
                  populate: "*",
                },
                variant: {
                  populate: "*",
                },
              },
            },
            "common.our-thoughts": {
              populate: {
                details: {
                  populate: "*",
                },
                variant: {
                  populate: "*",
                },
              },
            },
            "common.leaderships": {
              populate: {
                details: {
                  populate: "*",
                },
                leaderships: {
                  populate: "*",
                },
                variant: {
                  populate: "*",
                },
              },
            },
            "common.help-info": {
              populate: {
                details: {
                  populate: "*",
                },
                infoList: {
                  populate: "*",
                },
                variant: {
                  populate: "*",
                },
              },
            },
            "common.timeline": {
              populate: {
                details: {
                  populate: "*",
                },
                timelines: {
                  populate: "*",
                },
                variant: {
                  populate: "*",
                },
              },
            },
            "common.feature-slider": {
              fields: ["title", "subTitle"],
              populate: {
                description: {
                  populate: "*",
                },
                variant: {
                  populate: "*",
                },
              },
            },
            "common.features-section": {
              fields: ["fullWidth", "themeColor"],
              populate: {
                details: {
                  populate: "*",
                },
                features: {
                  populate: "*",
                },
                variant: {
                  populate: "*",
                },
              },
            },
            "common.form-section": {
              populate: {
                fields: ["documentId"],
                details: {
                  populate: "*",
                },
                form: {
                  populate: "*",
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
            "common.process": {
              populate: {
                details: {
                  populate: "*",
                },
                process: {
                  populate: "*",
                },
                variant: {
                  populate: "*",
                },
              },
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
