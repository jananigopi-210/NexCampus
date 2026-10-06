import { ArrowRight, Check, MessageSquareText } from 'lucide-react'

const reports = [
  { time: '09:42 AM', text: 'Water is leaking near the Block B hostel washroom.' },
  { time: '09:47 AM', text: 'The pipe outside my room is still leaking.' },
  { time: '09:51 AM', text: 'There is water pooling in the corridor on B block.' },
]

function ProblemSection() {
  return (
    <section className="problem-section section-space" id="problem">
      <div className="page-shell problem-layout">
        <div className="section-intro problem-intro">
          <span className="section-kicker">A clearer picture</span>
          <h2>One Problem.<br /><span>Dozens of Complaints.</span></h2>
          <p>The same issue can be reported multiple times in different words, making it difficult for administrators to identify the real problem.</p>
          <div className="problem-note"><span><MessageSquareText size={17} /></span><div><strong>More reports don’t mean more issues.</strong><small>They often point to one thing that needs attention.</small></div></div>
        </div>
        <div className="merge-visual" aria-label="Three similar reports combined into one real incident">
          <div className="merge-reports">
            {reports.map((report) => (
              <div className="merge-report" key={report.time}>
                <span className="merge-avatar"><MessageSquareText size={15} /></span>
                <span className="merge-report-copy"><small>STUDENT REPORT · {report.time}</small><strong>{report.text}</strong></span>
                <span className="merge-dot" />
              </div>
            ))}
          </div>
          <div className="merge-connector"><span className="connector-line" /><span className="connector-node"><ArrowRight size={16} /></span><span className="connector-caption">GROUPED USING AI</span></div>
          <div className="real-incident">
            <div className="real-incident-icon"><Check size={19} /></div>
            <div><span className="mini-label">1 REAL INCIDENT</span><strong>Hostel Block B<br />Water Leakage</strong></div>
            <span className="incident-count">3 reports</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProblemSection