import './About.css'

const CERTS = [
  {
    icon: '🏛️',
    label: 'RERA Registered',
    value: 'CGRERA300824A000826',
    note: 'Valid: Aug 2024 – Aug 2029',
    color: '#7B1C2E',
  },
  {
    icon: '✅',
    label: 'ISO 9001:2015',
    value: 'E2024049781',
    note: 'Quality Management Systems',
    color: '#B8860B',
  },
  {
    icon: '📋',
    label: 'CHHATTISGARH',
    value: 'State Registered',
    note: 'Real Estate Agent — Form H',
    color: '#5A6E2D',
  },
]

const PILLARS = [
  { num: '15+', label: 'Years of Experience' },
  { num: '500+', label: 'Happy Families' },
  { num: '50+', label: 'Projects Delivered' },
  { num: '100%', label: 'RERA Compliant' },
]

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="about-grid">

        {/* Left — images */}
        <div className="about-images">
          <div className="about-img-main">
            <img
              src="/image/3a/building-dome.png"
              alt="Swarnbhoomi construction quality"
            />
            <div className="about-img-badge">
              <span className="badge">ISO 9001:2015 Certified</span>
            </div>
          </div>
          <div className="about-img-side">
            <img
              src="/image/arpa/front-view.png"
              alt="Premium construction"
            />
            <img
              src="/image/textile-market/front-gate.png"
              alt="Swarnbhoomi office Bilaspur"
            />
          </div>
        </div>

        {/* Right — content */}
        <div className="about-content">
          <span className="section-label">Who We Are</span>
          <div className="gold-rule" />
          <h2 className="about-title serif">
            Swarnbhoomi<br />
            <em>Construction</em><br />
            & Promoters
          </h2>
          <p className="about-body">
            A trusted name in Chhattisgarh real estate, Swarnbhoomi Construction & Promoters is headquartered at <strong>G-37, Swarn Chambers, Highcourt Road, Bilaspur — 495001</strong>. We are dedicated to building homes that reflect aspiration, quality, and lasting value.
          </p>
          <p className="about-body">
            As a RERA-registered real estate agent and ISO 9001:2015 certified construction company, every project we deliver is backed by the highest standards of quality management and regulatory compliance.
          </p>

          {/* Certifications */}
          <div className="about-certs">
            {CERTS.map(c => (
              <div className="cert-card" key={c.label}>
                <div className="cert-icon">{c.icon}</div>
                <div>
                  <div className="cert-label">{c.label}</div>
                  <div className="cert-value" style={{ color: c.color }}>{c.value}</div>
                  <div className="cert-note">{c.note}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div className="about-stats">
        {PILLARS.map(p => (
          <div className="stat-item" key={p.label}>
            <span className="stat-num serif">{p.num}</span>
            <span className="stat-label">{p.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
