import { useState } from 'react'
import './Projects.css'

const PROJECTS = [
  {
    id: 1,
    name: 'Krishna Vihar',
    type: 'Residential',
    location: 'Near New Multispeciality Hospital, Koni Road, Bilaspur',
    units: '2 BHK · 3 BHK · Plots',
    status: 'Ongoing',
    statusColor: '#B8860B',
    img: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=85',
    tag: 'Premium Township',
    highlights: ['Two Spacious Gardens', 'Wide Roads', '24/7 Security', 'Mandir', 'Community Hall'],
    phone: '8103936564',
    instagram: 'https://www.instagram.com/shriramparkbsp',
    tagline: 'Premium Living. Affordable Price.',
    desc: "Bilaspur's most premium and affordable township — offering lavish 2 BHK & 3 BHK homes and residential plots near the new Multispeciality Hospital, Koni Road.",
  },
  {
    id: 2,
    name: 'Arpa Business Park',
    type: 'Commercial',
    location: 'National Highway, Ratapur Road, Bilaspur',
    units: 'Showroom · Shops · Institution · Warehousing',
    status: 'Ongoing',
    statusColor: '#B8860B',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=85',
    tag: 'Business Hub',
    highlights: ['Showroom Spaces', 'Retail Shops', 'Warehousing', 'NH Frontage', 'Institution Spaces'],
    phone: '8103936564',
    instagram: 'https://www.instagram.com/arpabusinesspark_bilaspur',
    tagline: "Bilaspur's Ultimate Business Hub",
    desc: 'A wholesale and retail corridor for all trade on National Highway, Ratapur Road — the ultimate commercial destination for showrooms, shops, institutions and warehousing.',
  },
  {
    id: 3,
    name: '3A Commercial Business Complex',
    type: 'Commercial',
    location: 'Main Road, Gandhi Chowk, Juna Bilaspur',
    units: 'Office · Retail · Commercial Spaces',
    status: 'Completed',
    statusColor: '#2D6A4F',
    img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=85',
    tag: 'Landmark',
    highlights: ['Prime Location', 'Gandhi Chowk', 'Office Spaces', 'Retail Floors', 'High Visibility'],
    phone: '8103936564',
    instagram: 'https://www.instagram.com/3acommercial_businesscomplex',
    tagline: "Bilaspur's Landmark Commercial Address",
    desc: 'A landmark commercial complex at Gandhi Chowk, the heart of Juna Bilaspur — housing offices, retail and commercial spaces at the most connected address in the city.',
  },
  {
    id: 4,
    name: 'Bilaspur Textile Market',
    type: 'Commercial',
    location: 'Bilaspur, Chhattisgarh',
    units: 'Wholesale · Retail · Textile Shops',
    status: 'Completed',
    statusColor: '#2D6A4F',
    img: 'https://images.unsplash.com/photo-1555636222-cae831e670b3?w=800&q=85',
    tag: 'Trade Hub',
    highlights: ['Textile Wholesale', 'Retail Shops', 'Dedicated Trade Zone', 'High Footfall', 'Easy Access'],
    phone: '8103936564',
    instagram: 'https://www.instagram.com/bilaspur.textile.market',
    tagline: 'The Textile Capital of Bilaspur',
    desc: 'A dedicated textile wholesale and retail hub in Bilaspur — the go-to destination for fabric traders, garment retailers and textile businesses across Chhattisgarh.',
  },
  {
    id: 5,
    name: 'Shriram Park',
    type: 'Residential',
    location: 'Bilaspur, Chhattisgarh',
    units: 'Residential Plots · Villas',
    status: 'Completed',
    statusColor: '#2D6A4F',
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=85',
    tag: 'Plotted',
    highlights: ['Green Surroundings', 'RERA Approved', 'Wide Roads', 'Vastu Compliant', 'Gated Community'],
    phone: '8103936564',
    instagram: 'https://www.instagram.com/shriramparkbsp',
    tagline: 'Build Your Dream Home',
    desc: 'A serene residential plotted development offering RERA-approved plots and villa spaces in a gated, green community — perfect for building your dream home.',
  },
]

const FILTERS = ['All', 'Residential', 'Commercial']

export default function Projects() {
  const [filter,   setFilter]   = useState('All')
  const [selected, setSelected] = useState(null)

  const visible = filter === 'All' ? PROJECTS : PROJECTS.filter(p => p.type === filter)

  return (
    <section className="projects section" id="projects">

      <div className="projects-header">
        <div>
          <span className="section-label">Our Portfolio</span>
          <div className="gold-rule" />
          <h2 className="projects-title serif">
            Landmark<br /><em>Projects</em>
          </h2>
        </div>
        <p className="projects-desc">
          From premium residential townships to landmark commercial hubs — every Swarnbhoomi project is crafted with integrity, quality and community in mind.
        </p>
      </div>

      <div className="projects-stats">
        <div className="ps-item"><span className="ps-num serif">6+</span><span className="ps-lbl">Projects</span></div>
        <div className="ps-divider" />
        <div className="ps-item"><span className="ps-num serif">4</span><span className="ps-lbl">Completed</span></div>
        <div className="ps-divider" />
        <div className="ps-item"><span className="ps-num serif">2</span><span className="ps-lbl">Ongoing</span></div>
        <div className="ps-divider" />
        <div className="ps-item"><span className="ps-num serif">500+</span><span className="ps-lbl">Happy Families</span></div>
        <div className="ps-divider" />
        <div className="ps-item"><span className="ps-num serif">8103936564</span><span className="ps-lbl">Call Us</span></div>
      </div>

      <div className="projects-filters">
        {FILTERS.map(f => (
          <button
            key={f}
            className={`filter-btn${filter === f ? ' filter-btn--active' : ''}`}
            onClick={() => setFilter(f)}
          >{f}</button>
        ))}
      </div>

      <div className="projects-grid">
        {visible.map(p => (
          <div className="project-card" key={p.id} onClick={() => setSelected(p)}>
            <div className="project-img">
              <img src={p.img} alt={p.name} loading="lazy" />
              <div className="project-tag">{p.tag}</div>
              <div className="project-overlay">
                <span className="overlay-hint">View Details</span>
              </div>
            </div>
            <div className="project-info">
              <div className="project-meta">
                <span className="project-type">{p.type}</span>
                <span
                  className="project-status"
                  style={{ color: p.statusColor, borderColor: p.statusColor + '40', background: p.statusColor + '12' }}
                >{p.status}</span>
              </div>
              <h3 className="project-name serif">{p.name}</h3>
              <p className="project-tagline">{p.tagline}</p>
              <div className="project-details">
                <span>📍 {p.location}</span>
                <span>🏠 {p.units}</span>
              </div>
              <div className="project-chips">
                {p.highlights.slice(0, 3).map(h => (
                  <span className="project-chip" key={h}>{h}</span>
                ))}
              </div>
              <div className="project-actions">
                <a href={`tel:${p.phone}`} className="btn btn-primary proj-btn" onClick={e => e.stopPropagation()}>
                  📞 {p.phone}
                </a>
                {p.instagram && (
                  <a href={p.instagram} target="_blank" rel="noopener noreferrer"
                    className="btn proj-btn-ig" onClick={e => e.stopPropagation()}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                    </svg>
                    Instagram
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <div className="proj-modal-bg" onClick={() => setSelected(null)}>
          <div className="proj-modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelected(null)}>✕</button>
            <div className="modal-img">
              <img src={selected.img} alt={selected.name} />
              <div className="modal-tag">{selected.tag}</div>
              <span className="modal-status"
                style={{ color: selected.statusColor, background: selected.statusColor + '15', borderColor: selected.statusColor + '40' }}>
                {selected.status}
              </span>
            </div>
            <div className="modal-body">
              <div className="modal-type">{selected.type}</div>
              <h2 className="modal-name serif">{selected.name}</h2>
              <p className="modal-tagline serif"><em>"{selected.tagline}"</em></p>
              <div className="gold-rule" />
              <p className="modal-desc">{selected.desc}</p>
              <div className="modal-info-grid">
                <div className="modal-info-item">
                  <span className="mi-label">📍 Location</span>
                  <span className="mi-val">{selected.location}</span>
                </div>
                <div className="modal-info-item">
                  <span className="mi-label">🏠 Units / Spaces</span>
                  <span className="mi-val">{selected.units}</span>
                </div>
              </div>
              <div className="modal-highlights">
                <div className="mh-label">Key Highlights</div>
                <div className="mh-chips">
                  {selected.highlights.map(h => (
                    <span className="project-chip" key={h}>✓ {h}</span>
                  ))}
                </div>
              </div>
              <div className="modal-actions">
                <a href={`tel:${selected.phone}`} className="btn btn-primary">📞 {selected.phone}</a>
                {selected.instagram && (
                  <a href={selected.instagram} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                    Instagram →
                  </a>
                )}
                <a href="#contact" className="btn btn-gold" onClick={() => setSelected(null)}>Enquire Now</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}