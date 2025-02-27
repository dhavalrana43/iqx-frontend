import qs from "qs";

import { siteConfig } from "@/_config/site";
import { fetchData } from "@/_data/loaders";

const baseUrl = siteConfig.apiUrl;

export const getAllBlogsData = async (offset = 0, limit = 9) => {
  try {
    const url = new URL("/api/blogs", baseUrl);

    url.search = qs.stringify({
      fields: [
        "documentId",
        "title",
        "author",
        "date",
        "readingTime",
        "content",
        "slug",
      ],
      populate: {
        bannerImage: {
          fields: ["url", "alternativeText", "height", "width"],
        },
        topics: {
          fields: ["name"],
        },
        industries: {
          fields: ["name"],
        },
        types: {
          fields: ["name"],
        },
      },
      sort: ["date:desc"], // Sort by date in descending order
      pagination: {
        start: offset,
        limit,
      },
    });

    return await fetchData(url.href);
  } catch (error) {
    throw error;
  }
};

// For the OurThoughtsSlider component, create a specific function
export const getLatestBlogs = async (limit = 6) => {
  try {
    const url = new URL("/api/blogs", baseUrl);

    url.search = qs.stringify({
      fields: [
        "documentId",
        "title",
        "author",
        "date",
        "readingTime",
        "content",
        "slug",
      ],
      populate: {
        bannerImage: {
          fields: ["url", "alternativeText", "height", "width"],
        },
      },
      sort: ["date:desc"], // Sort by date in descending order
      pagination: {
        start: 0,
        limit,
      },
    });

    return await fetchData(url.href);
  } catch (error) {
    throw error;
  }
};

export const getBlogDataById = async (documentId: string) => {
  try {
    const url = new URL(`/api/blogs/${documentId}`, baseUrl);

    url.search = qs.stringify({
      fields: [
        "documentId",
        "title",
        "author",
        "date",
        "readingTime",
        "content",
      ],
      populate: {
        bannerImage: {
          fields: ["url", "alternativeText", "height", "width"],
        },
      },
    });

    const response = await fetchData(url.href);

    if (response.data) {
      return response.data;
    }

    return null;
  } catch (error) {
    throw error;
  }
};

export const getAllBlogsTopics = async () => {
  try {
    const url = new URL(`/api/topics`, baseUrl);

    url.search = qs.stringify({
      fields: ["name"],
    });

    return await fetchData(url.href);
  } catch (error) {
    throw error;
  }
};

export const getAllBlogsIndutries = async () => {
  try {
    const url = new URL(`/api/industries`, baseUrl);

    url.search = qs.stringify({
      fields: ["name"],
    });

    return await fetchData(url.href);
  } catch (error) {
    throw error;
  }
};

export const getAllBLogsType = async () => {
  try {
    const url = new URL(`/api/types`, baseUrl);

    url.search = qs.stringify({
      fields: ["name"],
    });

    return await fetchData(url.href);
  } catch (error) {
    throw error;
  }
};
