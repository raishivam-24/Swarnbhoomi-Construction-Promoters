import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [form, setForm]       = useState({ name: '', phone: '', email: '', type: '', msg: '' })
  const [submitted, setSubmit]= useState(false)

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }))

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.phone) return
    setSubmit(true)
  }

  const INFO = [
    {
      icon: '📍',
      label: 'Registered Office',
      lines: ['G-37, Swarn Chambers,', 'Highcourt Road, Bilaspur', 'Chhattisgarh — 495001'],
    },
    {
      icon: '📞',
      label: 'Phone',
      lines: ['+91 XXXXX XXXXX', 'Mon – Sat · 10 AM – 7 PM'],
    },
    {
      icon: '🏛️',
      label: 'RERA Number',
      lines: ['CGRERA300824A000826', 'Valid: Aug 2024 – Aug 2029'],
    },
    {
      icon: '✅',
      label: 'ISO Certification',
      lines: ['ISO 9001 : 2015', 'Cert. No. E2024049781'],
    },
  ]

  return (
    <section className="contact section" id="contact">
      {/* Header */}
      <div className="contact-header">
        <span className="section-label">Let's Talk</span>
        <div className="gold-rule" />
        <h2 className="contact-title serif">
          Build Your Future<br /><em>With Us</em>
        </h2>
      </div>

      <div className="contact-grid">
        {/* Info */}
        <div className="contact-info">
          <p className="contact-intro">
            Whether you're looking for your first home, a premium investment, or commercial space — our team in Bilaspur is ready to guide you at every step.
          </p>
          <div className="info-cards">
            {INFO.map(c => (
              <div className="info-card" key={c.label}>
                <div className="info-icon">{c.icon}</div>
                <div>
                  <div className="info-label">{c.label}</div>
                  {c.lines.map((l, i) => (
                    <div className="info-line" key={i}>{l}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Trust badges */}
          <div className="contact-trust">
            <div className="trust-badge">
              <span>⭐</span>
              <div>
                <div className="tb-title">RERA Registered</div>
                <div className="tb-sub">Chhattisgarh State</div>
              </div>
            </div>
            <div className="trust-badge">
              <span>🏆</span>
              <div>
                <div className="tb-title">ISO 9001:2015</div>
                <div className="tb-sub">Quality Certified</div>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="contact-form-wrap">
          {submitted ? (
            <div className="form-success">
              <div className="success-icon">✅</div>
              <h3 className="serif">Thank You, {form.name}!</h3>
              <p>We've received your enquiry. Our team will contact you at <strong>{form.phone}</strong> within 24 hours.</p>
              <button className="btn btn-outline" onClick={() => { setSubmit(false); setForm({ name:'', phone:'', email:'', type:'', msg:'' }) }}>
                Send Another Enquiry
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-title-row">
                <h3 className="form-title serif">Enquiry Form</h3>
                <span className="form-subtitle">We respond within 24 hrs</span>
              </div>

              <div className="form-row-2">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input type="text" placeholder="Your full name" value={form.name} onChange={e => set('name', e.target.value)} required />
                </div>
                <div className="form-group">
                  <label>Phone *</label>
                  <input type="tel" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={e => set('phone', e.target.value)} required />
                </div>
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="your@email.com" value={form.email} onChange={e => set('email', e.target.value)} />
              </div>
              <div className="form-group">
                <label>I'm interested in</label>
                <select value={form.type} onChange={e => set('type', e.target.value)}>
                  <option value="">Select property type</option>
                  <option>Residential Flat — 2 BHK</option>
                  <option>Residential Flat — 3 BHK</option>
                  <option>Residential Flat — 4 BHK</option>
                  <option>Commercial Office Space</option>
                  <option>Plotted Development</option>
                  <option>General Enquiry</option>
                </select>
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea rows={4} placeholder="Tell us about your requirements..." value={form.msg} onChange={e => set('msg', e.target.value)} />
              </div>
              <button type="submit" className="btn btn-primary form-submit">
                Send Enquiry
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
