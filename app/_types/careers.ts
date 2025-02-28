export interface CareersData {
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

export interface CareersResponse {
  careersPage: {
    data: {
      attributes: CareersData;
    };
  };
}
