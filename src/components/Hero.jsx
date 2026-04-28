import { useEffect, useRef } from 'react'

export default function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const hero = heroRef.current
    if (!hero) return
    const tags = ['<div>', 'fn()', '{ }', 'async', '=>', 'class', 'const', 'null', '[]']
    for (let i = 0; i < 15; i++) {
      const p = document.createElement('div')
      p.style.cssText = `
        position:absolute; font-family:'Space Mono',monospace; font-size:0.7rem;
        color:var(--accent); opacity:0.15; pointer-events:none;
        animation:floatUp linear infinite;
        left:${Math.random()*100}%;
        top:${Math.random()*100}%;
        animation-duration:${15+Math.random()*10}s;
        animation-delay:${Math.random()*5}s;
      `
      p.textContent = tags[Math.floor(Math.random() * tags.length)]
      hero.appendChild(p)
    }
  }, [])

  return (
    <section id="hero" ref={heroRef} style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      padding: '120px 48px 80px', position: 'relative', overflow: 'hidden',
    }}>
      {/* Glow */}
      <div style={{
        position: 'absolute', width: 700, height: 700,
        background: 'radial-gradient(circle, rgba(108,99,255,0.12) 0%, transparent 70%)',
        top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
        animation: 'breathe 6s ease-in-out infinite', pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 900, position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 10,
          fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase',
          color: 'var(--accent)', marginBottom: 32,
          animation: 'fadeUp 0.8s 0.2s both',
        }}>
          <span style={{ width: 32, height: 1, background: 'var(--accent)', display: 'inline-block' }} />
          Software Developer
        </div>

        <h1 style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: 'clamp(3.5rem, 9vw, 8rem)',
          fontWeight: 800, lineHeight: 0.95, letterSpacing: '-0.02em',
          marginBottom: 24, animation: 'fadeUp 0.8s 0.4s both',
        }}>
          Mayank<br />
          <span style={{
            display: 'block',
            background: 'linear-gradient(135deg, var(--accent), var(--accent2))',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}>Sharma.</span>
        </h1>

        <p style={{
          fontSize: '0.95rem', lineHeight: 1.8, color: 'var(--muted)',
          maxWidth: 520, marginBottom: 48, animation: 'fadeUp 0.8s 0.6s both',
        }}>
          Building elegant digital experiences at the intersection of clean code and bold design.
          Shipping ideas one commit at a time.
        </p>

        <div style={{
          display: 'flex', gap: 20, alignItems: 'center', flexWrap: 'wrap',
          animation: 'fadeUp 0.8s 0.8s both',
        }}>
          <a href="#projects" className="btn-primary">View Work</a>
          <a href="#contact" className="btn-outline">Get In Touch</a>
        </div>
      </div>

      {/* Scroll hint */}
      <div style={{
        position: 'absolute', bottom: 40, left: 48,
        display: 'flex', alignItems: 'center', gap: 12,
        fontSize: '0.68rem', letterSpacing: '0.2em', textTransform: 'uppercase',
        color: 'var(--muted)', animation: 'fadeIn 1s 1.5s both',
      }}>
        <div style={{ width: 48, height: 1, background: 'var(--muted)', animation: 'scrollPulse 2s ease-in-out infinite' }} />
        <span>Scroll</span>
      </div>

      <style>{`
        @keyframes scrollPulse {
          0%,100% { width:48px; }
          50% { width:80px; background:var(--accent); }
        }
      `}</style>
    </section>
  )
}
