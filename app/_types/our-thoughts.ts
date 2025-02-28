export type ourThoughtsType = {
  details?: {
    title?: string;
    subHeading?: string;
    description?: string;
  };
  variant?: {
    Variant?: string;
  };
  theme?: {
    color?: string;
  };
};

export interface OurThoughtsData {
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
  block: {
    details: {
      title?: string;
      subHeading?: string;
      description?: string;
    };
  };
}

export interface OurThoughtsResponse {
  ourThought: {
    data: {
      attributes: OurThoughtsData;
    };
  };
}
