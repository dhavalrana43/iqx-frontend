export type factWithTaskType = {
  variant?: {
    Variant?: string;
  };
  content?: {
    id?: string;
    title?: string;
    subHeading?: string;
    description?: string;
  };
  factCard?: {
    id?: string;
    counter1?: string;
    detail1?: string;
    counter2?: string;
    detail2?: string;
    operator1?: string;
    operator2?: string;
    pre1?: string;
    pre2?: string;
  };
  theme?: {
    id?: string;
    color?: string;
  };
};
