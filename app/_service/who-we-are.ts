// app/_service/who-we-are.ts
import { gql } from "graphql-request";

import { graphqlClient } from "@/_lib/graphql-client";
import {
  IMAGE_FRAGMENT,
  FOOTER_CTA_FRAGMENT,
  COMMON_BLOCKS_FRAGMENT,
} from "@/_graphql/fragments";
import { WhoWeAreData, WhoWeAreResponse } from "@/_types/who-we-are";

const WHO_WE_ARE_QUERY = gql`
  ${IMAGE_FRAGMENT}
  ${FOOTER_CTA_FRAGMENT}
  ${COMMON_BLOCKS_FRAGMENT}

  query GetWhoWeArePage {
    whoWeArePage {
      data {
        attributes {
          documentId
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
          blocks {
            ...CommonBlocksFragment
          }
          footerCta {
            ...FooterCtaFragment
          }
        }
      }
    }
  }
`;

export const getWhoWeareData = async (): Promise<WhoWeAreData> => {
  try {
    const response =
      await graphqlClient.request<WhoWeAreResponse>(WHO_WE_ARE_QUERY);

    return response.whoWeArePage.data.attributes;
  } catch (error) {
    console.error("Error fetching who-we-are data:", error);
    throw error;
  }
};
