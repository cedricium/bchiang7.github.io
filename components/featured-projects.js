export default function FeaturedProjects() {
  return (
    <section className='section featured-projects'>
      <div className='section__title'>Featured Projects</div>
      <div className='section__content'>
        <div className='project unearth'>
          <figure className='project__pic'>
            <a href='https://www.tryunearth.com/' target='_blank'>
              <img src='/img/featured/unearth/unearth.png' alt='unearth logo' />
            </a>
          </figure>
          <figcaption className='project__caption'>
            <div className='project__name'>
              <a href='https://www.tryunearth.com/' target='_blank'>
                unearth
              </a>
            </div>
            <p>
              Full-stack web application that helps Redditors manage, organize,
              and search their Reddit saves, developing key features based on
              user feedback. Client web app is powered by React, utilizing the
              Context API to manage in-app state. The backend REST API is
              powered by Node.js/Express.js with a Postgres database as the main
              datastore.
            </p>
          </figcaption>
        </div>
        <div className='project notes'>
          <figure className='project__pic'>
            <a
              href='https://addons.mozilla.org/en-US/firefox/addon/notes-by-firefox/'
              target='_blank'
            >
              <img
                src='/img/featured/notes/ff-notes.png'
                alt='screenshot of Firefox Notes on web and mobile'
              />
            </a>
          </figure>
          <figcaption className='project__caption'>
            <div className='project__name'>
              <a
                href='https://github.com/mozilla/notes/commits?author=cedricium'
                target='_blank'
              >
                Firefox Notes
              </a>
            </div>
            <p>
              Open source contributor to the popular Firefox Test Pilot
              Experiment, Notes. Key responsibilities include: designing and
              implementing the dark theme, developing the functionality to
              switch themes, and developing keyboard shortcuts for the WYSIWYG
              editor using the Quill.js API.
            </p>
          </figcaption>
        </div>
      </div>
    </section>
  )
}
