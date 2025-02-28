export interface FooterData {
  documentId: string;
  logoImage: {
    url: string;
    alternativeText?: string;
  };
  logo: {
    title: string;
    url: string;
  };
  socialLink: Array<{
    title: string;
    url: string;
    icon: {
      url: string;
      alternativeText?: string;
    };
  }>;
  navigations: Array<{
    title: string;
    links: Array<{
      title: string;
      url: string;
    }>;
  }>;
}

export interface FooterResponse {
  footer: {
    data: {
      attributes: FooterData;
    };
  };
}
