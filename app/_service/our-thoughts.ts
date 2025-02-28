// app/_service/our-thoughts.ts
import { gql } from "graphql-request";

import { graphqlClient } from "@/_lib/graphql-client";
import {
  IMAGE_FRAGMENT,
  FOOTER_CTA_FRAGMENT,
  DETAILS_FRAGMENT,
  VARIANT_FRAGMENT,
} from "@/_graphql/fragments";

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

export const getOurThoughtsData = async () => {
  try {
    const response = await graphqlClient.request(OUR_THOUGHTS_QUERY);

    return (response as { ourThought: any }).ourThought;
  } catch (error) {
    throw error;
  }
};
