import { useEffect } from 'react'

export function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible')
      })
    }, { threshold: 0.12 })

    const els = document.querySelectorAll('.reveal, .edu-item')
    els.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}

export function useSkillBars(sectionId) {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.skill-fill[data-target]').forEach(bar => {
            bar.style.width = bar.dataset.target + '%'
          })
          entry.target.querySelectorAll('.dsa-fill[data-target]').forEach(bar => {
            bar.style.width = bar.dataset.target + '%'
          })
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.2 })

    const section = document.getElementById(sectionId)
    if (section) observer.observe(section)
    return () => observer.disconnect()
  }, [sectionId])
}
