import { ReactNode } from 'react'
import Footer from '@/components/footer'

type LayoutProps = {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  )
}
