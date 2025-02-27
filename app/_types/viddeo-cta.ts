export type videoCtaType = {
  details: {
    title?: string;
    subHeading?: string;
    description?: string;
  };
  videoUrl?: string;
  ctaButton?: {
    text?: string;
    url?: string;
    isExternal?: boolean;
    isOutline?: boolean;
    variant?: {
      Variant?: string;
    };
  };
  variant?: {
    Variant?: string;
  };
  isFullWidth?: boolean;
  theme?: {
    color?: string;
  };
};
