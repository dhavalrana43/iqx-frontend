export const commonBlocks = {
  on: {
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
    "common.facts-with-text": {
      populate: {
        details: {
          populate: "*",
        },
        facts: {
          populate: "*",
        },
        variant: {
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
      fields: ["fullWidth", "themeColor", "bigSize"],
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
        fields: [
          "imageLeft",
          "showVideo",
          "videoUrl",
          "Highlight",
          "smallImageContainer",
        ],
        variant: {
          populate: "*",
        },
      },
    },
    // "common.leaderships": {
    //   populate: {
    //     details: {
    //       populate: "*",
    //     },
    //     leaderships: {
    //       populate: "*",
    //     },
    //     variant: {
    //       populate: "*",
    //     },
    //   },
    // },
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
    // "common.process": {
    //   populate: {
    //     details: {
    //       populate: "*",
    //     },
    //     process: {
    //       populate: "*",
    //     },
    //     variant: {
    //       populate: "*",
    //     },
    //   },
    // },
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
    "common.testimonials": {
      populate: {
        fields: ["title", "description"],
        testimonial: {
          populate: true,
        },
        variant: {
          populate: "*",
        },
      },
    },
    // "common.timeline": {
    //   populate: {
    //     details: {
    //       populate: "*",
    //     },
    //     timelines: {
    //       populate: "*",
    //     },
    //     variant: {
    //       populate: "*",
    //     },
    //   },
    // },
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
  },
};
