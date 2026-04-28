const CERTS = [
  {
    icon: '🏢', date: 'Oct 2025', name: 'Accenture',
    sub: 'Technology Virtual Experience', subColor: 'var(--accent)',
    desc: 'Industry simulation covering software development practices, architecture thinking and enterprise tech workflows.',
    tags: ['Enterprise Tech', 'Simulation'],
    iconBg: 'rgba(108,99,255,0.12)', iconBorder: 'rgba(108,99,255,0.2)',
    delay: '0s',
  },
  {
    icon: '🤖', date: 'Oct 2025', name: 'Generative AI',
    sub: 'Certification Course', subColor: 'var(--accent2)',
    desc: 'Fundamentals of generative models, LLMs, prompt engineering and real-world AI application development.',
    tags: ['Gen AI', 'LLMs', 'Prompting'],
    iconBg: 'rgba(255,101,132,0.12)', iconBorder: 'rgba(255,101,132,0.2)',
    delay: '0.1s',
  },
  {
    icon: '📊', date: 'Oct 2025', name: 'Microsoft Power BI',
    sub: 'Data Analytics Certification', subColor: '#ffb800',
    desc: 'Data visualization, dashboard creation, DAX queries and business intelligence reporting using Microsoft Power BI.',
    tags: ['Power BI', 'DAX', 'Data Viz'],
    iconBg: 'rgba(255,184,0,0.12)', iconBorder: 'rgba(255,184,0,0.2)',
    delay: '0.2s',
  },
  {
    icon: '⚙️', date: 'Nov 2025', name: 'Software Engineering',
    sub: 'Professional Certificate', subColor: 'var(--accent3)',
    desc: 'Core software engineering principles — SDLC, design patterns, agile methodology and system design fundamentals.',
    tags: ['SDLC', 'Agile', 'System Design'],
    iconBg: 'rgba(67,233,123,0.12)', iconBorder: 'rgba(67,233,123,0.2)',
    delay: '0.3s',
  },
  {
    icon: '🌱', date: 'Nov 2025', name: 'Environmental Engineering',
    sub: 'Introduction Course', subColor: 'var(--accent)',
    desc: 'Interdisciplinary course covering sustainable systems, environmental impact assessment and green engineering practices.',
    tags: ['Sustainability', 'Systems'],
    iconBg: 'rgba(108,99,255,0.12)', iconBorder: 'rgba(108,99,255,0.2)',
    delay: '0.4s',
  },
  {
    icon: '🎓', date: 'Dec 2025', name: 'JOVAC',
    sub: 'Training Certification', subColor: 'var(--accent2)',
    desc: 'Vocational and aptitude training program covering core technical and professional development skills.',
    tags: ['Training', 'Professional Dev'],
    iconBg: 'rgba(255,101,132,0.12)', iconBorder: 'rgba(255,101,132,0.2)',
    delay: '0.5s',
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="reveal">
        <div className="section-label">005</div>
        <h2 className="section-title">Certifications<br />&amp; Courses.</h2>
        <p className="section-sub" style={{ marginTop: 16 }}>
          Continuously upskilling through industry-recognized programs and platforms.
        </p>
      </div>

      <div className="certs-grid">
        {CERTS.map(({ icon, date, name, sub, subColor, desc, tags, iconBg, iconBorder, delay }) => (
          <div key={name} className="skill-item reveal" style={{ transitionDelay: delay }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 14 }}>
              <div style={{
                width: 40, height: 40, borderRadius: 8,
                background: iconBg, border: `1px solid ${iconBorder}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem',
              }}>{icon}</div>
              <span style={{ fontSize: '0.62rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginTop: 4 }}>{date}</span>
            </div>
            <div style={{ fontFamily: "'Syne', sans-serif", fontSize: '1rem', fontWeight: 700, marginBottom: 6 }}>{name}</div>
            <div style={{ fontSize: '0.75rem', color: subColor, marginBottom: 10, letterSpacing: '0.05em' }}>{sub}</div>
            <div style={{ fontSize: '0.78rem', color: 'var(--muted)', lineHeight: 1.7 }}>{desc}</div>
            <div style={{ marginTop: 14, display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              {tags.map(t => <span key={t} className="skill-tag">{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
