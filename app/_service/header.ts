// app/_service/header.ts
import { gql } from "graphql-request";

import { graphqlClient } from "@/_lib/graphql-client";
import { IMAGE_FRAGMENT } from "@/_graphql/fragments";

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

export const getHeaderData = async () => {
  try {
    const response = await graphqlClient.request(HEADER_QUERY);

    return response.header;
  } catch (error) {
    throw error;
  }
};
