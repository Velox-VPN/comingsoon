import { Html, Head, Main, NextScript } from "next/document";
import siteMetadata from "@/data/siteMetadata"

export default function Document() {
  const lang = (siteMetadata.language ?? "en-US").split("-")[0];

  return (
    <Html lang={lang}>
      <Head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

        {/* PWA / Manifest */}
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />

        {/* Theme */}
        <meta name="theme-color" content="#5FF98A" />

        {/* Feeds */}
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
