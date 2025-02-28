// app/_service/auth.ts

import { siteConfig } from "@/_config/site";

const baseUrl = siteConfig.apiUrl;

// For login mutation, we'll use standard REST since Strapi's GraphQL doesn't expose auth endpoints
export async function getAuthToken() {
  const url = new URL("/api/auth/local", baseUrl);
  const credentials = {
    identifier: "admin", // Your username
    password: "Maven@123", // Your password
  };

  const response = await fetch(url.href, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });

  const data = await response.json();

  return data.jwt; // Return the JWT token
}
