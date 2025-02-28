export interface AluminiData {
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
  blocks: any[]; // Replace with specific block types if available
}

export interface AluminiResponse {
  careersAlumniPage: {
    data: {
      attributes: AluminiData;
    };
  };
}
