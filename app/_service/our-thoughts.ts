// app/_service/our-thoughts.ts
import { gql } from "graphql-request";

import { graphqlClient } from "@/_lib/graphql-client";
import {
  IMAGE_FRAGMENT,
  FOOTER_CTA_FRAGMENT,
  DETAILS_FRAGMENT,
  VARIANT_FRAGMENT,
} from "@/_graphql/fragments";
import { OurThoughtsData, OurThoughtsResponse } from "@/_types/our-thoughts";

const OUR_THOUGHTS_QUERY = gql`
  ${IMAGE_FRAGMENT}
  ${FOOTER_CTA_FRAGMENT}
  ${DETAILS_FRAGMENT}
  ${VARIANT_FRAGMENT}

  query GetOurThoughtsPage {
    ourThought {
      data {
        attributes {
          title
          description
          slug
          theme {
            data {
              attributes {
                mainColor
                secondaryColor
              }
            }
          }
          heroBanner {
            title
            image {
              ...ImageFragment
            }
          }
          block {
            details {
              ...DetailsFragment
            }
            variant {
              ...VariantFragment
            }
          }
          footerCta {
            ...FooterCtaFragment
          }
        }
      }
    }
  }
`;

export const getOurThoughtsData = async (): Promise<OurThoughtsData> => {
  try {
    const response =
      await graphqlClient.request<OurThoughtsResponse>(OUR_THOUGHTS_QUERY);

    return response.ourThought.data.attributes;
  } catch (error) {
    throw error;
  }
};
