import { useEffect } from 'react'
import Cursor         from './components/Cursor'
import Navbar         from './components/Navbar'
import Hero           from './components/Hero'
import About          from './components/About'
import Skills         from './components/Skills'
import DSA            from './components/DSA'
import Projects       from './components/Projects'
import Education      from './components/Education'
import Certifications from './components/Certifications'
import Achievements   from './components/Achievements'
import Experience     from './components/Experience'
import Contact        from './components/Contact'
import Footer         from './components/Footer'
import { useReveal }  from './hooks/useReveal'

export default function App() {
  useReveal()

  return (
    <>
      <Cursor />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <DSA />
      <Projects />
      <Education />
      <Certifications />
      <Achievements />
      <Experience />
      <Contact />
      <Footer />
    </>
  )
}
