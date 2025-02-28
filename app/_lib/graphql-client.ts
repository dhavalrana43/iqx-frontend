// app/_lib/graphql-client.ts
import { GraphQLClient } from "graphql-request";

import { siteConfig } from "@/_config/site";
import { getAuthToken } from "@/_service/auth";

const graphqlEndpoint = `${siteConfig.apiUrl}/graphql`;

export const graphqlClient = new GraphQLClient(graphqlEndpoint, {
  headers: {},
});

// Function to include auth token when needed
export const getAuthenticatedClient = async () => {
  const token = await getAuthToken(); // Your existing auth function

  return new GraphQLClient(graphqlEndpoint, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
