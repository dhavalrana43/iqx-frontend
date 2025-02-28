// app/_service/graduate.ts
import { gql } from "graphql-request";

import { graphqlClient } from "@/_lib/graphql-client";
import {
  COMMON_BLOCKS_FRAGMENT,
  FOOTER_CTA_FRAGMENT,
  IMAGE_FRAGMENT,
} from "@/_graphql/fragments";

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

export const getGraduateData = async () => {
  try {
    const response = await graphqlClient.request(GRADUATE_QUERY);

    return response.careersGraduate;
  } catch (error) {
    throw error;
  }
};
