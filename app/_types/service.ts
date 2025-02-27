export type serviceType = {
  details: {
    title?: string;
    subHeading?: string;
    description?: string;
  };
  variant?: {
    Variant?: string;
  };
  Services?: Array<{
    title?: string;
    url?: string;
    image?: {
      url?: string;
      alternativeText?: string;
      height?: number;
      width?: number;
    };
    descriptions?: string;
  }>;
  ctaButton?: {
    text?: string;
    url?: string;
    isExternal?: boolean;
    isOutline?: boolean;
    variant?: {
      Variant?: string;
    };
  };
  theme?: {
    color?: string;
  };
};
