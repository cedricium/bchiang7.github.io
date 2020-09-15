import SEO from '@/components/seo'
import Footer from '@/components/footer'

export default function Layout({ children }) {
  return (
    <>
      <SEO />
      <main>{children}</main>
      <Footer />
    </>
  )
}
