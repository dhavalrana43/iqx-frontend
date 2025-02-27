export type imageWithTextType = {
  imageLeft?: boolean;
  showVideo?: boolean;
  videoUrl?: string;
  smallImageContainer?: boolean;
  image?: {
    url?: string;
    alternativeText?: string;
    height?: number;
    width?: number;
  };
  Highlight?: any;
  details?: {
    id?: string;
    title?: string;
    string?: string;
    subHeading?: string;
    description?: string;
  };
  variant?: {
    Variant?: string;
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
  theme?: {
    color?: string;
  };
};
