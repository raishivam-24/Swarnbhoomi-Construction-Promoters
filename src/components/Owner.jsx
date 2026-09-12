import { useState } from 'react'
import './Owner.css'

const PROPERTY_TYPES = [
  'Residential House / Villa',
  'Apartment / Flat',
  'Commercial Shop / Showroom',
  'Office Space',
  'Warehouse / Industrial',
  'Plotted Development',
  'Township Project',
  'Renovation / Extension',
  'Other',
]

const BUDGET_RANGES = [
  'Under ₹20 Lakhs',
  '₹20 – ₹50 Lakhs',
  '₹50 Lakhs – ₹1 Crore',
  '₹1 – ₹2 Crore',
  '₹2 – ₹5 Crore',
  'Above ₹5 Crore',
  'Not Decided Yet',
]

const TIMELINE = [
  'Immediately (Within 1 Month)',
  '1 – 3 Months',
  '3 – 6 Months',
  '6 Months – 1 Year',
  'More Than 1 Year',
  'Just Exploring',
]

function sendAppointmentToWhatsApp(form) {
  const msg =
    `🏗️ *New Construction Appointment Request*%0A%0A` +
    `👤 *Name:* ${form.name}%0A` +
    `📞 *Phone:* ${form.phone}%0A` +
    `📧 *Email:* ${form.email || 'Not provided'}%0A` +
    `📍 *Land Location:* ${form.location}%0A` +
    `🏠 *Property Type:* ${form.propertyType}%0A` +
    `📐 *Plot Size:* ${form.plotSize || 'Not provided'}%0A` +
    `💰 *Budget:* ${form.budget}%0A` +
    `📅 *Preferred Date:* ${form.date || 'Not provided'}%0A` +
    `⏱️ *Timeline:* ${form.timeline}%0A` +
    `📝 *Requirements:* ${form.requirements || 'None'}%0A%0A` +
    `_Appointment requested via swarnbhoomi.in_`
  window.open(`https://wa.me/916005538340?text=${msg}`, '_blank')
}

export default function Owners() {
  const [form, setForm] = useState({
    name: '', phone: '', email: '', location: '',
    propertyType: '', plotSize: '', budget: '',
    date: '', timeline: '', requirements: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading]     = useState(false)
  const [errors, setErrors]       = useState({})

  const set = (k, v) => { setForm(f => ({ ...f, [k]: v })); setErrors(e => ({ ...e, [k]: '' })) }

  const validate = () => {
    const e = {}
    if (!form.name.trim())     e.name = 'Name is required'
    if (!form.phone.trim())    e.phone = 'Phone is required'
    if (!form.location.trim()) e.location = 'Land location is required'
    if (!form.propertyType)    e.propertyType = 'Please select property type'
    if (!form.budget)          e.budget = 'Please select budget range'
    if (!form.timeline)        e.timeline = 'Please select timeline'
    return e
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setLoading(true)
    setTimeout(() => { sendAppointmentToWhatsApp(form); setLoading(false); setSubmitted(true) }, 700)
  }

  const reset = () => {
    setSubmitted(false)
    setForm({ name:'', phone:'', email:'', location:'', propertyType:'', plotSize:'', budget:'', date:'', timeline:'', requirements:'' })
    setErrors({})
  }

  return (
    <section className="owners-section section" id="owners">

      {/* ── Section Header ── */}
      <div className="owners-header">
        <span className="section-label">Meet the Owner</span>
        <div className="gold-rule" />
        <h2 className="owners-title serif">
          The Vision Behind<br /><em>Swarnbhoomi</em>
        </h2>
        <p className="owners-subtitle">
          Directly connect with our owner — no middlemen, no delays. Your project gets personal attention from day one.
        </p>
      </div>

      {/* ── Owner Card ── */}
      <div className="owner-single-wrap">
        <div className="owner-card-grand">

          {/* Photo side */}
          <div className="ocg-photo-side">
            <div className="ocg-photo-frame">
              <img
                src="/image/owner/vaibhav-jaiswal.png"
                alt="Vaibhav Jaiswal — Owner, Swarnbhoomi Construction"
              />
              <div className="ocg-photo-overlay" />
            </div>
            {/* Gold nameplate */}
            <div className="ocg-nameplate">
              <div className="ocg-name serif">Vaibhav Jaiswal</div>
              <div className="ocg-role">Owner & Director</div>
              <div className="ocg-company">Swarnbhoomi Construction & Promoters</div>
            </div>
          </div>

          {/* Info side */}
          <div className="ocg-info-side">
            {/* Credentials row */}
            <div className="ocg-creds">
              <div className="ocg-cred">
                <span className="cred-icon">✅</span>
                <div>
                  <div className="cred-label">RERA Registered</div>
                  <div className="cred-val">CGRERA300824A000826</div>
                </div>
              </div>
              <div className="ocg-cred">
                <span className="cred-icon">🏆</span>
                <div>
                  <div className="cred-label">ISO 9001:2015</div>
                  <div className="cred-val">Cert. No. E2024049781</div>
                </div>
              </div>
            </div>

            {/* Quote */}
            <blockquote className="ocg-quote serif">
              "हम सिर्फ इमारतें नहीं बनाते —<br />
              हम सपनों का घर बनाते हैं।"
              <span className="quote-translation">We don't just build structures — we build dream homes.</span>
            </blockquote>

            {/* Office address */}
            <div className="ocg-address-card">
              <div className="addr-icon">🏢</div>
              <div>
                <div className="addr-label">Office Address</div>
                <div className="addr-line">3A Commercial Business Complex</div>
                <div className="addr-line">Shop No. 11, 3rd Floor</div>
                <div className="addr-line">Gandhi Chowk, Bilaspur (C.G.)</div>
              </div>
            </div>

            {/* Expertise */}
            <div className="ocg-expertise">
              <div className="exp-label">Areas of Expertise</div>
              <div className="exp-chips">
                {['Residential Townships', 'Commercial Projects', 'RERA Compliance', 'Business Parks', 'Plotted Development', 'Investment Properties'].map(ex => (
                  <span className="exp-chip" key={ex}>✓ {ex}</span>
                ))}
              </div>
            </div>

            {/* Contact buttons */}
            <div className="ocg-contact-btns">
              <a href="tel:+916005538340" className="ocg-btn ocg-call">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6 6l.72-.88a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.27 16z"/>
                </svg>
                60055 38340
              </a>
              <a href="tel:+919926156896" className="ocg-btn ocg-call2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6 6l.72-.88a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.27 16z"/>
                </svg>
                99261 56896
              </a>
              <a href="https://wa.me/916005538340" target="_blank" rel="noopener noreferrer" className="ocg-btn ocg-wa">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </a>
              <a href="#appointment" className="ocg-btn ocg-appt"
                onClick={e => { e.preventDefault(); document.querySelector('#appointment')?.scrollIntoView({ behavior:'smooth' }) }}>
                📅 Book Appointment
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Appointment Form ── */}
      <div className="appt-section" id="appointment">
        <div className="appt-inner">

          {/* Left info */}
          <div className="appt-left">
            <span className="section-label">Start Your Project</span>
            <div className="gold-rule" />
            <h2 className="appt-title serif">
              Book a Free<br /><em>Consultation</em>
            </h2>
            <p className="appt-subtitle">
              Tell us about your dream project. Vaibhav Jaiswal and our team will visit your site, assess requirements and give you a detailed plan — completely free.
            </p>

            <div className="appt-perks">
              {[
                ['🏗️', 'Free Site Visit'],
                ['📐', 'Free Layout Planning'],
                ['💰', 'Free Cost Estimate'],
                ['📋', 'RERA Guidance'],
                ['⚡', 'Response in 24hrs'],
                ['🤝', 'No Obligation'],
              ].map(([icon, label]) => (
                <div className="perk-item" key={label}>
                  <span>{icon}</span><span>{label}</span>
                </div>
              ))}
            </div>

            {/* Process */}
            <div className="appt-process">
              <h4 className="serif">How It Works</h4>
              <div className="process-steps">
                {[
                  ['1', 'Fill the Form',   'Share your project details'],
                  ['2', 'We Contact You',  'Within 24 hours on WhatsApp'],
                  ['3', 'Site Visit',      'Vaibhav Ji visits your plot'],
                  ['4', 'Get Your Plan',   'Design + estimate delivered'],
                ].map(([num, title, desc], i, arr) => (
                  <div key={num}>
                    <div className="process-step">
                      <div className="ps-circle">{num}</div>
                      <div>
                        <div className="ps-title">{title}</div>
                        <div className="ps-desc">{desc}</div>
                      </div>
                    </div>
                    {i < arr.length - 1 && <div className="process-connector" />}
                  </div>
                ))}
              </div>
            </div>

            {/* Owner mini card */}
            <div className="appt-owner-mini">
              <img src="/image/owner/vaibhav-jaiswal.png" alt="Vaibhav Jaiswal" />
              <div>
                <div className="aom-name serif">Vaibhav Jaiswal</div>
                <div className="aom-role">Owner, Swarnbhoomi</div>
                <div className="aom-addr">Shop No. 11, 3rd Floor,<br/>3A Commercial Complex, Gandhi Chowk</div>
              </div>
            </div>
          </div>

          {/* Right form */}
          <div className="appt-form-wrap">
            {submitted ? (
              <div className="appt-success">
                <div className="success-anim">🎉</div>
                <h3 className="serif">Appointment Requested!</h3>
                <p>Thank you <strong>{form.name}</strong>! Your construction consultation request has been sent to Vaibhav Jaiswal's WhatsApp. Expect a call at <strong>{form.phone}</strong> shortly.</p>
                <div className="success-details">
                  <div className="sd-row"><span>Property Type</span><strong>{form.propertyType}</strong></div>
                  <div className="sd-row"><span>Location</span><strong>{form.location}</strong></div>
                  <div className="sd-row"><span>Budget</span><strong>{form.budget}</strong></div>
                  <div className="sd-row"><span>Timeline</span><strong>{form.timeline}</strong></div>
                </div>
                <div className="success-wa-row">
                  <a href="https://wa.me/916005538340" target="_blank" rel="noopener noreferrer" className="btn-wa-sm">💬 Chat — 60055 38340</a>
                  <a href="https://wa.me/919926156896" target="_blank" rel="noopener noreferrer" className="btn-wa-sm">💬 Chat — 99261 56896</a>
                </div>
                <button className="btn btn-outline" onClick={reset}>Book Another Appointment</button>
              </div>
            ) : (
              <form className="appt-form" onSubmit={handleSubmit} noValidate>
                <div className="appt-form-title">
                  <h3 className="serif">Construction Appointment</h3>
                  <span className="wa-pill">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    Sends to WhatsApp
                  </span>
                </div>

                <div className="form-section-label">Personal Details</div>
                <div className="fg-row-2">
                  <div className={`fg${errors.name ? ' fg--error' : ''}`}>
                    <label>Full Name *</label>
                    <input type="text" placeholder="Your full name" value={form.name} onChange={e => set('name', e.target.value)} />
                    {errors.name && <span className="fg-err">{errors.name}</span>}
                  </div>
                  <div className={`fg${errors.phone ? ' fg--error' : ''}`}>
                    <label>Phone Number *</label>
                    <input type="tel" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={e => set('phone', e.target.value)} />
                    {errors.phone && <span className="fg-err">{errors.phone}</span>}
                  </div>
                </div>
                <div className="fg">
                  <label>Email Address</label>
                  <input type="email" placeholder="your@email.com" value={form.email} onChange={e => set('email', e.target.value)} />
                </div>

                <div className="form-section-label" style={{ marginTop: 16 }}>Project Details</div>
                <div className={`fg${errors.location ? ' fg--error' : ''}`}>
                  <label>Plot / Land Location *</label>
                  <input type="text" placeholder="e.g. Koni Road, Bilaspur / Village / Survey No." value={form.location} onChange={e => set('location', e.target.value)} />
                  {errors.location && <span className="fg-err">{errors.location}</span>}
                </div>
                <div className="fg-row-2">
                  <div className={`fg${errors.propertyType ? ' fg--error' : ''}`}>
                    <label>Property Type *</label>
                    <select value={form.propertyType} onChange={e => set('propertyType', e.target.value)}>
                      <option value="">Select type</option>
                      {PROPERTY_TYPES.map(t => <option key={t}>{t}</option>)}
                    </select>
                    {errors.propertyType && <span className="fg-err">{errors.propertyType}</span>}
                  </div>
                  <div className="fg">
                    <label>Plot / Land Size</label>
                    <input type="text" placeholder="e.g. 30×50 ft / 1500 sq.ft" value={form.plotSize} onChange={e => set('plotSize', e.target.value)} />
                  </div>
                </div>
                <div className="fg-row-2">
                  <div className={`fg${errors.budget ? ' fg--error' : ''}`}>
                    <label>Budget Range *</label>
                    <select value={form.budget} onChange={e => set('budget', e.target.value)}>
                      <option value="">Select budget</option>
                      {BUDGET_RANGES.map(b => <option key={b}>{b}</option>)}
                    </select>
                    {errors.budget && <span className="fg-err">{errors.budget}</span>}
                  </div>
                  <div className={`fg${errors.timeline ? ' fg--error' : ''}`}>
                    <label>Start Timeline *</label>
                    <select value={form.timeline} onChange={e => set('timeline', e.target.value)}>
                      <option value="">Select timeline</option>
                      {TIMELINE.map(t => <option key={t}>{t}</option>)}
                    </select>
                    {errors.timeline && <span className="fg-err">{errors.timeline}</span>}
                  </div>
                </div>
                <div className="fg">
                  <label>Preferred Appointment Date</label>
                  <input type="date" value={form.date} onChange={e => set('date', e.target.value)} style={{ colorScheme: 'light' }} />
                </div>
                <div className="fg">
                  <label>Special Requirements</label>
                  <textarea rows={3} placeholder="e.g. Vastu compliant, G+2 floors, 2 car parking, modern design..." value={form.requirements} onChange={e => set('requirements', e.target.value)} />
                </div>

                <button type="submit" className="appt-submit" disabled={loading}>
                  {loading ? 'Opening WhatsApp…' : (
                    <>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                      Book Free Consultation via WhatsApp
                    </>
                  )}
                </button>
                <p className="appt-note">Free site visit · No hidden charges · RERA guidance included</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}