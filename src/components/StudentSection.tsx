import { ArrowRight, Check, MapPin, ShieldCheck, Sparkles } from 'lucide-react'

const benefits = [
  'Easy issue reporting',
  'Upload photos',
  'Add location',
  'Track status in real-time',
  'Verify resolution',
  'Reopen if not fixed',
]

function StudentSection() {
  return (
    <section className="student-section section-space" id="for-students">
      <div className="page-shell split-layout">
        <div className="student-visual">
          <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1300&q=85" alt="University students studying together in a campus library" loading="lazy" />
          <div className="student-image-shade" />
          <div className="student-image-label"><span><MapPin size={15} /></span><div><small>YOUR CAMPUS, IN VIEW</small><strong>Small reports. Real change.</strong></div></div>
          <div className="student-status-card"><span className="status-card-icon"><ShieldCheck size={17} /></span><div><small>ISSUE STATUS</small><strong>Resolved by Maintenance</strong><span><Check size={12} /> Verified by students</span></div></div>
          <span className="student-sparkle"><Sparkles size={17} /></span>
        </div>
        <div className="section-intro student-copy">
          <span className="section-kicker">Your voice, with follow-through</span>
          <h2>For <span>Students</span></h2>
          <p>Report. Track. Verify. Make a real change.</p>
          <ul className="check-list">
            {benefits.map((benefit) => <li key={benefit}><span><Check size={13} /></span>{benefit}</li>)}
          </ul>
          <a className="button button-primary" href="#get-started">Report an Issue <ArrowRight size={17} /></a>
        </div>
      </div>
    </section>
  )
}

export default StudentSection