import { useState } from 'react'
import './Contact.css'

const PHONE1 = '916005538340'
const PHONE2 = '919926156896'
const DISPLAY1 = '60055 38340'
const DISPLAY2 = '99261 56896'

function sendToWhatsApp(form) {
  const msg =
    `*New Enquiry — Swarnbhoomi Construction*%0A%0A` +
    `*Name:* ${form.name}%0A` +
    `*Phone:* ${form.phone}%0A` +
    `*Email:* ${form.email || 'Not provided'}%0A` +
    `*Interested In:* ${form.type || 'Not specified'}%0A` +
    `*Message:* ${form.msg || 'No message'}%0A%0A` +
    `_Sent from swarnbhoomi.in_`

  // Opens on owner 1 by default; change PHONE1 to PHONE2 for second owner
  window.open(`https://wa.me/${PHONE1}?text=${msg}`, '_blank')
}

export default function Contact() {
  const [form, setForm]       = useState({ name: '', phone: '', email: '', type: '', msg: '' })
  const [submitted, setSubmit]= useState(false)
  const [loading, setLoading] = useState(false)

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }))

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.phone) return
    setLoading(true)
    setTimeout(() => {
      sendToWhatsApp(form)
      setLoading(false)
      setSubmit(true)
    }, 600)
  }

  const INFO = [
    {
      icon: '📍',
      label: 'Registered Office',
      lines: ['G-37, Swarn Chambers,', 'Highcourt Road, Bilaspur', 'Chhattisgarh — 495001'],
    },
    {
      icon: '📞',
      label: 'Owner — Direct Lines',
      lines: [DISPLAY1, DISPLAY2],
      links: [`tel:+91${DISPLAY1.replace(/\s/g,'')}`, `tel:+91${DISPLAY2.replace(/\s/g,'')}`],
    },
    {
      icon: '💬',
      label: 'WhatsApp',
      lines: [DISPLAY1, DISPLAY2],
      wa: [`https://wa.me/${PHONE1}`, `https://wa.me/${PHONE2}`],
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
            Whether you're looking for your first home, a premium investment, or commercial space — our owners are directly reachable. Fill the form and your enquiry goes straight to WhatsApp.
          </p>

          {/* Quick call buttons */}
          <div className="owner-btns">
            <a href={`tel:+91${DISPLAY1.replace(/\s/g,'')}`} className="owner-btn">
              <span className="ob-icon">📞</span>
              <div>
                <div className="ob-label">Owner 1</div>
                <div className="ob-num">{DISPLAY1}</div>
              </div>
            </a>
            <a href={`tel:+91${DISPLAY2.replace(/\s/g,'')}`} className="owner-btn">
              <span className="ob-icon">📞</span>
              <div>
                <div className="ob-label">Owner 2</div>
                <div className="ob-num">{DISPLAY2}</div>
              </div>
            </a>
          </div>

          {/* WhatsApp quick buttons */}
          <div className="wa-btns">
            <a href={`https://wa.me/${PHONE1}`} target="_blank" rel="noopener noreferrer" className="wa-btn">
              <span>💬</span> WhatsApp {DISPLAY1}
            </a>
            <a href={`https://wa.me/${PHONE2}`} target="_blank" rel="noopener noreferrer" className="wa-btn">
              <span>💬</span> WhatsApp {DISPLAY2}
            </a>
          </div>

          <div className="info-cards">
            {INFO.map(c => (
              <div className="info-card" key={c.label}>
                <div className="info-icon">{c.icon}</div>
                <div>
                  <div className="info-label">{c.label}</div>
                  {c.wa
                    ? c.lines.map((l, i) => (
                        <a key={i} href={c.wa[i]} target="_blank" rel="noopener noreferrer" className="info-line info-link">
                          {l}
                        </a>
                      ))
                    : c.links
                    ? c.lines.map((l, i) => (
                        <a key={i} href={c.links[i]} className="info-line info-link">{l}</a>
                      ))
                    : c.lines.map((l, i) => (
                        <div className="info-line" key={i}>{l}</div>
                      ))
                  }
                </div>
              </div>
            ))}
          </div>

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
              <h3 className="serif">Sent to WhatsApp!</h3>
              <p>
                Your enquiry has been sent directly to our owner's WhatsApp.
                Expect a call back on <strong>{form.phone}</strong> within a few hours.
              </p>
              <div className="success-wa-btns">
                <a href={`https://wa.me/${PHONE1}`} target="_blank" rel="noopener noreferrer" className="btn btn-wa">
                  💬 Also message {DISPLAY1}
                </a>
                <a href={`https://wa.me/${PHONE2}`} target="_blank" rel="noopener noreferrer" className="btn btn-wa">
                  💬 Also message {DISPLAY2}
                </a>
              </div>
              <button className="btn btn-outline" style={{ marginTop: 12 }}
                onClick={() => { setSubmit(false); setForm({ name:'', phone:'', email:'', type:'', msg:'' }) }}>
                Send Another Enquiry
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-title-row">
                <h3 className="form-title serif">Enquiry Form</h3>
                <span className="form-wa-badge">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="#25D366">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Sends to WhatsApp
                </span>
              </div>

              <div className="form-row-2">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input type="text" placeholder="Your full name" value={form.name}
                    onChange={e => set('name', e.target.value)} required />
                </div>
                <div className="form-group">
                  <label>Phone *</label>
                  <input type="tel" placeholder="+91 XXXXX XXXXX" value={form.phone}
                    onChange={e => set('phone', e.target.value)} required />
                </div>
              </div>

              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="your@email.com" value={form.email}
                  onChange={e => set('email', e.target.value)} />
              </div>

              <div className="form-group">
                <label>I'm interested in</label>
                <select value={form.type} onChange={e => set('type', e.target.value)}>
                  <option value="">Select property type</option>
                  <option>Krishna Vihar — 2 BHK</option>
                  <option>Krishna Vihar — 3 BHK</option>
                  <option>Krishna Vihar — Plot</option>
                  <option>Arpa Business Park — Showroom</option>
                  <option>Arpa Business Park — Shop</option>
                  <option>Arpa Business Park — Warehouse</option>
                  <option>3A Commercial Business Complex</option>
                  <option>Bilaspur Textile Market</option>
                  <option>Shriram Park — Plot / Villa</option>
                  <option>General Enquiry</option>
                </select>
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea rows={4} placeholder="Tell us about your requirements..."
                  value={form.msg} onChange={e => set('msg', e.target.value)} />
              </div>

              <button type="submit" className="btn btn-wa form-submit" disabled={loading}>
                {loading ? 'Opening WhatsApp...' : (
                  <>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Send via WhatsApp
                  </>
                )}
              </button>
              <p className="form-note">Your enquiry will open directly in WhatsApp and be sent to our owner.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}