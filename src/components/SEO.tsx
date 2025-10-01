import Head from 'next/head'
import { useRouter } from 'next/router'
import siteMetadataJson from '@/data/siteMetadata'

type SiteMetadata = {
  siteUrl: string
  title: string
  twitter: string
  socialBanner: string
}

const siteMetadata = siteMetadataJson as SiteMetadata

type OgImageItem = { url: string }

type CommonSEOProps = {
  title: string
  description: string
  ogImage?: string | OgImageItem[]
  ogType?: 'website' | 'article' | (string & {})
  twImage?: string
  canonicalUrl?: string
  brandName?: string
}

export function CommonSEO({
  title,
  description,
  ogImage,
  ogType = 'website',
  twImage,
  canonicalUrl,
  brandName = 'VeloxVPN',
}: CommonSEOProps) {
  const router = useRouter()
  const isHomepage = router.asPath === '/'
  const titleTagTitle = isHomepage
    ? `${brandName} - Fast, Secure & Reliable VPN Service`
    : title && title !== brandName
    ? `${title} - ${brandName}`
    : brandName

  const resolvedCanonical = canonicalUrl ?? `${siteMetadata.siteUrl}${router.asPath}`

  const ogImages: string[] =
    typeof ogImage === 'string'
      ? [ogImage]
      : Array.isArray(ogImage)
      ? ogImage.map((i) => i.url)
      : []

  const twitterImage = twImage ?? ogImages[0] ?? siteMetadata.socialBanner

  return (
    <Head>
      <title>{titleTagTitle}</title>
      <meta name="description" content={description} />

      <link rel="canonical" href={resolvedCanonical} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={resolvedCanonical} />
      <meta property="og:site_name" content={siteMetadata.title} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />

      {ogImages.length > 0 ? (
        ogImages.map((url, idx) => [
          <meta key={`${idx}-og:image`} property="og:image" content={url} />,
          <meta key={`${idx}-og:secure`} property="og:image:secure_url" content={url} />,
        ])
      ) : (
        <>
          <meta property="og:image" content={siteMetadata.socialBanner} />
          <meta property="og:image:secure_url" content={siteMetadata.socialBanner} />
        </>
      )}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={titleTagTitle} />
      <meta name="twitter:site" content={siteMetadata.twitter} />
      <meta name="twitter:description" content={description} />
      {twitterImage && <meta name="twitter:image" content={twitterImage} />}
    </Head>
  )
}

type PageSEOProps = {
  title: string
  description: string
  brandName?: string
}

export function PageSEO({ title, description, brandName }: PageSEOProps) {
  const banner = siteMetadata.socialBanner

  return (
    <CommonSEO
      title={title}
      description={description}
      ogType="website"
      ogImage={banner}
      twImage={banner}
      brandName={brandName}
    />
  )
}

export default PageSEO
