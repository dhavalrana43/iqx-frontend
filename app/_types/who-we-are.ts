export interface WhoWeAreData {
  documentId: string;
  title: string;
  description: string;
  slug: string;
  heroBanner: {
    title: string;
    image: {
      url: string;
      alternativeText?: string;
    };
  };
  blocks: Array<{
    __component: string;
    // Add specific block types if available
  }>;
  theme: {
    data: {
      attributes: {
        mainColor: string;
        secondaryColor: string;
      };
    };
  };
  footerCta: {
    title: string;
    description: string;
    ctaButton: {
      title: string;
      url: string;
    };
  };
}

export interface WhoWeAreResponse {
  whoWeArePage: {
    data: {
      attributes: WhoWeAreData;
    };
  };
}
