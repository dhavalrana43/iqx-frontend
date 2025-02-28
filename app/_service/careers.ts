// app/_service/careers.ts
import { gql } from "graphql-request";

import { graphqlClient } from "@/_lib/graphql-client";
import {
  IMAGE_FRAGMENT,
  FOOTER_CTA_FRAGMENT,
  COMMON_BLOCKS_FRAGMENT,
} from "@/_graphql/fragments";
import { CareersData, CareersResponse } from "@/_types/careers";

const CAREERS_QUERY = gql`
  ${IMAGE_FRAGMENT}
  ${FOOTER_CTA_FRAGMENT}
  ${COMMON_BLOCKS_FRAGMENT}

  query GetCareersPage {
    careersPage {
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

export const fetchCareersData = async (): Promise<CareersData> => {
  try {
    const response =
      await graphqlClient.request<CareersResponse>(CAREERS_QUERY);

    return response.careersPage.data.attributes;
  } catch (error) {
    throw error;
  }
};
