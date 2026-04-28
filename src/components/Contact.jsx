const LINKS = [
  { icon: '📧', label: 'Email',    val: 'mayank@example.com',  href: 'mailto:mayank@example.com' },
  { icon: '🐙', label: 'GitHub',   val: '@Mayank7505703',       href: 'https://github.com/Mayank7505703' },
  { icon: '💼', label: 'LinkedIn', val: 'Connect with me',      href: 'https://linkedin.com/in/mayank-sharma' },
]

export default function Contact() {
  return (
    <section id="contact" className="section" style={{ background: 'var(--surface)', overflow: 'hidden' }}>
      <div style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80,
        alignItems: 'center', marginTop: 60,
      }}>
        <div className="reveal">
          <div className="section-label">008</div>
          <h2 style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: 24,
          }}>
            Let's Build<br />
            <span style={{
              background: 'linear-gradient(135deg, var(--accent), var(--accent2))',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>Something</span><br />
            Great.
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '0.85rem', lineHeight: 1.9, marginBottom: 40 }}>
            I'm currently open to internships and full-time opportunities. If you have a question or
            just want to say hi, my inbox is always open!
          </p>
        </div>

        <div className="reveal" style={{ transitionDelay: '0.15s', display: 'flex', flexDirection: 'column', gap: 12 }}>
          {LINKS.map(({ icon, label, val, href }) => (
            <a key={label} href={href} target={href.startsWith('mailto') ? undefined : '_blank'} rel="noreferrer"
               className="contact-item">
              <div style={{
                width: 36, height: 36, borderRadius: '50%',
                background: 'rgba(108,99,255,0.15)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}>{icon}</div>
              <div>
                <div style={{ fontSize: '0.68rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 2 }}>{label}</div>
                <div style={{ fontSize: '0.88rem', fontFamily: "'Syne', sans-serif", fontWeight: 600 }}>{val}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
