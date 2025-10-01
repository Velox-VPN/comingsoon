import Head from 'next/head';
import { useRouter } from 'next/router';

const CommonSEO = ({ title, description, ogImage, ogType, siteTitle }) => {
  const router = useRouter();
  const titleTagTitle = title && siteTitle
    ? `${title} | ${siteTitle}`
    : siteTitle || 'Coming Soon';

  return (
    <Head>
      <title>{titleTagTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:url" content={router.asPath} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:title" content={title} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Head>
  )
}

export const PageSEO = ({ title, description, siteTitle }) => {
  return (
    <CommonSEO
      title={title}
      description={description}
      siteTitle={siteTitle}
    />
  )
}