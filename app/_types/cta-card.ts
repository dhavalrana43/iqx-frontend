export type ctaCardType = {
  details: {
    title?: string;
    subHeading?: string;
    description?: string;
  };
  ctaButton?: {
    text?: string;
    url?: string;
    isExternal?: boolean;
    isOutline?: boolean;
    variant?: {
      Variant?: string;
    };
  };
  image?: {
    url?: string;
    alternativeText?: string;
    height?: number;
    width?: number;
  };
  variant?: {
    Variant?: string;
  };
};
