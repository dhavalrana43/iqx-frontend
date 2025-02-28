import "../styles/globals.css";
import clsx from "clsx";
import { unstable_cache } from "next/cache";

import { fontSans } from "@/_config/fonts";

import { Providers } from "./providers";
import { getHeaderData } from "./_service/header";
import HeaderNav from "./_components/header-nav/HeaderNav";
import Footer from "./_components/footer/Footer";
import { getFooterData } from "./_service/footer";
import ErrorBoundary from "./errorBoundary";
import { siteConfig } from "./_config/site";
import { getStrapiAssetURI } from "./_data/loaders";
import { getHomeData } from "./_service/home";

const getHeaderCached = unstable_cache(getHeaderData, ["header"], {
  revalidate: siteConfig.revalidateTime,
  tags: ["header"],
});

const getFooterCached = unstable_cache(getFooterData, ["footer"], {
  revalidate: siteConfig.revalidateTime,
  tags: ["footer"],
});

export async function generateMetadata() {
  const [metadata, headerData] = await Promise.all([
    getHomeData(),
    getHeaderCached(),
  ]);

  const { title, description } = metadata?.data;

  const faviconUrl =
    getStrapiAssetURI(headerData.data.favicon.url) ?? "/favicon.svg";

  return {
    title: title ?? "IQBusiness",
    description:
      description ??
      "Welcome to our new era. We have joined forces with +OneX to form a leading Digital Integrator. Together, we offer a full-service suite of digital services.",
    icons: {
      icon: faviconUrl,
    },
  };
}
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headerData = await getHeaderCached();

  const footerData = await getFooterCached();

  return (
    <html lang="en">
      <head>
        {headerData?.data?.logoImage && (
          <link
            as="image"
            crossOrigin="anonymous"
            href={
              getStrapiAssetURI(headerData?.data?.logoImage?.url) ?? "/logo.svg"
            }
            rel="preload"
            type="image/svg+xml"
          />
        )}
      </head>

      <body
        suppressHydrationWarning
        className={clsx("font-sans antialiased", fontSans.variable)}
      >
        <Providers>
          <ErrorBoundary>
            <main className="iqx-dark text-foreground bg-background min-h-screen">
              <HeaderNav navData={headerData?.data} />
              {children}
              <Footer {...footerData?.data} />
            </main>
          </ErrorBoundary>
        </Providers>
      </body>
    </html>
  );
}
