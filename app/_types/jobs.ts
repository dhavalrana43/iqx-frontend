export interface JobSearchData {
  title: string;
  description: string;
  slug: string;
  theme: {
    data: {
      attributes: {
        mainColor: string;
        secondaryColor: string;
      };
    };
  };
  heroBanner: {
    title: string;
    image: {
      url: string;
      alternativeText?: string;
    };
  };
  footerCta: {
    title: string;
    description: string;
    ctaButton: {
      title: string;
      url: string;
    };
  };
}

export interface JobSearchResponse {
  jobSearchPage: {
    data: {
      attributes: JobSearchData;
    };
  };
}

export interface JobData {
  Id: string;
  JobTitle: string;
  CityName: string;
  BusinessUnitName: string;
  DivisionName: string;
  Address1: string;
  ContractLength: boolean;
  PublishInternalStartDate: string;
  ClosedDate: string;
  Description: string;
  MinimumRequirements: string;
  Responsibilities: string;
  PersonalQualifications: string;
}
