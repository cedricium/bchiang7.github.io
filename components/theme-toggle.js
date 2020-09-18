import useBodyTheme from 'hooks/useBodyTheme'

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useBodyTheme()
  return (
    <div className='switch-wrapper'>
      <div className='sun'></div>
      <div className='toggle-wrapper'>
        <input
          id='switch'
          type='checkbox'
          checked={isDark}
          onChange={toggleTheme}
        />
        <label htmlFor='switch' id='toggle'>
          Toggle
        </label>
      </div>
      <div className='moon'></div>
    </div>
  )
}
