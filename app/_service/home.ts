// app/_service/home.ts
import { gql } from "graphql-request";

import { graphqlClient } from "@/_lib/graphql-client";
import {
  IMAGE_FRAGMENT,
  FOOTER_CTA_FRAGMENT,
  COMMON_BLOCKS_FRAGMENT,
} from "@/_graphql/fragments";
import { HomeData, HomeResponse } from "@/_types/home";

const HOME_QUERY = gql`
  ${IMAGE_FRAGMENT}
  ${FOOTER_CTA_FRAGMENT}
  ${COMMON_BLOCKS_FRAGMENT}

  query GetHomePage {
    homePage {
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

export const getHomeData = async (): Promise<HomeData> => {
  try {
    const response = await graphqlClient.request<HomeResponse>(HOME_QUERY);

    return response.homePage.data.attributes;
  } catch (error) {
    throw error;
  }
};
