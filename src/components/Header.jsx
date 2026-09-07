import { useState, useEffect } from 'react'
import './Header.css'

const NAV = [
  { label: 'Home',     href: '#home' },
  { label: 'About',    href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Location', href: '#location' },
  { label: 'Contact',  href: '#contact' },
]

export default function Header() {
  const [scrolled,    setScrolled]    = useState(false)
  const [mobileOpen,  setMobileOpen]  = useState(false)
  const [active,      setActive]      = useState('#home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (href) => {
    setActive(href)
    setMobileOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
        {/* Logo */}
        <button className="header__logo" onClick={() => go('#home')}>
          <div className="logo-emblem">
            <img
              src="/logo.png"
              alt="Swarnbhoomi Construction & Promoters"
            />
          </div>
          <div className="logo-text">
            <span className="logo-name">Swarnbhoomi</span>
            <span className="logo-sub">Construction & Promoters</span>
          </div>
        </button>

        {/* Desktop nav */}
        <nav className="header__nav">
          {NAV.map(n => (
            <button
              key={n.href}
              className={`nav-link${active === n.href ? ' nav-link--active' : ''}`}
              onClick={() => go(n.href)}
            >{n.label}</button>
          ))}
        </nav>

        {/* CTA */}
        <div className="header__cta">
          <a href="tel:+91" className="btn btn-primary header-btn">
            Book a Visit
          </a>
          <button
            className={`hamburger${mobileOpen ? ' hamburger--open' : ''}`}
            onClick={() => setMobileOpen(o => !o)}
          >
            <span/><span/><span/>
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <div className={`mobile-drawer${mobileOpen ? ' mobile-drawer--open' : ''}`}>
        {NAV.map(n => (
          <button key={n.href} className="mobile-link" onClick={() => go(n.href)}>{n.label}</button>
        ))}
        <a href="tel:+91" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: 16 }}>
          Book a Visit
        </a>
      </div>
    </>
  )
}
