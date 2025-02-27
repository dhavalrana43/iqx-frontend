import React, { Suspense } from "react";
import { unstable_cache } from "next/cache";
import { notFound } from "next/navigation";
import { Spinner } from "@heroui/react";

import {
  getCapabilityBySlug,
  getAllCapabilitiesSlugs,
} from "@/_service/capability";
import CustomHead from "@/_components/custom-head/CustomHead";
import { siteConfig } from "@/_config/site";
import FooterCTA from "@/_components/footer-cta/FooterCTA";

import CapabilityPage from "./CapabilityPage";

const LoadingState = () => (
  <div className="flex items-center justify-center min-h-screen">
    <Spinner color="primary" label="Loading capability details..." size="lg" />
  </div>
);

const ErrorState = () => (
  <div className="flex flex-col items-center justify-center min-h-screen p-4">
    <h2 className="text-2xl font-bold mb-4">Something went wrong</h2>
    <p className="text-gray-600 dark:text-gray-400">
      Unable to load capability details. Please try again later
    </p>
  </div>
);

const getCapabilityCached = unstable_cache(
  getCapabilityBySlug,
  ["capability"],
  {
    revalidate: siteConfig.revalidateTime,
    tags: ["capability"],
  },
);

const getAllCapabilitiesCached = unstable_cache(
  getAllCapabilitiesSlugs,
  ["capabilities-slugs"],
  {
    revalidate: siteConfig.revalidateTime,
    tags: ["capabilities"],
  },
);

interface PageProps {
  params: Promise<{ capability: string }>;
}

const Capability = async ({ params }: PageProps) => {
  try {
    const { capability: slug } = await params;

    if (!slug) {
      notFound();
    }

    const response = await getCapabilityCached(slug);

    if (!response?.data?.[0]) {
      return <ErrorState />;
    }

    const capabilityData = response.data[0];

    return (
      <>
        {capabilityData?.title && (
          <CustomHead
            description={capabilityData?.description || ""}
            title={capabilityData?.title}
          />
        )}
        <Suspense fallback={<LoadingState />}>
          <CapabilityPage pageData={capabilityData} />
        </Suspense>
        {capabilityData.footerCta && (
          <FooterCTA {...capabilityData.footerCta} />
        )}
      </>
    );
  } catch (error) {
    console.error("Error loading capability:", error);

    return <ErrorState />;
  }
};

export default Capability;

export async function generateStaticParams() {
  try {
    const capabilities = await getAllCapabilitiesCached();

    return capabilities.data.map((capability: { slug: any }) => ({
      capability: capability.slug,
    }));
  } catch (error) {
    console.error("Error generating static params:", error);

    return [];
  }
}
