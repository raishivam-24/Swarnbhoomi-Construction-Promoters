import { useState } from 'react'
import './Projects.css'

const PROJECTS = [
  {
    id: 1,
    name: 'Krishna Vihar',
    type: 'Residential',
    location: 'Koni Main Road, Near New Commissioner Office, Bilaspur',
    shortLocation: 'Koni Road, Bilaspur',
    units: '2 BHK · 3 BHK · Plots',
    status: 'Ongoing',
    statusColor: '#B8860B',
    img: '/image/krishna-vihar/poster.png',
    imgs: [
      '/image/krishna-vihar/poster.png',
      '/image/krishna-vihar/layout.png',
    ],
    tag: 'Premium Township',
    tagline: 'Premium Living. Affordable Price.',
    badge: "Bilaspur's Most Premium & Affordable Township",
    rera: 'TNC Approved',
    price: '₹2,850 per sq.ft',
    phone: ['8103936564'],
    address: 'Near New Multispeciality Hospital, Koni Road, Bilaspur (C.G.)',
    highlights: ['Two Spacious Gardens', 'Wide Roads', '24/7 Security', 'Mandir', 'Community Hall'],
    amenities: [
      { icon: '🛣️', label: '40ft & 30ft Wide Roads' },
      { icon: '🛕', label: 'Temple & Garden' },
      { icon: '💧', label: '24×7 Water Supply' },
      { icon: '⚡', label: 'Electricity Supply' },
      { icon: '🚪', label: 'Attractive Entry Gate' },
      { icon: '🏘️', label: 'Underground Drainage' },
      { icon: '🔒', label: '24/7 Security' },
      { icon: '🏛️', label: 'Community Hall' },
    ],
    offerings: [
      { label: '2 BHK', sub: 'Lavish Homes' },
      { label: '3 BHK', sub: 'Lavish Homes' },
      { label: 'Plots', sub: 'Build Your Dream Home' },
    ],
    nearbyLocations: [],
    desc: 'एक सपना, एक विश्वास, एक बेहतर जीवन की शुरुआत। Bilaspur Koni Main Road, near New Commissioner Office — a TNC approved residential project with premium infrastructure and modern amenities. Secure investment + great location + excellent future returns.',
    // instagram: 'https://www.instagram.com/shriramparkbsp',
    ctaLabel: 'Book Now — ₹2,850/sq.ft',
  },
  {
    id: 2,
    name: 'Arpa Business Park',
    type: 'Commercial',
    location: 'Sendri, Near Jungle Dhaba, Koni Road, Bilaspur (C.G.)',
    shortLocation: 'Koni Road, Bilaspur',
    units: 'Premium Shops · Commercial Plots',
    status: 'Ongoing',
    statusColor: '#B8860B',
    img: '/image/arpa/front-view.png',
    imgs: [
      '/image/arpa/front-view.png',
      '/image/arpa/layout.png',
      '/image/arpa/construction-area.png',
      '/image/arpa/poster.png',
    ],
    tag: "Bilaspur's Biggest",
    tagline: "Bilaspur's Most Futuristic & Biggest Commercial Project",
    badge: 'The New Business Destination of Bilaspur — Where Business Meets Growth',
    rera: 'RERA Registered',
    price: 'On Request',
    phone: ['6005538340', '9926156896'],
    address: 'Sendri, Near Jungle Dhaba, Koni, Bilaspur (C.G.) | National Highway, Ratanpur Road, Bilaspur',
    highlights: ['Wide Roads', 'Multiple Parking', 'Separate Transformer', 'Street Lights', 'Drainage System', '24/7 Water Supply'],
    amenities: [
      { icon: '🛣️', label: 'Wide Roads' },
      { icon: '🅿️', label: 'Multiple Parking Space' },
      { icon: '⚡', label: 'Separate Transformer' },
      { icon: '💡', label: 'Street Lights' },
      { icon: '🌊', label: 'Drainage System' },
      { icon: '💧', label: '24/7 Water Supply' },
    ],
    offerings: [
      { label: 'Premium Shops', sub: 'High Footfall. High Returns.' },
      { label: 'Commercial Plots', sub: 'Build Your Business, Your Way.' },
    ],
    nearbyLocations: [],
    desc: "Grow Your Business. Build Your Legacy. Bilaspur's most futuristic and biggest commercial project at Koni Road — the new business destination where business meets growth. Premium shops and commercial plots with world-class amenities.",
    instagram: 'https://www.instagram.com/arpabusinesspark_bilaspur',
    ctaLabel: 'Book Now — 60055 38340',
  },
  {
    id: 3,
    name: '3A Commercial Business Complex',
    type: 'Commercial',
    location: 'Gandhi Chowk, Bilaspur (C.G.) — Prime Location',
    shortLocation: 'Gandhi Chowk, Bilaspur',
    units: 'Premium Commercial Shops',
    status: 'Completed',
    statusColor: '#2D6A4F',
    img: '/image/3a/building-dome.png',
    imgs: [
      '/image/3a/building-side.png',
      '/image/3a/building-dome.png',
      '/image/3a/construction.png',
      '/image/3a/3d-render.png',
      '/image/3a/classroom.png',
      '/image/3a/ad-poster.png',
    ],
    tag: 'Landmark',
    tagline: 'Premium Commercial Shop For Sale @ Prime Location',
    badge: 'TNCP RERA Registered — Gandhi Chowk Bilaspur',
    rera: 'TNCP RERA Registered',
    price: 'On Request',
    phone: ['6005538340', '9926156896'],
    address: 'Gandhi Chowk, Bilaspur (C.G.)',
    highlights: ["44' Grand Entrance Gate", '35000 sq.ft Basement Parking', '2 High Speed Lifts', '24hr Electricity + Power Backup', 'RO Water Supply', 'CCTV + Security'],
    amenities: [
      { icon: '🚪', label: "Grand Entrance Gate — 44' Wide" },
      { icon: '🅿️', label: '35,000 sq.ft Basement Parking' },
      { icon: '🛗', label: '2 High Speed Lifts (10 Passenger)' },
      { icon: '⚡', label: '24hr Electricity + Power Backup' },
      { icon: '💧', label: '24hr RO Water Supply' },
      { icon: '🔌', label: 'Personal Transformer' },
      { icon: '📹', label: 'CCTV Cameras' },
      { icon: '🛡️', label: 'Security Guard' },
      { icon: '🔥', label: 'Fire Safety Equipment' },
      { icon: '🧱', label: 'Covered Boundary Wall' },
      { icon: '🚻', label: '10 Washrooms (Ladies & Gents)' },
      { icon: '🏙️', label: 'Complete Glass Elevation (Mall Design)' },
    ],
    offerings: [
      { label: 'Commercial Shops', sub: 'A Mall System Design' },
    ],
    nearbyLocations: [],
    desc: 'Premium Commercial Shop For Sale at prime location — Gandhi Chowk Bilaspur CG. TNCP RERA Registered. Complete glass elevation with mall-system design. 35,000 sq.ft basement parking, 2 high-speed lifts, 24hr RO water, personal transformer and full security.',
    instagram: 'https://www.instagram.com/3acommercial_businesscomplex',
    ctaLabel: 'Enquire — 60055 38340',
  },
  {
    id: 4,
    name: 'Bilaspur Textile Market',
    type: 'Commercial',
    location: 'Ahead of Rama World, Bilaspur-Raipur Road, Bilaspur (C.G.)',
    shortLocation: 'Bilaspur-Raipur Road',
    units: 'Duplex Shops',
    status: 'Ongoing',
    statusColor: '#2D6A4F',
    img: '/image/textile-market/front-view.png',
    imgs: [
      '/image/textile-market/front-view.png',
      '/image/textile-market/board.png',
      '/image/textile-market/front-gate.png',
      '/image/textile-market/construction.png',
      '/image/textile-market/poster.png',
    ],
    tag: "Division's Largest",
    tagline: "Bilaspur Division's Largest Textile Market",
    badge: 'Make Your Business the Center of Attraction',
    rera: 'RERA Approved',
    price: 'On Request',
    phone: ['9926156896', '6005538340'],
    address: 'Ahead of Rama World, Bilaspur-Raipur Road (Chhattisgarh) · G-37, Swarn Chamber, In front of Chhattisgarh High Court, Bilaspur (CG)',
    highlights: ['Duplex Shops', 'In-Built Bank', 'In-Built Restaurant', 'RERA Approved', 'CCTV Cameras', '24/7 Security Guards', 'Drainage System', 'Dedicated Parking'],
    amenities: [
      { icon: '🏦', label: 'In-Built Bank' },
      { icon: '🍽️', label: 'In-Built Restaurant' },
      { icon: '✅', label: 'RERA Approved Property' },
      { icon: '📹', label: 'CCTV Cameras' },
      { icon: '🛡️', label: '24/7 Security Guards' },
      { icon: '🌊', label: 'Modern Drainage System' },
      { icon: '🅿️', label: 'Dedicated Parking Space' },
      { icon: '📍', label: 'Prime Business Location' },
    ],
    offerings: [
      { label: 'Duplex Shops', sub: 'Get Your Own Duplex Shop' },
    ],
    nearbyLocations: [],
    desc: "Bilaspur Division's Largest Textile Market — BTM. Do you have a textile business? Get your own Duplex Shop at Bilaspur's largest textile market. RERA approved with in-built bank, restaurant, CCTV, 24/7 security guards and dedicated parking space.",
    instagram: 'https://www.instagram.com/bilaspur.textile.market',
    ctaLabel: 'Book Duplex Shop',
  },
  {
    id: 5,
    name: 'Shri Ram Park',
    type: 'Residential',
    location: 'Ashok Nagar, Birkona Road, Bilaspur (C.G.)',
    shortLocation: 'Birkona Road, Bilaspur',
    units: 'Residential Plots',
    status: 'Completed',
    statusColor: '#2D6A4F',
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=85',
    imgs: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=85',
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=85',
      'https://images.unsplash.com/photo-1448630360428-65456885c650?w=800&q=85',
    ],
    tag: 'RERA Approved',
    tagline: 'लोकेशन ऐसी — जहाँ रहने को दिल करे',
    badge: 'आपके सपनों का पता — शहर से नहीं दूर, प्रकृति का आनंद भरपूर',
    rera: 'PCGRERA300824001817',
    price: 'On Request',
    phone: ['7898910105', '7898910106'],
    address: 'Office: Ganesh Vatika, Ashok Nagar, Birkona Road, Bilaspur · Site: Ashok Nagar, Birkona Road, Bilaspur (C.G.)',
    highlights: ['Grand Entry', 'Landscape Garden', 'Kids Play Area', 'Open Gym', 'Temple', 'Street Light', 'Gathering Space', 'Boundary Wall', 'Gazebo', 'CCTV Secure', 'Water Supply', 'Site on Road'],
    amenities: [
      { icon: '🚪', label: 'Grand Entry Gate' },
      { icon: '🌳', label: 'Landscape Garden' },
      { icon: '🛝', label: 'Kids Play Area' },
      { icon: '🏋️', label: 'Open Gym' },
      { icon: '🛕', label: 'Temple' },
      { icon: '💡', label: 'Street Lights' },
      { icon: '👥', label: 'Gathering / Community Space' },
      { icon: '🧱', label: 'Boundary Wall' },
      { icon: '⛩️', label: 'Gazebo' },
      { icon: '📹', label: 'CCTV Secure' },
      { icon: '💧', label: 'Water Supply' },
      { icon: '🛣️', label: 'Wide Roads' },
    ],
    offerings: [
      { label: 'Residential Plots', sub: 'Build Your Dream Home' },
    ],
    nearbyLocations: [
      { place: 'Railway Station', time: '20 Min', icon: '🚆' },
      { place: 'School', time: '5 Min', icon: '🏫' },
      { place: 'Market', time: '5 Min', icon: '🛒' },
      { place: 'Hospital', time: '10 Min', icon: '🏥' },
      { place: 'Petrol Pump', time: '7 Min', icon: '⛽' },
      { place: 'Temple', time: '5 Min', icon: '🛕' },
    ],
    desc: 'आपके सपनों का पता — Shri Ram Park. RERA Approved (PCGRERA300824001817). 100+ families already living. Premium plotted township in Ashok Nagar, Birkona Road, Bilaspur. आज प्लॉट की खरीददारी, मतलब कल की तरक्की! Plots in a premium township with all modern amenities, eco-friendly environment, and excellent connectivity.',
    instagram: 'https://www.instagram.com/shriramparkbsp',
    ctaLabel: 'Book Now — 7898910105',
  },
]

const FILTERS = ['All', 'Residential', 'Commercial']

export default function Projects() {
  const [filter,   setFilter]   = useState('All')
  const [selected, setSelected] = useState(null)
  const [imgIdx,   setImgIdx]   = useState(0)

  const visible = filter === 'All' ? PROJECTS : PROJECTS.filter(p => p.type === filter)

  const openModal = (p) => { setSelected(p); setImgIdx(0) }
  const closeModal = () => setSelected(null)

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
          From premium residential townships to landmark commercial hubs — every Swarnbhoomi project is crafted with integrity, quality and community in mind.
        </p>
      </div>

      {/* Stats */}
      {/* <div className="projects-stats">
        <div className="ps-item"><span className="ps-num serif">6+</span><span className="ps-lbl">Projects</span></div>
        <div className="ps-divider" />
        <div className="ps-item"><span className="ps-num serif">3</span><span className="ps-lbl">Completed</span></div>
        <div className="ps-divider" />
        <div className="ps-item"><span className="ps-num serif">3</span><span className="ps-lbl">Ongoing</span></div>
        <div className="ps-divider" />
        <div className="ps-item"><span className="ps-num serif">500+</span><span className="ps-lbl">Happy Families</span></div>
        <div className="ps-divider" />
        <div className="ps-item"><span className="ps-num serif">8103936564</span><span className="ps-lbl">Call Us</span></div>
      </div> */}

      {/* Filters */}
      <div className="projects-filters">
        {FILTERS.map(f => (
          <button key={f} className={`filter-btn${filter === f ? ' filter-btn--active' : ''}`} onClick={() => setFilter(f)}>{f}</button>
        ))}
      </div>

      {/* Grid */}
      <div className="projects-grid">
        {visible.map(p => (
          <div className="project-card" key={p.id} onClick={() => openModal(p)}>
            <div className="project-img">
              <img src={p.img} alt={p.name} loading="lazy" />
              <div className="project-tag">{p.tag}</div>
              <div className="project-overlay"><span className="overlay-hint">View Details</span></div>
            </div>
            <div className="project-info">
              <div className="project-meta">
                <span className="project-type">{p.type}</span>
                <span className="project-status" style={{ color: p.statusColor, borderColor: p.statusColor + '40', background: p.statusColor + '12' }}>{p.status}</span>
              </div>
              <h3 className="project-name serif">{p.name}</h3>
              <p className="project-tagline">{p.tagline}</p>
              <div className="project-details">
                <span>📍 {p.shortLocation}</span>
                <span>🏠 {p.units}</span>
                {p.price !== 'On Request' && <span>💰 {p.price}</span>}
                {p.rera && <span>✅ {p.rera}</span>}
              </div>
              <div className="project-chips">
                {p.highlights.slice(0, 3).map(h => <span className="project-chip" key={h}>{h}</span>)}
              </div>
              <div className="project-actions">
                <a href={`tel:${p.phone[0]}`} className="btn btn-primary proj-btn" onClick={e => e.stopPropagation()}>
                  📞 {p.phone[0].replace(/(\d{5})(\d{5})/, '$1 $2')}
                </a>
                {p.instagram && (
                  <a href={p.instagram} target="_blank" rel="noopener noreferrer" className="btn proj-btn-ig" onClick={e => e.stopPropagation()}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                    Instagram
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── MODAL ── */}
      {selected && (
        <div className="proj-modal-bg" onClick={closeModal}>
          <div className="proj-modal" onClick={e => e.stopPropagation()}>

            {/* Close */}
            <button className="modal-close" onClick={closeModal}>✕</button>

            {/* Left — images */}
            <div className="modal-left">
              <div className="modal-main-img">
                <img src={selected.imgs[imgIdx]} alt={selected.name} />
                <div className="modal-tag">{selected.tag}</div>
                <span className="modal-status" style={{ color: selected.statusColor, background: selected.statusColor + '15', borderColor: selected.statusColor + '40' }}>
                  {selected.status}
                </span>
              </div>
              {/* Thumbnails */}
              <div className="modal-thumbs">
                {selected.imgs.map((img, i) => (
                  <div key={i} className={`modal-thumb${i === imgIdx ? ' modal-thumb--active' : ''}`} onClick={() => setImgIdx(i)}>
                    <img src={img} alt="" />
                  </div>
                ))}
              </div>
              {/* Quick contact */}
              <div className="modal-quick-contact">
                {selected.phone.map(ph => (
                  <a key={ph} href={`tel:${ph}`} className="mqc-btn mqc-call">
                    📞 {ph.replace(/(\d{5})(\d{5})/, '$1 $2')}
                  </a>
                ))}
                <a href={`https://wa.me/91${selected.phone[0]}`} target="_blank" rel="noopener noreferrer" className="mqc-btn mqc-wa">
                  💬 WhatsApp
                </a>
              </div>
            </div>

            {/* Right — details */}
            <div className="modal-right">
              <div className="modal-type-row">
                <span className="modal-type-badge">{selected.type}</span>
                {selected.rera && <span className="modal-rera-badge">✅ {selected.rera}</span>}
              </div>
              <h2 className="modal-name serif">{selected.name}</h2>
              <p className="modal-tagline serif"><em>"{selected.tagline}"</em></p>
              {selected.badge && <div className="modal-badge-strip">{selected.badge}</div>}

              <div className="gold-rule" style={{ margin: '16px 0' }} />

              {/* Info row */}
              <div className="modal-info-row">
                <div className="modal-info-item">
                  <span className="mi-label">📍 Address</span>
                  <span className="mi-val">{selected.address}</span>
                </div>
                <div className="modal-info-item">
                  <span className="mi-label">🏠 Offerings</span>
                  <span className="mi-val">{selected.units}</span>
                </div>
                {selected.price !== 'On Request' && (
                  <div className="modal-info-item">
                    <span className="mi-label">💰 Price</span>
                    <span className="mi-val" style={{ color: '#7B1C2E', fontWeight: 700 }}>{selected.price}</span>
                  </div>
                )}
              </div>

              {/* Description */}
              <p className="modal-desc">{selected.desc}</p>

              {/* Offerings */}
              {selected.offerings.length > 0 && (
                <div className="modal-offerings">
                  <div className="modal-section-label">Premium Offerings</div>
                  <div className="modal-offerings-row">
                    {selected.offerings.map(o => (
                      <div className="offering-pill" key={o.label}>
                        <div className="op-label">{o.label}</div>
                        <div className="op-sub">{o.sub}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Amenities */}
              <div className="modal-amenities">
                <div className="modal-section-label">World Class Amenities</div>
                <div className="amenities-mini-grid">
                  {selected.amenities.map(a => (
                    <div className="ami-item" key={a.label}>
                      <span className="ami-icon">{a.icon}</span>
                      <span className="ami-label">{a.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Nearby locations */}
              {selected.nearbyLocations.length > 0 && (
                <div className="modal-nearby">
                  <div className="modal-section-label">Nearest Locations</div>
                  <div className="nearby-grid">
                    {selected.nearbyLocations.map(n => (
                      <div className="nearby-item" key={n.place}>
                        <span className="nearby-icon">{n.icon}</span>
                        <span className="nearby-place">{n.place}</span>
                        <span className="nearby-time">{n.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="modal-actions">
                <a href={`tel:${selected.phone[0]}`} className="btn btn-primary modal-act-btn">
                  {selected.ctaLabel}
                </a>
                {selected.instagram && (
                  <a href={selected.instagram} target="_blank" rel="noopener noreferrer" className="btn btn-outline modal-act-btn">
                    Instagram →
                  </a>
                )}
                <a href="#contact" className="btn btn-gold modal-act-btn" onClick={closeModal}>
                  Enquire Now
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}