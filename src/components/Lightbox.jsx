import { useEffect } from 'react'
import './Lightbox.css'

export default function Lightbox({ src, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div className="lb-bg" onClick={onClose}>
      <button className="lb-close" onClick={onClose}>✕</button>
      <div className="lb-img-wrap" onClick={e => e.stopPropagation()}>
        <img src={src} alt="Full view" className="lb-img" />
      </div>
      <p className="lb-hint">Press ESC or click outside to close</p>
    </div>
  )
}