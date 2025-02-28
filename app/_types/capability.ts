export interface CapabilityData {
  documentId: string;
  title: string;
  description: string;
  slug: string;
  theme?: {
    color?: string;
  };
  heroBanner?: {
    image?: {
      url: string;
      alternativeText?: string;
    };
    details?: {
      [key: string]: any;
    };
    ctaButton?: any;
  };
  blocks?: Array<{
    __component: string;
    [key: string]: any;
  }>;
}

export interface CapabilityResponse {
  data: CapabilityData[];
}

export interface CapabilityPageProps {
  params: {
    capability: string;
  };
}
