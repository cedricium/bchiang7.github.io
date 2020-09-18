import Link from 'next/link'

/**
 * TODO:
 * refactor theme toggle to work inline with header navigation
 * example: https://joshwcomeau.com/
 *
 * import ThemeToggle from 'components/theme-toggle'
 */

export default function Header() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li className="underline-link">
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li className="underline-link">
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li className="underline-link">
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </li>
        <li className="underline-link">
          <Link href="/projects">
            <a>Projects</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
