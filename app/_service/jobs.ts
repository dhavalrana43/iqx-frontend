// app\_service\jobs.ts
import qs from "qs";

import { siteConfig } from "@/_config/site";
import { fetchData } from "@/_data/loaders";

const baseUrl = siteConfig.apiUrl;

export const getJobSearchData = async () => {
  try {
    const url = new URL("/api/job-search-page", baseUrl);

    url.search = qs.stringify({
      fields: ["title", "description", "slug"],
      populate: {
        theme: {
          populate: "*",
        },
        heroBanner: {
          populate: {
            fields: ["title"],
            image: {
              fields: ["url", "alternativeText", "height", "width"],
            },
          },
        },
        footerCta: {
          populate: {
            ctaImage: {
              fields: ["url", "alternativeText", "height", "width"],
            },
            details: {
              populate: true,
            },
            ctaButton: {
              populate: "*",
            },
          },
        },
      },
    });

    return await fetchData(url.href);
  } catch (error) {
    throw error;
  }
};

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
