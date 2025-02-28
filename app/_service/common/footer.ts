export const footerBlock = {
  populate: {
    details: {
      populate: "*",
    },
    ctaImage: {
      fields: ["url", "alternativeText", "height", "width"],
    },
    ctaButton: {
      populate: "*",
    },
  },
};
