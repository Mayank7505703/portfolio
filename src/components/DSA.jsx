import { useEffect, useRef, useState } from 'react'
import { useSkillBars } from '../hooks/useReveal'

export default function DSA() {
  useSkillBars('dsa')
  const [rank, setRank]   = useState('#322,714')
  const [total, setTotal] = useState('373')

  useEffect(() => {
    async function fetchStats() {
      try {
        const res  = await fetch('https://alfa-leetcode-api.onrender.com/mayanksharma1234321', { signal: AbortSignal.timeout(8000) })
        const data = await res.json()
        if (data?.totalSolved) {
          setRank('#' + (data.ranking || 0).toLocaleString())
          setTotal(data.totalSolved)
        }
      } catch { /* use defaults */ }
    }
    fetchStats()
  }, [])

  return (
    <section id="dsa" className="section" style={{ background: 'var(--surface)' }}>
      <div className="about-grid">

        {/* LEFT */}
        <div className="reveal">
          <div className="section-label">002.5</div>
          <h2 className="section-title">DSA &<br /><span className="glow-text">Problem Solving.</span></h2>
          <p className="section-sub" style={{ marginTop: 20 }}>
            Consistency is key. I maintain a disciplined approach to problem-solving, currently holding a{' '}
            <strong>50 Days Streak Badge</strong> and tackling complex challenges daily.
          </p>

          <div style={{ marginTop: 48, display: 'flex', flexDirection: 'column', gap: 20 }}>
            {[
              { value: rank,   label: 'Global Rank',      color: 'var(--text)' },
              { value: '1,380', label: 'Contest Rating',  color: 'var(--accent2)' },
              { value: total,  label: 'Problems Solved',  color: 'var(--accent)' },
              { value: '50 🔥', label: 'Day Streak Badge', color: 'var(--accent3)' },
            ].map(({ value, label, color }, i) => (
              <div key={label} style={{
                display: 'flex', alignItems: 'baseline', gap: 16,
                borderBottom: i < 3 ? '1px solid var(--border)' : 'none',
                paddingBottom: i < 3 ? 20 : 0,
              }}>
                <span style={{ fontFamily: "'Syne', sans-serif", fontSize: '2rem', fontWeight: 800, color }}>{value}</span>
                <span style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--muted)' }}>{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="reveal" style={{ transitionDelay: '0.2s', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--muted)' }}>Activity Heatmap</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: '0.6rem', color: 'var(--accent3)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent3)', boxShadow: '0 0 6px var(--accent3)', animation: 'pulse 2s ease-in-out infinite', display: 'inline-block' }} />
              Live
            </span>
          </div>

          <div style={{ borderRadius: 12, overflow: 'hidden', lineHeight: 0, border: '1px solid var(--border)' }}>
            <img
              src="https://leetcard.jacoblin.cool/mayanksharma1234321?theme=dark&font=Space+Mono&ext=heatmap&border=0&radius=0"
              alt="LeetCode activity heatmap"
              style={{ width: '100%', display: 'block' }}
              loading="lazy"
              onError={e => {
                e.target.parentElement.innerHTML = `<div style="padding:32px;text-align:center;color:var(--muted);font-size:0.75rem;">
                  Heatmap unavailable — <a href="https://leetcode.com/u/mayanksharma1234321/" target="_blank" style="color:var(--accent);">view on LeetCode ↗</a>
                </div>`
              }}
            />
          </div>

          <div style={{ marginTop: 16 }}>
            <a href="https://leetcode.com/u/mayanksharma1234321/" target="_blank" rel="noreferrer"
               className="btn-outline" style={{ width: '100%', justifyContent: 'center', fontSize: '0.7rem' }}>
              View Full Profile ↗
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
