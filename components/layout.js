import SEO from '@/components/seo'
import Footer from '@/components/footer'
import ThemeToggle from '@/components/theme-toggle'

export default function Layout({ children }) {
  return (
    <>
      <SEO />
      <ThemeToggle />
      <main>{children}</main>
      <Footer />
    </>
  )
}
