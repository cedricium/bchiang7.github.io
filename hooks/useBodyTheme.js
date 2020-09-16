import { useState, useEffect } from 'react'

const isNight = () => {
  const d = new Date()
  const hours = d.getHours()
  const night = hours >= 19 || hours <= 7 // between 7pm and 7am
  return night
}

export default function useBodyTheme() {
  const [isDark, setIsDark] = useState(isNight())

  const toggleTheme = () => setIsDark(!isDark)

  useEffect(() => {
    const body = document.body
    if (isDark) {
      body.classList.add('night')
    } else {
      body.classList.remove('night')
    }
  }, [isDark])

  return {
    isDark,
    toggleTheme,
  }
}
