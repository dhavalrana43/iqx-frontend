// app/_service/footer.ts
import { gql } from "graphql-request";

import { graphqlClient } from "@/_lib/graphql-client";
import { IMAGE_FRAGMENT } from "@/_graphql/fragments";
import { FooterData, FooterResponse } from "@/_types/footer";

const FOOTER_QUERY = gql`
  ${IMAGE_FRAGMENT}

  query GetFooter {
    footer {
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
          socialLink {
            title
            url
            icon {
              ...ImageFragment
            }
          }
          navigations {
            title
            links {
              title
              url
            }
          }
        }
      }
    }
  }
`;

export const getFooterData = async (): Promise<FooterData> => {
  try {
    const response = await graphqlClient.request<FooterResponse>(FOOTER_QUERY);

    return response.footer.data.attributes;
  } catch (error) {
    console.error("Footer data fetch error:", error);
    throw error;
  }
};
