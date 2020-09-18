import { skills } from 'data'

export default function Skills() {
  const { languages, frameworks, tools } = skills
  return (
    <section className="section skills">
      <div className="section__title">Skills</div>
      <div className="section__content">
        <div className="skillz">
          <div className="skillz__category">
            <div className="skillz__category__label">Languages</div>
            <ul>
              {languages.map((language, index) => (
                <li key={index} className="skillz__category__item">
                  {language}
                </li>
              ))}
            </ul>
          </div>
          <div className="skillz__category">
            <div className="skillz__category__label">Frameworks</div>
            <ul>
              {frameworks.map((framework, index) => (
                <li key={index} className="skillz__category__item">
                  {framework}
                </li>
              ))}
            </ul>
          </div>
          <div className="skillz__category">
            <div className="skillz__category__label">Tools</div>
            <ul>
              {tools.map((tool, index) => (
                <li key={index} className="skillz__category__item">
                  {tool}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
