export interface HeaderData {
  documentId: string;
  logoImage: {
    url: string;
    alternativeText?: string;
  };
  navigations: Array<{
    title: string;
    url: string;
    subMenu?: Array<{
      title: string;
      url: string;
    }>;
  }>;
}

export interface HeaderResponse {
  header: {
    data: {
      attributes: HeaderData;
    };
  };
}
