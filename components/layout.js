import SEO from 'components/seo'
import Header from 'components/header'
import Footer from 'components/footer'

export default function Layout({ title, children }) {
  return (
    <>
      <SEO title={title} />
      <main>
        <Header />
        {children}
      </main>
      <Footer />
    </>
  )
}
