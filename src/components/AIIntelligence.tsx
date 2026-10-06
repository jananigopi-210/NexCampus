import { CopyCheck, Gauge, Repeat2, Route, ScanText, Siren } from 'lucide-react'

const features = [
  { title: 'Semantic Understanding', description: 'Understands campus issues in natural language.', icon: ScanText, tag: 'CONTEXT' },
  { title: 'Duplicate Detection', description: 'Groups similar complaints into a single incident.', icon: CopyCheck, tag: 'CLARITY' },
  { title: 'Explainable Priority', description: 'Shows why an incident receives its priority.', icon: Gauge, tag: 'FOCUS' },
  { title: 'Safety Escalation', description: 'Automatically escalates dangerous campus issues.', icon: Siren, tag: 'SAFETY' },
  { title: 'Department Routing', description: 'Routes incidents to the right department.', icon: Route, tag: 'OWNERSHIP' },
  { title: 'Recurring Issue Detection', description: 'Identifies chronic problems for preventive maintenance.', icon: Repeat2, tag: 'PREVENTION' },
]

function AIIntelligence() {
  return (
    <section className="intelligence-section section-space" id="features">
      <div className="page-shell">
        <div className="section-heading intelligence-heading">
          <div><span className="section-kicker">The intelligence layer</span><h2>More Than a<br /><span>Complaint Portal.</span></h2></div>
          <p>NexCampus turns raw complaints into actionable campus intelligence.</p>
        </div>
        <div className="feature-grid">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <article className="feature-card" key={feature.title}>
                <div className="feature-card-top"><span className="feature-icon"><Icon size={21} strokeWidth={1.8} /></span><span className="feature-tag">0{index + 1} / {feature.tag}</span></div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default AIIntelligence