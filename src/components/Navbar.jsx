export default function Navbar() {
  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0,
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '24px 48px', zIndex: 100,
      background: 'linear-gradient(to bottom, rgba(5,5,8,0.95), transparent)',
      backdropFilter: 'blur(2px)',
    }}>
      <a href="#" style={{
        fontFamily: "'Syne', sans-serif", fontSize: '1.1rem', fontWeight: 800,
        letterSpacing: '0.1em', color: 'var(--accent)', textDecoration: 'none',
      }}>MS/</a>

      <ul style={{ display: 'flex', gap: 28, listStyle: 'none' }}>
        {[
          ['#about',          'About'],
          ['#skills',         'Skills'],
          ['#dsa',            'DSA'],
          ['#projects',       'Projects'],
          ['#education',      'Education'],
          ['#certifications', 'Certs'],
          ['#achievements',   'Wins'],
          ['#experience',     'Experience'],
          ['#contact',        'Contact'],
        ].map(([href, label]) => (
          <li key={href}>
            <a href={href} style={{
              color: 'var(--muted)', textDecoration: 'none',
              fontSize: '0.68rem', letterSpacing: '0.15em', textTransform: 'uppercase',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.target.style.color = 'var(--text)'}
            onMouseLeave={e => e.target.style.color = 'var(--muted)'}
            >{label}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
