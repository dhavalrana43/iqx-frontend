export type FactType = {
  details?: {
    subHeading?: string;
    title?: string;
    description?: string;
  };
  factCards?: Array<{
    pre1?: string;
    counter1?: string;
    detail1?: string;
    pre2?: string;
    counter2?: string;
    detail2?: string;
    variant?: {
      Variant?: string;
    };
  }>;
  variant?: {
    Variant?: string;
  };
  theme?: {
    color?: string;
  };
};
