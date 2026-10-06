import { ArrowDownRight, ArrowRight, CheckCheck, ClipboardPlus, GitMerge, MapPinned, Route, Sparkles } from 'lucide-react'

const steps = [
  { number: '01', title: 'Student Report', description: 'Students report issues with text, photos and location.', icon: ClipboardPlus },
  { number: '02', title: 'AI Understanding', description: 'AI understands the category, severity and intent.', icon: Sparkles },
  { number: '03', title: 'Duplicate Detection', description: 'Related complaints are grouped into the same incident.', icon: GitMerge },
  { number: '04', title: 'Priority Analysis', description: 'AI assigns priority and escalates safety issues automatically.', icon: CheckCheck },
  { number: '05', title: 'Department Routing', description: 'Incidents are routed to the right department with SLA tracking.', icon: Route },
  { number: '06', title: 'Resolution & Verify', description: 'Students confirm resolution and can reopen issues if not fixed.', icon: MapPinned },
]

function HowItWorks() {
  return (
    <section className="workflow-section section-space" id="how-it-works">
      <div className="page-shell">
        <div className="section-heading centered-heading">
          <span className="section-kicker">A thoughtful path to action</span>
          <h2>How NexCampus Works</h2>
          <p>From a complaint to a real solution — powered by AI.</p>
        </div>
        <div className="workflow-grid">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <article className="workflow-card" key={step.number}>
                <div className="workflow-top"><span className="step-number">{step.number}</span><span className="workflow-icon"><Icon size={20} strokeWidth={1.8} /></span></div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                {index < steps.length - 1 && <span className="step-arrow" aria-hidden="true"><ArrowRight size={15} /></span>}
                {index === 2 && <span className="mobile-step-arrow" aria-hidden="true"><ArrowDownRight size={15} /></span>}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks