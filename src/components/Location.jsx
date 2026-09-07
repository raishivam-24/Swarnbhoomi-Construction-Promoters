import './Location.css'

const PROXIMITY = [
  { place: 'Chhattisgarh High Court',     dist: '50 m',    icon: '⚖️' },
  { place: 'Bilaspur Railway Station',    dist: '2.5 km',  icon: '🚆' },
  { place: 'AIIMS Bilaspur',             dist: '5 km',    icon: '🏥' },
  { place: 'Bilaspur Airport',           dist: '12 km',   icon: '✈️' },
  { place: 'Sector 1 Mall',             dist: '1.5 km',  icon: '🛍️' },
  { place: 'NIT Raipur Road',           dist: '3 km',    icon: '🎓' },
  { place: 'Magneto Mall',              dist: '2 km',    icon: '🏬' },
  { place: 'Vyapar Vihar Market',       dist: '1 km',    icon: '🏪' },
]

export default function Location() {
  return (
    <section className="location section" id="location">
      <div className="location-header">
        <span className="section-label">Where We Are</span>
        <div className="gold-rule" />
        <h2 className="location-title serif">
          Prime Address,<br /><em>Central Bilaspur</em>
        </h2>
        <p className="location-sub">
          G-37, Swarn Chambers, Highcourt Road, Bilaspur — 495001, Chhattisgarh
        </p>
      </div>

      <div className="location-grid">
        {/* Map */}
        <div className="location-map-wrap">
          <iframe
            title="Swarnbhoomi Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.4!2d82.1391!3d22.0797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDA0JzQ2LjkiTiA4MsKwMDgnMjAuNyJF!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: 2 }}
            allowFullScreen=""
            loading="lazy"
          />
          <div className="map-address-card">
            <div className="map-pin">📍</div>
            <div>
              <div className="map-addr-title">Registered Office</div>
              <div className="map-addr-text">G-37, Swarn Chambers,<br />Chhattisgarh High Court Opposite,<br />Bilaspur, CG — 495001</div>
            </div>
          </div>
        </div>

        {/* Proximity */}
        <div className="location-right">
          <h3 className="proximity-heading serif">Nearby Landmarks</h3>
          <div className="proximity-list">
            {PROXIMITY.map(p => (
              <div className="proximity-row" key={p.place}>
                <span className="prox-icon">{p.icon}</span>
                <span className="prox-name">{p.place}</span>
                <span className="prox-dist">{p.dist}</span>
              </div>
            ))}
          </div>

          {/* Direction CTA */}
          <div className="direction-cta">
            <a
              href="https://maps.google.com/?q=G-37+Swarn+Chambers+Highcourt+Road+Bilaspur+Chhattisgarh"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="3 11 22 2 13 21 11 13 3 11"/>
              </svg>
              Get Directions
            </a>
            <a href="tel:+91" className="btn btn-outline">
              📞 Call Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
