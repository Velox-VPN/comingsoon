import Head from 'next/head'
import { useRouter } from 'next/router'

type CommonSEOProps = {
  title: string
  description: string
  ogImage?: string // not used but keeping it for future use
  ogType?: string  // same here
  siteTitle: string
}

const CommonSEO = ({ title, description, ogImage, ogType, siteTitle }: CommonSEOProps) => {
  const router = useRouter()
  const titleTagTitle = title && siteTitle
    ? `${title} | ${siteTitle}`
    : siteTitle || 'Coming Soon'

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

type PageSEOProps = {
  title: string
  description: string
  siteTitle: string
}

export const PageSEO = ({ title, description, siteTitle }: PageSEOProps) => {
  return (
    <CommonSEO
      title={title}
      description={description}
      siteTitle={siteTitle}
    />
  )
}
