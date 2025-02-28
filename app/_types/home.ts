export interface HomeData {
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
  blocks: any[]; // Replace with specific block types
}

export interface HomeResponse {
  homePage: {
    data: {
      attributes: HomeData;
    };
  };
}
