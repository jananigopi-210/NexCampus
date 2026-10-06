import { ArrowUpRight, Camera, Leaf, Network } from 'lucide-react'

const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Impact', href: '#impact' },
  { label: 'About', href: '#about' },
]

function Footer() {
  return (
    <footer className="site-footer" id="about">
      <div className="page-shell">
        <div className="footer-main">
          <div className="footer-brand-block"><a className="brand footer-brand" href="#home"><span className="brand-mark"><Leaf size={18} strokeWidth={2.4} /></span><span>Nex<span>Campus</span></span></a><p>AI-Powered Campus<br />Incident Intelligence</p></div>
          <div className="footer-nav" aria-label="Footer navigation">{footerLinks.map((link) => <a key={link.label} href={link.href}>{link.label}<ArrowUpRight size={12} /></a>)}</div>
          <div className="footer-social"><span className="footer-social-label">Follow the change</span><div><span aria-label="Photo updates coming soon"><Camera size={16} /></span><span aria-label="Community network coming soon"><Network size={16} /></span></div></div>
        </div>
        <div className="footer-bottom"><span>© 2026 NexCampus. Built for a smarter campus.</span><span className="footer-bottom-note"><span /> Thoughtful technology, stronger communities.</span></div>
      </div>
    </footer>
  )
}

export default Footer