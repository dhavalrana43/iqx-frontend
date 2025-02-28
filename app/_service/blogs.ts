import { graphqlClient } from "@/_lib/graphql-client";
import { GetAllBlogsResponse } from "@/_types/blogs";

const ALL_BLOGS_QUERY = `
  query GetAllBlogs($offset: Int, $limit: Int) {
    blogs(pagination: { offset: $offset, limit: $limit }) {
      data {
        id
        attributes {
          documentId
          title
          slug
          date
          readingTime
          bannerImage {
            data {
              attributes {
                url
                alternativeText
              }
            }
          }
        }
      }
      meta {
        pagination {
          total
        }
      }
    }
  }
`;

export const getAllBlogsData = async (offset = 0, limit = 9) => {
  try {
    const response = await graphqlClient.request<GetAllBlogsResponse>(
      ALL_BLOGS_QUERY,
      { offset, limit },
    );

    return response.blogs;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    throw error;
  }
};
