import { useState, useEffect } from 'react'

import useScroll from 'hooks/useScroll'

export default function ToTopButton() {
  const [introHeight, setIntroHeight] = useState(0)
  const [isDisplayed, setIsDisplayed] = useState(false)
  const { scrollY } = useScroll()

  useEffect(() => {
    const introHeight = document.querySelector('.intro').offsetHeight
    setIntroHeight(introHeight)
  }, [])

  useEffect(() => {
    if (scrollY > introHeight / 2) {
      setIsDisplayed(true)
    } else {
      setIsDisplayed(false)
    }
  }, [scrollY])

  const handleOnClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <button
      id="top-button"
      onClick={handleOnClick}
      style={{ display: isDisplayed ? 'block' : 'none' }}
    >
      <img src="/img/emojis/pointing-up.png" alt="finger pointing up" />
    </button>
  )
}
