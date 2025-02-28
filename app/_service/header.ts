// app/_service/header.ts
import { gql } from "graphql-request";

import { graphqlClient } from "@/_lib/graphql-client";
import { IMAGE_FRAGMENT } from "@/_graphql/fragments";
import { HeaderData, HeaderResponse } from "@/_types/header";

const HEADER_QUERY = gql`
  ${IMAGE_FRAGMENT}

  query GetHeader {
    header {
      data {
        attributes {
          documentId
          logoImage {
            ...ImageFragment
          }
          logo {
            title
            url
          }
          favicon {
            ...ImageFragment
          }
          ctaButton {
            title
            url
            variant
            target
          }
          navigations {
            title
            url
            subMenu {
              title
              url
            }
          }
        }
      }
    }
  }
`;

export const getHeaderData = async (): Promise<HeaderData> => {
  try {
    const response = await graphqlClient.request<HeaderResponse>(HEADER_QUERY);

    return response.header.data.attributes;
  } catch (error) {
    throw error;
  }
};
