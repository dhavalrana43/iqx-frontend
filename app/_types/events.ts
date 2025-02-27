// app/_types/events.ts
export type arloEventType = {
  EventID: number;
  Name: string;
  Code: string;
  Summary: string;
  StartDateTime: string;
  EndDateTime: string;
  Description: {
    ContentType: string;
    Text: string;
  };
  AdvertisedOffers: {
    OfferID: number;
    IsDiscountOffer: boolean;
    OfferAmount: {
      CurrencyCode: string;
      AmountTaxExclusive: number;
      AmountTaxInclusive: number;
      FormattedAmountTaxExclusive: string;
      FormattedAmountTaxInclusive: string;
      TaxRate: {
        ShortName: string;
        Name: string;
        RatePercent: number;
      };
    };
  }[];
  Sessions: {
    EventID: number;
    Name: string;
    Summary: string;
    StartDateTime: string;
    EndDateTime: string;
    IsFull: boolean;
    Presenters?: {
      PresenterID: number;
      Name: string;
      ViewUri: string;
    }[];
    Location?: {
      Name: string;
      VenueName?: string;
      City?: string;
      Country?: string;
    };
  }[];
  Categories: {
    CategoryID: number;
    Name: string;
  }[];
  Location: {
    Name: string;
    VenueName?: string;
    City?: string;
    Country?: string;
  };
  ViewUri: string;
  RegistrationInfo: {
    RegisterUri: string;
    RegisterMessage: string;
  };
  Credits?: any;
};
