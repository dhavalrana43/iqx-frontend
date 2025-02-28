// app/_service/jobs.ts
import { gql } from "graphql-request";

import { graphqlClient } from "@/_lib/graphql-client";
import { IMAGE_FRAGMENT, FOOTER_CTA_FRAGMENT } from "@/_graphql/fragments";

const JOB_SEARCH_QUERY = gql`
  ${IMAGE_FRAGMENT}
  ${FOOTER_CTA_FRAGMENT}

  query GetJobSearchPage {
    jobSearchPage {
      data {
        attributes {
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
          footerCta {
            ...FooterCtaFragment
          }
        }
      }
    }
  }
`;

export const getJobSearchData = async () => {
  try {
    const response = await graphqlClient.request(JOB_SEARCH_QUERY);

    return response.jobSearchPage;
  } catch (error) {
    throw error;
  }
};

// These functions don't interact with Strapi's GraphQL, so they remain unchanged
export const fetchAllJobs = async () => {
  try {
    const getAllJobsData = await fetch(
      `${process.env.NEXT_PUBLIC_SIMPLIFY_HR_JOBS_URL}`,
      {
        method: "GET",
        headers: {
          Authorization: `${process.env.NEXT_PUBLIC_AUTHORIZATION_SIMPLIFY_HR_TOKEN}`,
          "Content-Type": "application/json",
        },
      },
    );

    const data = await getAllJobsData.json();

    return data?.Vacancies;
  } catch (error) {
    throw error;
  }
};

export const fetchSingleJob = async (id: string) => {
  try {
    const getJobData = await fetch(
      `https://api.simplify.hr/v1/Vacancies/${id}`,
      {
        method: "GET",
        headers: {
          Authorization: `${process.env.NEXT_PUBLIC_AUTHORIZATION_SIMPLIFY_HR_TOKEN}`,
          "Content-Type": "application/json",
        },
      },
    );

    const data = await getJobData.json();

    return data?.VacancyInfo;
  } catch (error) {
    throw error;
  }
};
