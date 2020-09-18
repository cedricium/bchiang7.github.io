import Layout from 'components/layout'

import Intro from 'components/intro'
import Background from 'components/background'
import Skills from 'components/skills'
import Experience from 'components/experience'
import FeaturedProjects from 'components/featured-projects'
import OtherProjects from 'components/other-projects'
import ToTopButton from 'components/to-top-button'

import useBodyTheme from 'hooks/useBodyTheme'

export default function Home() {
  useBodyTheme()

  return (
    <Layout>
      <Intro />
      <Background />
      <Skills />
      <Experience />
      <FeaturedProjects />
      <OtherProjects />
      <ToTopButton />
    </Layout>
  )
}
