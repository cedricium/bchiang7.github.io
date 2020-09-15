import Head from 'next/head'

export default function SEO({ title }) {
  return (
    <Head>
      <meta charSet='UTF-8' />
      <meta content='IE=edge,chrome=1' httpEquiv='X-UA-Compatible' />
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
      />
      <title>{title || 'Cedric Amaya | Full Stack Software Engineer'}</title>
      <link
        rel='icon'
        type='image/png'
        href='/img/emojis/technologist.png'
        hrefLang='en-us'
      />

      <meta
        property='og:title'
        content='Cedric Amaya | Full Stack Software Engineer'
      />
      <meta
        property='og:description'
        content='JavaScript aficionado passionate about creating exciting and memorable experiences for the web.'
      />
      <meta property='og:type' content='website' />
      <meta property='og:url' content='https://cedric.tech/' />
      <meta property='og:site_name' content='Cedric Amaya' />
      <meta property='og:image' content='https://cedric.tech/img/og.png' />
      <meta property='og:image:width' content='1280' />
      <meta property='og:image:height' content='800' />
      <meta property='og:image:type' content='image/png' />
      <meta property='og:locale' content='en_US' />

      <meta
        name='description'
        content='JavaScript aficionado passionate about creating exciting and memorable experiences for the web.'
      />
      <meta
        itemProp='name'
        content='Cedric Amaya | Full Stack Software Engineer'
      />
      <meta
        itemProp='description'
        content='JavaScript aficionado passionate about creating exciting and memorable experiences for the web.'
      />
      <meta itemProp='image' content='https://cedric.tech/img/og.png' />

      <meta name='twitter:card' content='summary' />
      <meta name='twitter:url' content='https://cedric.tech/' />
      <meta name='twitter:site' content='@CedricAmaya' />
      <meta name='twitter:creator' content='@CedricAmaya' />
      <meta
        name='twitter:title'
        content='Cedric Amaya | Full Stack Software Engineer'
      />
      <meta
        name='twitter:description'
        content='JavaScript aficionado passionate about creating exciting and memorable experiences for the web.'
      />
      <meta name='twitter:image:src' content='https://cedric.tech/img/og.png' />
      <link
        href='https://fonts.googleapis.com/css?family=Inconsolata:400,700'
        rel='stylesheet'
      />
    </Head>
  )
}
