import './Footer.css'

const LINKS = {
  Company: ['About Us', 'Projects', 'Location', 'Contact'],
  'Property Types': ['Residential Flats', 'Commercial Space', 'Plotted Development'],
  Legal: ['RERA Certificate', 'ISO Certificate', 'Privacy Policy', 'Terms & Conditions'],
}

export default function Footer() {
  const year = new Date().getFullYear()

  const scrollTo = (id) => {
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      {/* Gold band */}
      <div className="footer-band">
        <div className="footer-band-inner">
          <div>
            <h3 className="footer-band-title serif">Ready to Find Your Perfect Home?</h3>
            <p className="footer-band-sub">Talk to our team today — no obligation, just answers.</p>
          </div>
          <div className="footer-band-actions">
            <button className="btn btn-gold" onClick={() => scrollTo('#contact')}>
              Book Free Consultation
            </button>
            <a href="tel:+916005538340" className="btn btn-hero-outline footer-call">
              📞 Call Now
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="footer-main">
        <div className="footer-brand-col">
          {/* Logo */}
          <div className="footer-logo">
            <image src="/logo.png" alt="Swarnbhoomi Logo" className="footer-logo-img" />
            <div>
              <div className="footer-logo-name">Swarnbhoomi</div>
              <div className="footer-logo-sub">Construction & Promoters</div>
            </div>
          </div>
          <p className="footer-about">
            A trusted real estate name in Chhattisgarh. RERA registered, ISO certified, and committed to building homes of lasting value in Bilaspur and beyond.
          </p>
          <div className="footer-certs">
            <span className="footer-cert">✅ RERA: CGRERA300824A000826</span>
            <span className="footer-cert">🏆 ISO 9001:2015 — E2024049781</span>
          </div>
        </div>

        {/* Links */}
        {Object.entries(LINKS).map(([cat, items]) => (
          <div className="footer-links-col" key={cat}>
            <h4 className="footer-col-title">{cat}</h4>
            <ul>
              {items.map(item => (
                <li key={item}>
                  <button className="footer-link">{item}</button>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Address */}
        <div className="footer-address-col">
          <h4 className="footer-col-title">Reach Us</h4>
          <div className="footer-addr-item">
            <span>📍</span>
            <span>G-37, Swarn Chambers,<br />Highcourt Road, Bilaspur,<br />Chhattisgarh — 495001</span>
          </div>
          <div className="footer-addr-item">
            <span>📞</span>
            <a href="tel:+916005538340">60055 38340</a>
          </div>
          <div className="footer-addr-item">
            <span>📧</span>
            <a href="mailto:swarnbhoomiconstruction@gmail.com">swarnbhoomiconstruction@gmail.com</a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <p>© {year} Swarnbhoomi Construction & Promoters. All rights reserved.</p>
        <p className="footer-disclaimer">
          This website is for informational purposes only and does not constitute a legal offer. Images are illustrative. Subject to RERA regulations.
        </p>
      </div>
    </footer>
  )
}