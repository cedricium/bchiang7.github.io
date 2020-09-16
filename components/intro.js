import { useEffect } from 'react'

export default function Intro() {
  useEffect(() => {
    const hand = document.querySelector('.emoji.wave-hand')

    const addWave = () => hand.classList.add('wave')
    const removeWave = () => hand.classList.remove('wave')

    const waveOnLoad = () => {
      addWave()
      setTimeout(removeWave, 1000)
    }

    setTimeout(waveOnLoad, 1000)

    hand.addEventListener('mouseover', addWave)
    hand.addEventListener('mouseout', removeWave)

    return () => {
      hand.removeEventListener('mouseover', addWave)
      hand.removeEventListener('mouseout', removeWave)
    }
  }, [])

  return (
    <header className='intro'>
      <h1 className='intro__hello'>
        Hello!{` `}
        <span className='emoji wave-hand animated' />
      </h1>

      <h2 className='intro__tagline'>
        I'm{` `}
        <span className='name'>Cedric Amaya</span>, a JavaScript aficionado
        passionate about creating exciting and memorable experiences for the
        web.{` `}
        <span className='emoji technologist' />
      </h2>

      <h3 className='intro__contact'>
        <span>Get in touch </span>
        {` `}
        <span className='emoji pointer' />
        {` `}
        <span>
          <a
            href='mailto:amaya.cedric@gmail.com'
            target='_blank'
            className='highlight-link'
          >
            amaya.cedric@gmail.com
          </a>
        </span>
      </h3>
    </header>
  )
}
