import { ArrowRight, Check, CircleDot, ShieldCheck, Sparkles, Zap } from 'lucide-react'

const capabilities = [
  'AI-Powered Understanding',
  'Duplicate Detection',
  'Smart Prioritization',
  'Faster Resolution',
]

function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-wash" aria-hidden="true" />
      <div className="hero-layout page-shell">
        <div className="hero-copy reveal-up">
          <div className="eyebrow"><span className="eyebrow-dot" /> AI-POWERED CAMPUS INCIDENT INTELLIGENCE</div>
          <h1>Turn Campus Complaints into <span>Smarter Action.</span></h1>
          <p className="hero-description">
            Report campus issues. Let AI understand, group, prioritize, and route them to the right department for a safer, better campus.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#for-students">Report an Issue <ArrowRight size={17} /></a>
            <a className="button button-text" href="#how-it-works">Explore NexCampus <ArrowRight size={16} /></a>
          </div>
          <div className="capability-list" aria-label="Platform capabilities">
            {capabilities.map((capability) => (
              <span key={capability}><Check size={14} strokeWidth={2.7} />{capability}</span>
            ))}
          </div>
        </div>

        <div className="hero-visual reveal-up reveal-delay" aria-label="Illustration of student reports grouped into one campus incident">
          <div className="campus-photo">
            <img
              src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1400&q=85"
              alt="Modern university campus building framed by green trees"
            />
            <div className="photo-tint" />
            <div className="photo-caption"><span className="live-dot" /> CAMPUS OPERATIONS <span>·</span> LIVE OVERVIEW</div>
          </div>
          <div className="report-stack" aria-hidden="true">
            <div className="report-card report-one"><span className="report-icon"><CircleDot size={15} /></span><span>Water leakage in<br />hostel block B</span><span className="report-time">9:42</span></div>
            <div className="report-card report-two"><span className="report-icon"><CircleDot size={15} /></span><span>Pipe leaking in<br />same hostel</span><span className="report-time">9:47</span></div>
            <div className="report-card report-three"><span className="report-icon"><CircleDot size={15} /></span><span>Water near the<br />corridor</span><span className="report-time">9:51</span></div>
          </div>
          <div className="flow-line flow-line-one" aria-hidden="true" />
          <div className="flow-line flow-line-two" aria-hidden="true" />
          <div className="flow-line flow-line-three" aria-hidden="true" />
          <div className="analysis-card">
            <div className="analysis-heading"><span className="ai-spark"><Sparkles size={16} /></span><span>AI analysis</span><span className="analysis-dots">•••</span></div>
            <div className="analysis-track"><span /><span /><span /><span /><span /><span /><span /></div>
            <div className="analysis-status"><span className="status-check"><Check size={12} /></span> Comparing 3 reports</div>
          </div>
          <div className="incident-card">
            <div className="incident-top"><div><span className="mini-label">1 INCIDENT IDENTIFIED</span><strong>Hostel Block B<br />Water Leakage</strong></div><span className="priority-chip"><Zap size={12} fill="currentColor" /> High Priority</span></div>
            <div className="incident-divider" />
            <div className="incident-assignee"><span className="assignee-icon"><ShieldCheck size={16} /></span><span><small>ASSIGNED TO</small><strong>Maintenance Dept.</strong></span><ArrowRight size={15} /></div>
          </div>
          <div className="hero-proof"><span className="proof-icon"><Check size={13} /></span> One issue, clearly understood.</div>
        </div>
      </div>
      <div className="hero-bottom-rule page-shell"><span /> BUILT FOR CAMPUSES THAT LISTEN</div>
    </section>
  )
}

export default Hero