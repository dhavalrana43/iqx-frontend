import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const disallowRobots = false;
  const BASE_URL = "http://54.175.177.228:3000/";

  if (disallowRobots) {
    return {
      rules: {
        userAgent: "*",

        disallow: "/",
      },
      sitemap: `${BASE_URL}/sitemap.xml`,
    };
  } else {
    return {
      rules: {
        userAgent: "*",
        allow: "/",
      },
      sitemap: `${BASE_URL}/sitemap.xml`,
    };
  }
}
