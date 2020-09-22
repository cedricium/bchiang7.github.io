import Link from 'next/link'

import Layout from 'components/layout'
import Date from 'components/date'
import Blurb from 'components/blurb'

import { getAllPostSlugs, getPostData } from 'lib/posts'

export default function Post({ postData }) {
  return (
    <Layout title={postData.title}>
      <section className="blog-post">
        <h3 className="blog-post__backlink">
          <Link href="/blog">
            <a>&larr; Back to Blog</a>
          </Link>
        </h3>
        <h1 className="blog-post__title">{postData.title}</h1>
        <Date dateString={postData.date} />
        <article dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        <Blurb />
      </section>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostSlugs()
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.slug)
  return {
    props: {
      postData,
    },
  }
}
