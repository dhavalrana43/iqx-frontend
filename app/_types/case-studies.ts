export type caseStudiesType = {
  details?: {
    title?: string;
    subHeading?: string;
    description?: string;
  };
  caseStudiesCard?: Array<{
    image?: {
      url?: string;
      alternativeText?: string;
      height?: number;
      width?: number;
    };
    title?: string;
    description?: string;
  }>;
};
