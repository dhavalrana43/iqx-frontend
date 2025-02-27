// app/careers/training/page.tsx

import { unstable_cache } from "next/cache";

import { siteConfig } from "@/_config/site";
import { fetchArloEvents } from "@/_service/arlo";

import TrainingPage from "./TrainingPage";
const getArloEventDataCached = unstable_cache(fetchArloEvents, ["training"], {
  revalidate: siteConfig.revalidateTime,
  tags: ["training"],
});

export default async function Training() {
  const data = await getArloEventDataCached();

  return <TrainingPage {...data} />;
}
