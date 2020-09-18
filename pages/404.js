import Link from 'next/link'

import Layout from 'components/layout'

export default function Custom404() {
  return (
    <Layout title="Not Found">
      <section className="not-found">
        <img src="/img/emojis/thinking-face.png" alt="thinking face emoji" />
        <h1>Hmmm…</h1>
        <h2>
          Looks like you may have lost your way. Why don't you head back{` `}
          <Link href="/">home</Link>.
        </h2>
      </section>
    </Layout>
  )
}
