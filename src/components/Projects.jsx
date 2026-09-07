import { useState } from 'react'
import './Projects.css'

const PROJECTS = [
  {
    id: 1,
    name: 'Swarn Heights',
    type: 'Residential',
    location: 'Torwa, Bilaspur',
    units: '2 & 3 BHK',
    status: 'Completed',
    statusColor: '#2D6A4F',
    img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=85',
    tag: 'Premium',
  },
  {
    id: 2,
    name: 'Golden Chambers',
    type: 'Commercial',
    location: 'Highcourt Road, Bilaspur',
    units: 'Office & Retail',
    status: 'Completed',
    statusColor: '#2D6A4F',
    img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=85',
    tag: 'Flagship',
  },
  {
    id: 3,
    name: 'Swarn Residency',
    type: 'Residential',
    location: 'Civil Lines, Bilaspur',
    units: '3 & 4 BHK',
    status: 'Ongoing',
    statusColor: '#B8860B',
    img: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=85',
    tag: 'Luxury',
  },
  {
    id: 4,
    name: 'Bhoomi Enclave',
    type: 'Plotted',
    location: 'Seepat Road, Bilaspur',
    units: 'Residential Plots',
    status: 'Completed',
    statusColor: '#2D6A4F',
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=85',
    tag: 'Investment',
  },
  {
    id: 5,
    name: 'Swarn Palace',
    type: 'Residential',
    location: 'Vyapar Vihar, Bilaspur',
    units: '2, 3 & 4 BHK',
    status: 'Upcoming',
    statusColor: '#7B1C2E',
    img: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=85',
    tag: 'New Launch',
  },
  {
    id: 6,
    name: 'Swarn Chambers',
    type: 'Commercial',
    location: 'G-37, Highcourt Rd, Bilaspur',
    units: 'Office Spaces',
    status: 'Completed',
    statusColor: '#2D6A4F',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=85',
    tag: 'HQ',
  },
]

const FILTERS = ['All', 'Residential', 'Commercial', 'Plotted']

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const visible = filter === 'All' ? PROJECTS : PROJECTS.filter(p => p.type === filter)

  return (
    <section className="projects section" id="projects">
      {/* Header */}
      <div className="projects-header">
        <div>
          <span className="section-label">Our Portfolio</span>
          <div className="gold-rule" />
          <h2 className="projects-title serif">
            Landmark<br /><em>Projects</em>
          </h2>
        </div>
        <p className="projects-desc">
          From elegant residences to landmark commercial spaces — every Swarnbhoomi project is a testament to craftsmanship, compliance, and care.
        </p>
      </div>

      {/* Filters */}
      <div className="projects-filters">
        {FILTERS.map(f => (
          <button
            key={f}
            className={`filter-btn${filter === f ? ' filter-btn--active' : ''}`}
            onClick={() => setFilter(f)}
          >{f}</button>
        ))}
      </div>

      {/* Grid */}
      <div className="projects-grid">
        {visible.map(p => (
          <div className="project-card" key={p.id}>
            <div className="project-img">
              <img src={p.img} alt={p.name} loading="lazy" />
              <div className="project-tag">{p.tag}</div>
              <div className="project-overlay">
                <a href="#contact" className="btn btn-primary project-enquire">
                  Enquire Now
                </a>
              </div>
            </div>
            <div className="project-info">
              <div className="project-meta">
                <span className="project-type">{p.type}</span>
                <span
                  className="project-status"
                  style={{ color: p.statusColor, borderColor: p.statusColor + '33', background: p.statusColor + '11' }}
                >
                  {p.status}
                </span>
              </div>
              <h3 className="project-name serif">{p.name}</h3>
              <div className="project-details">
                <span>📍 {p.location}</span>
                <span>🏠 {p.units}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="projects-cta">
        <a href="#contact" className="btn btn-outline">
          Discuss Your Requirements →
        </a>
      </div>
    </section>
  )
}
