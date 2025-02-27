export type faqType = {
  details: {
    title?: string;
    subHeading?: string;
    description?: string;
  };
  faqs: Array<{
    title: string;
    description: string;
    tags?: Array<{
      text?: string;
      url?: string;
      isExternal?: boolean;
      variant?: {
        Variant?: string;
      };
      isOutline?: boolean;
    }>;
  }>;
  variant?: {
    Variant?: string;
  };
  theme?: {
    color?: string;
  };
};
