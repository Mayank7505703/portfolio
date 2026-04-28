import { useSkillBars } from '../hooks/useReveal'

const SKILLS = [
  { name: 'Frontend Development', pct: 90, tags: ['HTML5','CSS3','JavaScript','React.js','Bootstrap'], delay: '0s' },
  { name: 'Backend Development',  pct: 85, tags: ['Node.js','Express.js','REST API','JWT Auth'],       delay: '0.1s' },
  { name: 'Database',             pct: 82, tags: ['MongoDB','MySQL','Firebase'],                       delay: '0.2s' },
  { name: 'Programming',          pct: 88, tags: ['Java','C++','Python','DSA'],                        delay: '0.3s' },
  { name: 'Tools & Platforms',    pct: 80, tags: ['Git','GitHub','VS Code','Render','Netlify'],        delay: '0.4s' },
  { name: 'Soft Skills',          pct: 85, tags: ['Communication','Teamwork','Problem Solving','Leadership'], delay: '0.5s' },
]

export default function Skills() {
  useSkillBars('skills')

  return (
    <section id="skills" className="section">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'end', marginBottom: 60 }}>
        <div className="reveal">
          <div className="section-label">002</div>
          <h2 className="section-title">Skills &<br />Tools.</h2>
        </div>
        <div className="reveal" style={{ transitionDelay: '0.15s' }}>
          <p className="section-sub">Technologies I use to build modern, scalable and user-friendly web applications.</p>
        </div>
      </div>

      <div className="skills-grid">
        {SKILLS.map(({ name, pct, tags, delay }) => (
          <div key={name} className="skill-item reveal" style={{ transitionDelay: delay }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
              <span style={{ fontFamily: "'Syne', sans-serif", fontSize: '0.9rem', fontWeight: 700 }}>{name}</span>
              <span style={{ fontSize: '0.72rem', color: 'var(--accent)', letterSpacing: '0.1em' }}>{pct}%</span>
            </div>
            <div className="skill-bar">
              <div className="skill-fill" data-target={pct} />
            </div>
            <div style={{ marginTop: 10, display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {tags.map(t => <span key={t} className="skill-tag">{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
