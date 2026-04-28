export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="reveal">
        <div className="section-label">007</div>
        <h2 className="section-title">Experience.</h2>
        <p className="section-sub" style={{ marginTop: 16 }}>
          Currently seeking internship and full-time opportunities to apply my skills in a real-world environment.
        </p>
      </div>

      <div className="edu-timeline">
        {/* Open to work */}
        <div className="edu-item">
          <div className="edu-dot" style={{ background: 'var(--accent2)', boxShadow: '0 0 12px var(--accent2)' }} />
          <div className="edu-year" style={{ color: 'var(--accent2)' }}>2025 — Present</div>
          <div className="edu-degree">Open to Opportunities</div>
          <div className="edu-school" style={{ color: 'var(--accent)' }}>Full-time / Internship</div>
          <div className="edu-desc">
            Actively looking for full-time roles and internships in software development.
            Comfortable with MERN stack, REST APIs, and problem-solving under pressure.
            Available to join immediately.
          </div>
          <div style={{ marginTop: 20 }}>
            <a href="#contact" className="btn-primary" style={{ fontSize: '0.75rem', padding: '10px 24px' }}>
              Hire Me →
            </a>
          </div>
        </div>

        {/* Placeholder */}
        <div className="edu-item">
          <div className="edu-dot" />
          <div className="edu-year">Your Next Intern</div>
          <div className="edu-degree">Software Developer Intern</div>
          <div className="edu-school" style={{ color: 'var(--muted)' }}>Your Company Name Here</div>
          <div className="edu-desc" style={{ fontStyle: 'italic', opacity: 0.5 }}>
            This could be your company. I'm actively interviewing and ready to contribute from day one.
          </div>
        </div>
      </div>
    </section>
  )
}
