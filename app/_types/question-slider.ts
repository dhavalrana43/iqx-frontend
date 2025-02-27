export type questionSliderType = {
  details?: {
    title?: string;
    subHeading?: string;
    description?: string;
  };
  question?: Array<{
    description?: string;
  }>;
  variant?: {
    Variant?: string;
  };
  theme?: {
    color?: string;
  };
};
