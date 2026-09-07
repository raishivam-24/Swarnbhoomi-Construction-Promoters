import './Hero.css'

const IMAGES = [
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1800&q=85',
  'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1800&q=85',
  'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1800&q=85',
]

import { useState, useEffect } from 'react'

export default function Hero() {
  const [slide, setSlide] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setSlide(s => (s + 1) % IMAGES.length), 5000)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="hero" id="home">
      {/* Slideshow BG */}
      <div className="hero-bg">
        {IMAGES.map((img, i) => (
          <div
            key={i}
            className={`hero-slide${i === slide ? ' hero-slide--active' : ''}`}
            style={{ backgroundImage: `url('${img}')` }}
          />
        ))}
        <div className="hero-overlay" />
      </div>

      {/* Content */}
      <div className="hero-content">
        <div className="hero-eyebrow">
          <span className="hero-eyebrow-line" />
          <span>Est. Bilaspur · Chhattisgarh</span>
          <span className="hero-eyebrow-line" />
        </div>

        <h1 className="hero-title">
          <span className="hero-title-lg">Building</span>
          <span className="hero-title-serif">Golden Addresses</span>
          <span className="hero-title-sm">Across Chhattisgarh</span>
        </h1>

        <p className="hero-sub">
          RERA Registered · ISO 9001:2015 Certified · A name built on trust
        </p>

        <div className="hero-btns">
          <a href="#projects" className="btn btn-primary hero-btn-primary">
            View Projects
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
          </a>
          <a href="#contact" className="btn btn-hero-outline">
            Get in Touch
          </a>
        </div>

        {/* Trust bar */}
        <div className="hero-trust">
          <div className="trust-item">
            <span className="trust-num">CGRERA300824A000826</span>
            <span className="trust-lbl">RERA Registration</span>
          </div>
          <div className="trust-divider" />
          <div className="trust-item">
            <span className="trust-num">ISO 9001:2015</span>
            <span className="trust-lbl">Quality Certified</span>
          </div>
          <div className="trust-divider" />
          <div className="trust-item">
            <span className="trust-num">2024</span>
            <span className="trust-lbl">Certified Since</span>
          </div>
        </div>
      </div>

      {/* Slide dots */}
      <div className="hero-dots">
        {IMAGES.map((_, i) => (
          <button
            key={i}
            className={`hero-dot${i === slide ? ' hero-dot--active' : ''}`}
            onClick={() => setSlide(i)}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll">
        <div className="scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  )
}
