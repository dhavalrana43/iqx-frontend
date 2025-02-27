import axios from "axios";

import { siteConfig } from "@/_config/site";

const baseUrl = siteConfig.apiUrl;

// Function to generate JWT token
export async function getAuthToken() {
  const url = new URL("/api/auth/local", baseUrl);
  const credentials = {
    identifier: "admin", // Your username
    password: "Maven@123", // Your password
  };

  const response = await axios.post(url.href, credentials);

  return response.data.jwt; // Return the JWT token
}
