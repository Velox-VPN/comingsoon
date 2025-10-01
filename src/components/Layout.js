import Footer from '@/components/footer'

export default function Layout({ children }) {
  return (
    <div>
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  )
}