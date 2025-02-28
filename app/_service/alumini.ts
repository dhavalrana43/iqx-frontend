// app/_service/alumini.ts
import { gql } from "graphql-request";

import { graphqlClient } from "@/_lib/graphql-client";
import {
  COMMON_BLOCKS_FRAGMENT,
  FOOTER_CTA_FRAGMENT,
  IMAGE_FRAGMENT,
} from "@/_graphql/fragments";
import { AluminiData, AluminiResponse } from "@/_types/alumini";

const ALUMINI_QUERY = gql`
  ${IMAGE_FRAGMENT}
  ${FOOTER_CTA_FRAGMENT}
  ${COMMON_BLOCKS_FRAGMENT}

  query GetAluminiPage {
    careersAlumniPage {
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

export const getAluminiData = async (): Promise<AluminiData> => {
  try {
    const response =
      await graphqlClient.request<AluminiResponse>(ALUMINI_QUERY);

    return response.careersAlumniPage.data.attributes;
  } catch (error) {
    throw error;
  }
};
