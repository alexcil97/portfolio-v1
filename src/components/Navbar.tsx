import { navLinks, profile } from '../data/profile'

export function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a href="#inicio" className="navbar-logo">
          {profile.name.toLowerCase()}
          <span>.dev</span>
        </a>
        <nav>
          <ul className="navbar-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
