// app/_service/capability.ts
import { gql } from "graphql-request";

import { graphqlClient } from "@/_lib/graphql-client";
import {
  IMAGE_FRAGMENT,
  FOOTER_CTA_FRAGMENT,
  COMMON_BLOCKS_FRAGMENT,
} from "@/_graphql/fragments";

const CAPABILITY_BY_SLUG_QUERY = gql`
  ${IMAGE_FRAGMENT}
  ${FOOTER_CTA_FRAGMENT}
  ${COMMON_BLOCKS_FRAGMENT}

  query GetCapabilityBySlug($slug: String!) {
    capabilities(filters: { slug: { eq: $slug } }) {
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

const ALL_CAPABILITIES_QUERY = gql`
  ${IMAGE_FRAGMENT}

  query GetAllCapabilities {
    capabilities {
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
        }
      }
    }
  }
`;

export const getCapabilityBySlug = async (slug: string) => {
  try {
    const response = await graphqlClient.request(CAPABILITY_BY_SLUG_QUERY, {
      slug,
    });

    return (response as { capabilities: any }).capabilities;
  } catch (error) {
    throw error;
  }
};

export const getAllCapabilitiesSlugs = async () => {
  try {
    const response = await graphqlClient.request(ALL_CAPABILITIES_QUERY);

    return (response as { capabilities: any }).capabilities;
  } catch (error) {
    throw error;
  }
};
