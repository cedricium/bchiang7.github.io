import Link from 'next/link'

import Layout from 'components/layout'

import { getSortedPostsData } from 'lib/posts'

export default function Home({ allPostsData }) {
  return (
    <Layout title="Blog">
      <section className="blog-post">
        <h1 className="blog-post__title">Blog</h1>
        <p className="blog-post__subtitle">
          I write about the projects I develop and the problems they solve, as
          well as whatever else may cross my mind. Articles as of late have been
          more free-form in nature and therefore may not be as interesting as
          you might expect—you have been warned.
        </p>
        <ul className="article-list">
          {allPostsData.map(({ title, slug }) => (
            <li key={slug}>
              <Link href={`/blog/${slug}`}>
                <a>{title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}
