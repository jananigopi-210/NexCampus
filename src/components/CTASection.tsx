import { ArrowRight, Leaf, MoveUpRight } from 'lucide-react'

function CTASection() {
  return (
    <section className="cta-section" id="get-started">
      <div className="cta-pattern" aria-hidden="true" />
      <div className="page-shell cta-content">
        <span className="cta-mark"><Leaf size={19} /></span>
        <span className="cta-kicker">A better campus starts together</span>
        <h2>Your Campus. Your Voice.<br /><span>Smarter Action.</span></h2>
        <p>Join NexCampus and help build a safer, cleaner and better campus.</p>
        <a className="button button-light" href="#about">Get Started <ArrowRight size={17} /></a>
        <span className="cta-orbit orbit-one" aria-hidden="true"><MoveUpRight size={17} /></span>
        <span className="cta-orbit orbit-two" aria-hidden="true"><Leaf size={14} /></span>
      </div>
    </section>
  )
}

export default CTASection