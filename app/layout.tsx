import "../styles/globals.css";
import { Viewport } from "next";
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

export const viewport: Viewport = {
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "black" }],
};

const getHeaderCached = unstable_cache(getHeaderData, ["header"], {
  revalidate: siteConfig.revalidateTime,
  tags: ["header"],
});

const getFooterCached = unstable_cache(getFooterData, ["footer"], {
  revalidate: siteConfig.revalidateTime,
  tags: ["footer"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [headerData, footerData] = await Promise.all([
    getHeaderCached(),
    getFooterCached(),
  ]);

  return (
    <html lang="en">
      {headerData?.data?.logoImage && (
        <head>
          <link
            as="image"
            crossOrigin="anonymous"
            href={
              getStrapiAssetURI(headerData?.data?.logoImage?.url) ?? "/logo.svg"
            }
            rel="preload"
            type="image/svg+xml"
          />
        </head>
      )}

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
