import Layout from '@/components/layout'

import Intro from '@/components/intro'
import Background from '@/components/background'
import Skills from '@/components/skills'
import Experience from '@/components/experience'
import FeaturedProjects from '@/components/featured-projects'
import OtherProjects from '@/components/other-projects'

export default function Home() {
  return (
    <Layout>
      <Intro />
      <Background />
      <Skills />
      <Experience />
      <FeaturedProjects />
      <OtherProjects />
    </Layout>
  )
}
