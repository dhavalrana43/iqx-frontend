export type processType = {
  details?: {
    title?: string;
    subHeading?: string;
    description?: string;
  };
  process?: Array<{
    title?: string;
    description?: string;
  }>;
  variant?: {
    Variant?: string;
  };
  theme?: {
    color?: string;
  };
};
