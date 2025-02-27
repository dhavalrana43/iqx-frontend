import { MetadataRoute } from "next";

import { getAllCapabilitiesSlugs } from "./_service/capability";
import { getAllBlogsData } from "./_service/blogs";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteMapPages: MetadataRoute.Sitemap = [];

  const BASE_URL = "http://54.175.177.228:3000/";

  const [capabilities, blogs] = await Promise.all([
    getAllCapabilitiesSlugs(),
    getAllBlogsData(),
  ]);

  siteMapPages.push({
    url: BASE_URL,
    lastModified: new Date(),
    changeFrequency: "weekly",
  });

  siteMapPages.push({
    url: `${BASE_URL}/our-thoughts`,
    lastModified: new Date(),
    changeFrequency: "weekly",
  });

  siteMapPages.push({
    url: `${BASE_URL}/capabilities`,
    lastModified: new Date(),
    changeFrequency: "weekly",
  });

  siteMapPages.push({
    url: `${BASE_URL}/who-we-are`,
    lastModified: new Date(),
    changeFrequency: "weekly",
  });

  siteMapPages.push({
    url: `${BASE_URL}/careers`,
    lastModified: new Date(),
    changeFrequency: "weekly",
  });

  siteMapPages.push({
    url: `${BASE_URL}/privacy-policy`,
    lastModified: new Date(),
    changeFrequency: "weekly",
  });

  siteMapPages.push({
    url: `${BASE_URL}/terms-and-conditions`,
    lastModified: new Date(),
    changeFrequency: "weekly",
  });

  capabilities.data.map((item: any) =>
    siteMapPages.push({
      url: `${BASE_URL}/capabilities/${item?.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.6,
    }),
  );

  blogs.data.map((item: any) =>
    siteMapPages.push({
      url: `${BASE_URL}/our-thoughts/${item?.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.6,
    }),
  );

  return siteMapPages;
}
