export type featureSectionType = {
  details?: {
    title?: string;
    subHeading?: string;
    description?: string;
  };
  fullWidth?: boolean;
  themeColor?: boolean;
  features?: Array<{
    title?: string;
    subTitle?: string;
    description?: string;
    image?: {
      url?: string;
      alternativeText?: string;
      height?: number;
      width?: number;
    };
    url?: string;
    tags?: Array<{
      text?: string;
      url?: string;
      isExternal?: boolean;
      variant?: string;
      isOutline?: boolean;
    }>;
  }>;
  theme?: {
    color?: string;
  };
  variant?: {
    Variant?: string;
  };
};
