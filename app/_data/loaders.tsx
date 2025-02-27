import qs from "qs";

import { siteConfig } from "@/_config/site";
import { getAuthToken } from "@/_service/auth";

const baseUrl = siteConfig.apiUrl;

export async function fetchData(url: string) {
  const authToken = await siteConfig.apiToken;

  const headers = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
  };

  try {
    const response = await fetch(url, authToken ? headers : {});

    if (response) {
      const data = await response.json();

      return data;
    } else return null;
  } catch (error) {
    throw error; // or return null;
  }
}

export async function postData(url: string, body: any) {
  const authToken = await getAuthToken();

  const headers = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
    body: JSON.stringify(body), // Convert body to JSON
  };

  try {
    const response = await fetch(url, headers);
    const data = await response.json();

    return data;
  } catch (error) {
    throw error; // or return null;
  }
}

export async function getNavigationData() {
  const url = new URL("/api/navigations", baseUrl);

  url.search = qs.stringify({
    fields: ["documentId", "title", "url", "isParent"],
    populate: {
      subMenu: {
        populate: true,
      },
    },
  });

  return await fetchData(url.href);
}

export const getStrapiAssetURI = (image: string | null, download = false) => {
  if (image != null) {
    let url = `${baseUrl}${image}`;

    if (download) {
      url = `${url}?download`;
    }

    return url;
  }

  return null;
};
