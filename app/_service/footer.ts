// app/_service/footer.ts
import { gql } from "graphql-request";

import { graphqlClient } from "@/_lib/graphql-client";
import { IMAGE_FRAGMENT } from "@/_graphql/fragments";

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

export const getFooterData = async () => {
  try {
    const response = await graphqlClient.request(FOOTER_QUERY);

    return (response as { footer: any }).footer;
  } catch (error) {
    throw error;
  }
};
