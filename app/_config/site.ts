export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  apiUrl: process.env.NEXT_PUBLIC_API_URL,
  apiToken: process.env.NEXT_PUBLIC_API_TOKEN,
  revalidateTime: 60,
};
