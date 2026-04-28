const ACHIEVEMENTS = [
  {
    icon: '🏆', color: '#ffb800', bg: 'rgba(255,184,0,0.12)', border: 'rgba(255,184,0,0.25)',
    date: 'Apr 2026', dateColor: '#ffb800',
    title: 'GuideWire Hackathon',
    desc: 'Participated and successfully completed the GuideWire Hackathon — a competitive coding event focused on real-world insurance tech problem statements.',
    tags: ['Hackathon', 'GuideWire', 'Completed'],
    delay: '0s',
  },
  {
    icon: '⚡', color: 'var(--accent)', bg: 'rgba(108,99,255,0.12)', border: 'rgba(108,99,255,0.25)',
    date: '2024 — Present', dateColor: 'var(--accent)',
    title: 'LeetCode 50-Day Streak',
    desc: 'Earned the prestigious 50 Days Badge on LeetCode by solving problems consistently every day. Currently ranked #322,714 globally with 373+ problems solved.',
    tags: ['DSA', '50 Day Badge', '373+ Solved'],
    delay: '0.1s',
  },
  {
    icon: '🎓', color: 'var(--accent3)', bg: 'rgba(67,233,123,0.12)', border: 'rgba(67,233,123,0.25)',
    date: '2023 — 2027', dateColor: 'var(--accent3)',
    title: 'B.Tech CSE — GLA University',
    desc: 'Pursuing Computer Science & Engineering at GLA University, Mathura. Actively building full-stack projects, sharpening DSA skills and exploring modern system design alongside academics.',
    tags: ['CSE', 'GLA University', '2027'],
    delay: '0.2s',
  },
]

export default function Achievements() {
  return (
    <section id="achievements" className="section" style={{ background: 'var(--surface)' }}>
      <div className="reveal">
        <div className="section-label">006</div>
        <h2 className="section-title">Achievements<br />&amp; Highlights.</h2>
      </div>

      <div className="achievements-grid">
        {ACHIEVEMENTS.map(({ icon, color, bg, border, date, dateColor, title, desc, tags, delay }) => (
          <div key={title} className="project-card reveal" style={{ transitionDelay: delay }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24 }}>
              <div style={{
                width: 48, height: 48, borderRadius: 10,
                background: bg, border: `1px solid ${border}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.4rem', flexShrink: 0,
              }}>{icon}</div>
              <div>
                <div style={{ fontSize: '0.62rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: dateColor, marginBottom: 4 }}>{date}</div>
                <div style={{ fontFamily: "'Syne', sans-serif", fontSize: '1.1rem', fontWeight: 800 }}>{title}</div>
              </div>
            </div>
            <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.9, marginBottom: 20 }}>{desc}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {tags.map(t => <span key={t} className="stack-tag">{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
