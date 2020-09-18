import { experience } from 'data'

export default function Experience() {
  return (
    <section className='section experience'>
      <div className='section__title'>Experience</div>
      <div className='section__content'>
        <div className='jobs'>
          {experience.map((job) => (
            <div key={`${job.company}-${job.timeframe}`} className='job'>
              <div className='time-place'>
                <div className='job__company'>
                  <a href={job.url} target='_blank'>
                    {job.company}
                  </a>
                </div>
                <div className='job__time'>{job.timeframe}</div>
              </div>
              <div className='job__position'>{job.position}</div>
            </div>
          ))}
        </div>

        <a href='/resume.pdf' target='_blank' className='arrow-link'>
          View My Resume
        </a>
      </div>
    </section>
  )
}
