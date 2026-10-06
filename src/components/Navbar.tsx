import { useState } from 'react'
import { ArrowRight, Leaf, Menu, X } from 'lucide-react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Impact', href: '#impact' },
  { label: 'About', href: '#about' },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <nav className="nav-shell page-shell" aria-label="Main navigation">
        <a className="brand" href="#home" onClick={() => setMenuOpen(false)}>
          <span className="brand-mark"><Leaf size={19} strokeWidth={2.4} /></span>
          <span>Nex<span>Campus</span></span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>

        <div className={`nav-content${menuOpen ? ' is-open' : ''}`}>
          <div className="nav-links">
            {links.map((link) => (
              <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)}>
                {link.label}
              </a>
            ))}
          </div>
          <div className="nav-actions">
            <a className="button button-outline button-small" href="#about" onClick={() => setMenuOpen(false)}>
              Sign In
            </a>
            <a className="button button-primary button-small" href="#get-started" onClick={() => setMenuOpen(false)}>
              Get Started <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar