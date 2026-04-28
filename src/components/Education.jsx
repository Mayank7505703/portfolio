const EDU = [
  {
    year: '2023 — 2027',
    degree: 'B.Tech — Computer Science & Engineering',
    school: 'GLA University, Mathura, Uttar Pradesh',
    desc: 'Pursuing Bachelor of Technology in Computer Science & Engineering. Building strong fundamentals in Data Structures, Algorithms, Operating Systems, DBMS and Full Stack Development. Actively working on real-world MERN stack projects and improving problem solving skills.',
    dotColor: 'var(--accent)',
    dotGlow: 'var(--accent)',
  },
  {
    year: '2020 — 2022',
    degree: 'Senior Secondary (XII) — PCM + Computer Science',
    school: 'CBSE Board',
    desc: 'Completed higher secondary education with Physics, Chemistry, Mathematics and Computer Science. Developed early interest in programming, logical thinking and software development.',
    dotColor: 'var(--accent2)',
    dotGlow: 'var(--accent2)',
  },
  {
    year: '2018 — 2020',
    degree: 'Secondary School (X)',
    school: 'CBSE Board',
    desc: 'Built academic foundation with focus on mathematics, science and communication skills.',
    dotColor: '#43e97b',
    dotGlow: '#43e97b',
  },
]

export default function Education() {
  return (
    <section id="education" className="section" style={{ background: 'var(--surface)' }}>
      <div className="reveal">
        <div className="section-label">004</div>
        <h2 className="section-title">Education.</h2>
      </div>

      <div className="edu-timeline">
        {EDU.map(({ year, degree, school, desc, dotColor, dotGlow }) => (
          <div key={year} className="edu-item">
            <div className="edu-dot" style={{ background: dotColor, boxShadow: `0 0 12px ${dotGlow}` }} />
            <div className="edu-year" style={{ color: dotColor }}>{year}</div>
            <div className="edu-degree">{degree}</div>
            <div className="edu-school" style={{ color: dotColor === 'var(--accent)' ? 'var(--accent2)' : dotColor }}>{school}</div>
            <div className="edu-desc">{desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
