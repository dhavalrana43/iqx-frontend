export interface GraduateData {
  documentId: string;
  title: string;
  description: string;
  slug: string;
  theme: {
    data: {
      attributes: {
        mainColor: string;
        secondaryColor: string;
      };
    };
  };
  heroBanner: {
    title: string;
    image: {
      url: string;
      alternativeText?: string;
    };
  };
  blocks: any[];
  footerCta: {
    title: string;
    description: string;
    ctaButton: {
      title: string;
      url: string;
    };
  };
}

export interface GraduateResponse {
  careersGraduate: {
    data: {
      attributes: GraduateData;
    };
  };
}
