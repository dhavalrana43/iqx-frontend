export type contactUsFormType = {
  details?: {
    title?: string;
    subHeading?: string;
    description?: string;
  };
  form?: {
    documentId?: string;
    formEmail?: string;
    name?: string;
    title?: string;
    formFields?: Array<{
      __component?: string;
      label?: string;
      placeholder?: string;
      helperText?: string;
      required?: string;
      fullWidth?: string;
      errorMessage?: string;
      options?: Array<{
        id?: string;
        description?: string;
      }>;
    }>;
  };
  variant?: {
    Variant?: string;
  };
  image?: {
    url?: string;
    alternativeText?: string;
    height?: number;
    width?: number;
  };
  buttonVarient?: {
    Variant?: string;
  };
};
