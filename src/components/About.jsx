export default function About() {
  return (
    <section id="about" className="section" style={{ background: 'var(--surface)' }}>
      <div className="about-grid">
        <div className="about-text reveal">
          <div className="section-label">001</div>
          <h2 className="section-title">About<br />Me.</h2>
          <p style={{ color: 'var(--muted)', fontSize: '0.88rem', lineHeight: 2, marginBottom: 20 }}>
            Hey! I'm <strong style={{ color: 'var(--text)' }}>Mayank Sharma</strong>, a software developer
            who loves turning complex problems into clean, elegant solutions.
          </p>
          <p style={{ color: 'var(--muted)', fontSize: '0.88rem', lineHeight: 2, marginBottom: 20 }}>
            My journey started with a simple question: "How does it work?" Now I build full-stack
            applications and explore modern system architectures.
          </p>
          <div style={{ marginTop: 32 }}>
            <a href="#contact" className="btn-primary">Let's Connect →</a>
          </div>
        </div>

        <div className="about-stats reveal">
          {[
            { number: '2+',  label: 'Years Coding' },
            { number: '15+', label: 'Projects' },
            { number: '8+',  label: 'Technologies' },
            { number: '∞',   label: 'Coffee' },
          ].map(({ number, label }) => (
            <div key={label} className="stat-card">
              <div className="stat-number">{number}</div>
              <div className="stat-label">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
