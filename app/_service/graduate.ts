// app/_service/graduate.ts
import { gql } from "graphql-request";

import { graphqlClient } from "@/_lib/graphql-client";
import {
  COMMON_BLOCKS_FRAGMENT,
  FOOTER_CTA_FRAGMENT,
  IMAGE_FRAGMENT,
} from "@/_graphql/fragments";
import { GraduateData, GraduateResponse } from "@/_types/graduate";

const GRADUATE_QUERY = gql`
  ${IMAGE_FRAGMENT}
  ${FOOTER_CTA_FRAGMENT}
  ${COMMON_BLOCKS_FRAGMENT}

  query GetGraduatePage {
    careersGraduate {
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

export const getGraduateData = async (): Promise<GraduateData> => {
  try {
    const response =
      await graphqlClient.request<GraduateResponse>(GRADUATE_QUERY);

    return response.careersGraduate.data.attributes;
  } catch (error) {
    console.error("Graduate data fetch error:", error);
    throw error;
  }
};
