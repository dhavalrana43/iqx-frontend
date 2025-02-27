export type featureSliderProps = {
  title?: string;
  subTitle?: string;
  description?: Array<{
    title?: string;
    content?: string;
  }>;
  variant?: {
    Variant?: string;
  };
  theme?: {
    color?: string;
  };
};
