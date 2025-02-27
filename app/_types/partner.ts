export type PartnerTypes = {
  details?: {
    title?: string;
    subHeading?: string;
    description?: string;
  };
  logos?: Array<{
    alternativeText?: string;
    url?: string;
    width?: number;
    height?: number;
  }>;
  theme?: {
    color?: string;
  };
  darkMode?: boolean;
};
