export type leadershipType = {
  details?: {
    title?: string;
    subHeading?: string;
    description?: string;
  };
  leaderships?: Array<{
    name?: string;
    designation?: string;
    url?: string;
    profile?: any;
  }>;
  variant?: {
    Variant?: string;
  };
};
