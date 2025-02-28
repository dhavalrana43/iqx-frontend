// app/_service/jobs.ts
import { gql } from "graphql-request";

import { graphqlClient } from "@/_lib/graphql-client";
import { IMAGE_FRAGMENT, FOOTER_CTA_FRAGMENT } from "@/_graphql/fragments";
import { JobData, JobSearchData, JobSearchResponse } from "@/_types/jobs";

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

export const getJobSearchData = async (): Promise<JobSearchData> => {
  try {
    const response =
      await graphqlClient.request<JobSearchResponse>(JOB_SEARCH_QUERY);

    return response.jobSearchPage.data.attributes;
  } catch (error) {
    console.error("Job search data fetch error:", error);
    throw error;
  }
};

// These functions don't interact with Strapi's GraphQL, so they remain unchanged
export const fetchAllJobs = async (): Promise<JobData[]> => {
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_SIMPLIFY_HR_JOBS_URL!);

    if (!response.ok) throw new Error("Failed to fetch jobs");
    const data = await response.json();

    return data.items as JobData[];
  } catch (error) {
    console.error("External jobs fetch error:", error);
    throw error;
  }
};
export const fetchSingleJob = async (id: string): Promise<JobData> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SIMPLIFY_HR_SINGLE_JOB_URL}${id}`,
    );

    if (!response.ok) throw new Error("Failed to fetch job details");
    const data = await response.json();

    return data as JobData;
  } catch (error) {
    console.error("Single job fetch error:", error);
    throw error;
  }
};
