import { social } from '../data'

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__copyright'>
        <div className='bottom'>
          <span>Cedric Amaya</span>
          <img
            className='emoji'
            src='{{site.baseurl}}/img/emojis/rockon.png'
            alt='emoji'
          />
          <span>2020</span>
        </div>
      </div>
      <div className='footer__links'>
        {social.map((link) => (
          <a
            key={link.title}
            href={link.url}
            target='_blank'
            title={link.title}
          >
            <span className='text'>{link.title}</span>
            {/* <img src="{{site.baseurl}}/img/social/{{link.title}}.svg" alt="{{link.title}}"> */}
          </a>
        ))}
      </div>
    </footer>
  )
}
