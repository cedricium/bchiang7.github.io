import { useState, useEffect } from 'react'

/**
 * Custom React hook for listening to scroll events, courtesy @joshusacerbito on GitHub
 * Source: https://gist.github.com/joshuacerbito/ea318a6a7ca4336e9fadb9ae5bbb87f4
 */
export default function useScroll() {
  const [lastScrollTop, setLastScrollTop] = useState(0)
  const [bodyOffset, setBodyOffset] = useState(
    process.browser
      ? document.body.getBoundingClientRect()
      : {
          top: 0,
          left: 0,
        },
  )
  const [scrollY, setScrollY] = useState(bodyOffset.top)
  const [scrollX, setScrollX] = useState(bodyOffset.left)
  const [scrollDirection, setScrollDirection] = useState()

  const listener = (e) => {
    setBodyOffset(document.body.getBoundingClientRect())
    setScrollY(-bodyOffset.top)
    setScrollX(bodyOffset.left)
    setScrollDirection(lastScrollTop > -bodyOffset.top ? 'down' : 'up')
    setLastScrollTop(-bodyOffset.top)
  }

  useEffect(() => {
    window.addEventListener('scroll', listener)
    return () => {
      window.removeEventListener('scroll', listener)
    }
  })

  return {
    scrollY,
    scrollX,
    scrollDirection,
  }
}
