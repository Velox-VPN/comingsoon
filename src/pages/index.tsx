import { GetStaticProps } from 'next'
import { PageSEO } from '@/components/SEO'

type HomeProps = {
  siteTitle: string
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  return {
    props: {
      siteTitle: 'VeloxVPN',
    },
  }
}

export default function Home({ siteTitle }: HomeProps) {
  return (
    <>
      <PageSEO title="Coming Soon" siteTitle={siteTitle} />
      <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 text-white font-mono">
        <div className="w-full max-w-2xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Coming Soon</h1>
          <h2 className="text-lg mb-6 text-gray-400">veloxvpn.net</h2>

          <div className="space-y-2 text-gray-300">
            <p>This site is under construction and will be available soon.</p>
            <p>We're working hard to bring you an amazing experience.</p>
            <p>Check back later or join our Discord for updates.</p>
          </div>

          <div className="flex justify-center mt-8">
            <a
              href="https://discord.gg/JmcqPgu6MW"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-white rounded hover:bg-white hover:text-black transition"
            >
              Join Discord
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-external-link"
              >
                <path d="M15 3h6v6" />
                <path d="M10 14 21 3" />
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
