import { ArrowRight, ArrowUpRight, AlertTriangle, BarChart3, Check, CircleHelp, Droplets, Flame, ShieldAlert } from 'lucide-react'

const bars = [34, 47, 40, 58, 52, 76, 61, 88, 67, 72, 54, 94]

function AdminSection() {
  return (
    <section className="admin-section section-space" id="impact">
      <div className="page-shell split-layout admin-layout">
        <div className="section-intro admin-copy">
          <span className="section-kicker">A better operational view</span>
          <h2>For <span>Administrators</span></h2>
          <p>Less noise. More meaningful action.</p>
          <ul className="check-list">
            <li><span><Check size={13} /></span>Incident-based dashboard</li>
            <li><span><Check size={13} /></span>Department routing</li>
            <li><span><Check size={13} /></span>SLA tracking</li>
            <li><span><Check size={13} /></span>Hotspot analytics</li>
            <li><span><Check size={13} /></span>Recurring maintenance insights</li>
          </ul>
          <a className="button button-outline" href="#get-started">View Admin Dashboard <ArrowRight size={17} /></a>
        </div>
        <div className="dashboard-frame" aria-label="Illustrative administrator dashboard preview">
          <div className="dashboard-topbar"><div className="dashboard-brand"><span><BarChart3 size={14} /></span> Campus overview</div><div className="dashboard-period">This month <ArrowUpRight size={13} /></div></div>
          <div className="dashboard-title-row"><div><small>SUNDAY, OCTOBER 04</small><h3>Good morning, Admin</h3></div><span className="dashboard-avatar">A</span></div>
          <div className="metric-grid">
            <div className="metric-card"><span>Total Incidents</span><strong>128</strong><small><ArrowUpRight size={12} /> 12% this month</small></div>
            <div className="metric-card"><span>Open</span><strong>24</strong><small className="metric-neutral"><CircleHelp size={12} /> 6 due today</small></div>
            <div className="metric-card"><span>Resolved</span><strong>104</strong><small><Check size={12} /> 81% resolved</small></div>
          </div>
          <div className="dashboard-content-grid">
            <div className="chart-card"><div className="chart-heading"><div><strong>Incident trends</strong><small>Reports over the last 12 weeks</small></div><span>12 weeks⌄</span></div><div className="bar-chart" aria-hidden="true">{bars.map((height, index) => <span className={index === 11 ? 'is-current' : ''} key={`${height}-${index}`} style={{ height: `${height}%` }} />)}</div><div className="chart-axis"><span>Wk 1</span><span>Wk 4</span><span>Wk 8</span><span>Wk 12</span></div></div>
            <div className="category-card"><strong>Top categories</strong><small>Most reported this month</small><div className="category-row"><span className="category-icon water"><Droplets size={14} /></span><span>Water & plumbing</span><b>32</b></div><div className="category-row"><span className="category-icon facility"><AlertTriangle size={14} /></span><span>Facilities</span><b>26</b></div><div className="category-row"><span className="category-icon safety"><ShieldAlert size={14} /></span><span>Safety</span><b>18</b></div></div>
          </div>
          <div className="priority-strip"><span><Flame size={14} /></span><strong>Priority issues</strong><small>3 incidents need attention</small><ArrowRight size={14} /></div>
          <div className="dashboard-watermark">NEXCAMPUS · PREVIEW</div>
        </div>
      </div>
    </section>
  )
}

export default AdminSection