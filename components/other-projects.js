import { otherProjects } from 'data'

export default function OtherProjects() {
  return (
    <section className='section other-projects'>
      <div className='section__title'>Projects</div>
      <div className='section__content'>
        {otherProjects.map((project) => (
          <div key={project.name} className='project'>
            <div className='project__name'>
              <a href={project.url} target='_blank' className='arrow-link'>
                {project.name}
              </a>
            </div>
            <p dangerouslySetInnerHTML={{ __html: project.description }} />
            <div className='project__used'>
              {project.used.map((item) => (
                <span key={item} className='project__used__item'>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
