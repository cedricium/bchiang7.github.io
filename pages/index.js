import Head from 'next/head'
import styles from '@/styles/Home.module.css'

// TODO: create `layout` component w/ Footer and utilize in this page

import Intro from '@/components/intro'
import Background from '@/components/background'
import Skills from '@/components/skills'
import Experience from '@/components/experience'
import FeaturedProjects from '@/components/featured-projects'
import OtherProjects from '@/components/other-projects'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Intro />
      <Background />
      <Skills />
      <Experience />
      <FeaturedProjects />
      <OtherProjects />
      <Footer />
    </div>
  )
}
