// app/_service/blogs.ts
import { gql } from "graphql-request";

import { graphqlClient } from "@/_lib/graphql-client";
import { IMAGE_FRAGMENT } from "@/_graphql/fragments";

const ALL_BLOGS_QUERY = gql`
  ${IMAGE_FRAGMENT}

  query GetAllBlogs($offset: Int!, $limit: Int!) {
    blogs(sort: ["date:desc"], pagination: { start: $offset, limit: $limit }) {
      data {
        id
        attributes {
          documentId
          title
          author
          date
          readingTime
          content
          slug
          bannerImage {
            ...ImageFragment
          }
          topics {
            data {
              attributes {
                name
              }
            }
          }
          industries {
            data {
              attributes {
                name
              }
            }
          }
          types {
            data {
              attributes {
                name
              }
            }
          }
        }
      }
      meta {
        pagination {
          total
          pageCount
          page
          pageSize
        }
      }
    }
  }
`;

const LATEST_BLOGS_QUERY = gql`
  ${IMAGE_FRAGMENT}

  query GetLatestBlogs($limit: Int!) {
    blogs(sort: ["date:desc"], pagination: { limit: $limit }) {
      data {
        id
        attributes {
          documentId
          title
          author
          date
          readingTime
          content
          slug
          bannerImage {
            ...ImageFragment
          }
        }
      }
    }
  }
`;

const BLOG_BY_ID_QUERY = gql`
  ${IMAGE_FRAGMENT}

  query GetBlogById($id: ID!) {
    blog(id: $id) {
      data {
        attributes {
          documentId
          title
          author
          date
          readingTime
          content
          bannerImage {
            ...ImageFragment
          }
        }
      }
    }
  }
`;

const TOPICS_QUERY = gql`
  query GetAllTopics {
    topics {
      data {
        attributes {
          name
        }
      }
    }
  }
`;

const INDUSTRIES_QUERY = gql`
  query GetAllIndustries {
    industries {
      data {
        attributes {
          name
        }
      }
    }
  }
`;

const TYPES_QUERY = gql`
  query GetAllTypes {
    types {
      data {
        attributes {
          name
        }
      }
    }
  }
`;

export const getAllBlogsData = async (offset = 0, limit = 9) => {
  try {
    const response = await graphqlClient.request(ALL_BLOGS_QUERY, {
      offset,
      limit,
    });

    return (response as { blogs: any }).blogs;
  } catch (error) {
    throw error;
  }
};

export const getLatestBlogs = async (limit = 6) => {
  try {
    const response = await graphqlClient.request(LATEST_BLOGS_QUERY, { limit });

    return (response as { blogs: any }).blogs;
  } catch (error) {
    throw error;
  }
};

export const getBlogDataById = async (documentId: string) => {
  try {
    const response = await graphqlClient.request(BLOG_BY_ID_QUERY, {
      id: documentId,
    });

    return (response as { blog: any }).blog.data
      ? (response as { blog: any }).blog.data.attributes
      : null;
  } catch (error) {
    throw error;
  }
};

export const getAllBlogsTopics = async () => {
  try {
    const response = await graphqlClient.request(TOPICS_QUERY);

    return (response as { topics: any }).topics;
  } catch (error) {
    throw error;
  }
};

export const getAllBlogsIndutries = async () => {
  try {
    const response = await graphqlClient.request(INDUSTRIES_QUERY);

    return (response as { industries: any }).industries;
  } catch (error) {
    throw error;
  }
};

export const getAllBLogsType = async () => {
  try {
    const response = await graphqlClient.request(TYPES_QUERY);

    return (response as { types: any }).types;
  } catch (error) {
    throw error;
  }
};
