import { useEffect, useRef } from 'react'

export default function Cursor() {
  const cursorRef = useRef(null)
  const ringRef   = useRef(null)

  useEffect(() => {
    const move = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.top  = e.clientY + 'px'
        cursorRef.current.style.left = e.clientX + 'px'
      }
      if (ringRef.current) {
        ringRef.current.style.top  = e.clientY + 'px'
        ringRef.current.style.left = e.clientX + 'px'
      }
    }
    document.addEventListener('mousemove', move)
    return () => document.removeEventListener('mousemove', move)
  }, [])

  return (
    <>
      <div ref={cursorRef} style={{
        width: 12, height: 12, background: 'var(--accent)', borderRadius: '50%',
        position: 'fixed', top: 0, left: 0, pointerEvents: 'none', zIndex: 9999,
        transform: 'translate(-50%,-50%)', mixBlendMode: 'screen',
        transition: 'transform 0.1s, background 0.2s',
      }} />
      <div ref={ringRef} style={{
        width: 40, height: 40, border: '1.5px solid var(--accent)', borderRadius: '50%',
        position: 'fixed', top: 0, left: 0, pointerEvents: 'none', zIndex: 9998,
        transform: 'translate(-50%,-50%)', opacity: 0.5,
        transition: 'top 0.12s ease, left 0.12s ease, width 0.3s, height 0.3s',
      }} />
    </>
  )
}
