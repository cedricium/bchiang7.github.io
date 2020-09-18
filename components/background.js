import Link from 'next/link'

import EmploymentStatus from 'components/employment-status'

export default function Background() {
  return (
    <section className='section background'>
      <div className='section__title'>Background</div>
      <div className='section__content'>
        <p>
          I recently completed a software engineering internship at{` `}
          <a
            className='underline-link'
            href='https://www.moogsoft.com/'
            target='_blank'
          >
            Moogsoft
          </a>
          {` `}where I wrangled JavaScript charting libraries and helped to
          optimize web app bundling and build performance. I'm also studying
          Full Stack Web Development at{` `}
          <a
            className='underline-link'
            href='https://lambdaschool.com/courses/full-stack-web-development'
            target='_blank'
          >
            Lambda School
          </a>
          .
        </p>
        <p>
          As a software developer, I strive to develop applications that are
          both efficient and user-friendly. My drive for coding comes from
          knowing I've built well-designed products that users will love to use
          and recommend to their friends and families.
        </p>
        <p>
          When I'm not in front of a computer screen, I'm probably hanging out
          with my girlfriend, riding around the Bay Area on my road bike,
          sitting out in the sun with my dog, or{` `}
          <Link href='/blog'>
            <a className='underline-link'>
              writing about whatever is on my mind
            </a>
          </Link>
          {` `}at the moment.
        </p>

        <EmploymentStatus />
      </div>
    </section>
  )
}
