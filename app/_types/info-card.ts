export type infoCardType = {
  details?: {
    title?: string;
    subHeading?: string;
    description?: string;
  };
  infoList?: Array<{
    description?: string;
  }>;
  variant?: {
    Variant?: string;
  };
};
