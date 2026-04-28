const PROJECTS = [
  {
    num: '01',
    title: 'Real-Time Chat App',
    desc: 'A full-stack messaging platform with instant delivery, authentication, and responsive design using Socket.io.',
    stack: ['React', 'Node.js', 'Socket.io'],
    github: 'https://github.com/Mayank7505703/real-time-chat-app2.git',
    live:   'https://real-time-chat-app-0b05.onrender.com/',
    delay:  '0s',
  },
  {
  num: '02',
  title: 'Blogify — Blog Platform',
  desc: 'A full-stack blogging platform with JWT authentication, cover image uploads, password strength validation, and a premium editorial UI built with Node.js and MongoDB.',
  stack: ['Node.js', 'Express', 'MongoDB', 'EJS'],
  github: 'https://github.com/Mayank7505703/Blog-app-mern.git',
  live:   'https://blog-app-mern-8ll3.onrender.com/home',
  delay:  '0.1s',
},
]

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'end', marginBottom: 60 }}>
        <div className="reveal">
          <div className="section-label">003</div>
          <h2 className="section-title">Featured<br />Projects.</h2>
        </div>
      </div>

      <div className="projects-grid">
        {PROJECTS.map(({ num, title, desc, stack, github, live, delay }) => (
          <div key={num} className="project-card reveal" style={{ transitionDelay: delay }}>
            <div style={{ fontSize: '0.65rem', letterSpacing: '0.2em', color: 'var(--muted)', marginBottom: 24, display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ width: 20, height: 1, background: 'var(--muted)', display: 'inline-block' }} />
              {num}
            </div>
            <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: '1.4rem', fontWeight: 800, marginBottom: 16, lineHeight: 1.2, transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                onMouseLeave={e => e.currentTarget.style.color = ''}>
              {title}
            </h3>
            <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.9, marginBottom: 28 }}>{desc}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 32 }}>
              {stack.map(s => <span key={s} className="stack-tag">{s}</span>)}
            </div>
            <div style={{ display: 'flex', gap: 16 }}>
              <a href={github} target="_blank" rel="noreferrer"
                 style={{ fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none', transition: 'color 0.2s' }}
                 onMouseEnter={e => e.target.style.color = 'var(--accent)'}
                 onMouseLeave={e => e.target.style.color = 'var(--muted)'}>
                ↗ GitHub
              </a>
              <a href={live} target="_blank" rel="noreferrer"
                 style={{ fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none', transition: 'color 0.2s' }}
                 onMouseEnter={e => e.target.style.color = 'var(--accent)'}
                 onMouseLeave={e => e.target.style.color = 'var(--muted)'}>
                ↗ Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
