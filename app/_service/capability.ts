import { graphqlClient } from "@/_lib/graphql-client";
import { GetAllCapabilitiesResponse } from "@/_types/capability";

const ALL_CAPABILITIES_QUERY = `
  query GetAllCapabilities {
    capabilities {
      data {
        id
        attributes {
          documentId
          title
          slug
          description
          // Include other fields
        }
      }
    }
  }
`;

export const getAllCapabilities = async () => {
  try {
    const response = await graphqlClient.request<GetAllCapabilitiesResponse>(
      ALL_CAPABILITIES_QUERY,
    );

    return response.capabilities.data;
  } catch (error) {
    console.error("Error fetching capabilities:", error);
    throw error;
  }
};
