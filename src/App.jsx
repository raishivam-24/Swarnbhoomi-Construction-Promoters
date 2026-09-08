import './index.css'
import Header  from './components/Header.jsx'
import Hero    from './components/Hero.jsx'
import About   from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Location from './components/Location.jsx'
import Contact  from './components/Contact.jsx'
import Footer   from './components/Footer.jsx'

/* Floating WhatsApp + Call */
function FloatButtons() {
  return (
    <div style={{
      position: 'fixed',
      bottom: 28,
      right: 24,
      zIndex: 900,
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
    }}>
      <a
        href="https://wa.me/916005538340"
        target="_blank"
        rel="noopener noreferrer"
        title="WhatsApp"
        style={{
          width: 48, height: 48, borderRadius: '50%',
          background: '#25D366', color: '#fff',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 4px 24px rgba(0,0,0,0.2)',
          fontSize: 22, textDecoration: 'none',
          transition: 'transform 0.2s',
        }}
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
      >💬</a>
      <a
        href="tel:+916005538340"
        title="Call Us"
        style={{
          width: 48, height: 48, borderRadius: '50%',
          background: '#7B1C2E', color: '#fff',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 4px 24px rgba(123,28,46,0.3)',
          fontSize: 20, textDecoration: 'none',
          transition: 'transform 0.2s',
        }}
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
      >📞</a>
    </div>
  )
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Location />
        <Contact />
      </main>
      <Footer />
      <FloatButtons />
    </>
  )
}