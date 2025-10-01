import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="description"
            content="Boring Global — A holdings company focused on hosting, cloud infrastructure, and digital product development. Coming soon."
          />
          <meta
            name="keywords"
            content="Boring Global, boring.global, holdings company, tech holdings, cloud infrastructure, hosting, digital services"
          />
          <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
          <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <meta name="theme-color" content="#000000" />
          <meta property="og:title" content="Boring Global" />
          <meta
            property="og:description"
            content="Coming soon: boring.global — a tech-focused holdings company."
          />
          {/* <meta property="og:image" content="/og-image.png" /> */}
          <meta property="og:url" content="https://boring.global" />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
