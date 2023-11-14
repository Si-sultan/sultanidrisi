import { HeroSection , About , Experience,Skills, ContactUs, Projects , CursorPoint } from '@/components'

export default function Home() {
  return (
    <>
    <div className=' snap-mandatory snap-y z-0 relative'>
          <CursorPoint />
          <section  id = "hero" className="snap-start">
            <HeroSection />
          </section>
          <section id = 'about' className="padding snap-center">
            <About />
          </section>
          <section id="experience" className="snap-center">
            <Experience />
          </section>
          <section id='skills' className="padding snap-start">
            <Skills />
          </section>
          <section id='projects' className="snap-start">
             <Projects /> 
          </section>
          <section id='contact' className="padding snap-start">
            <ContactUs />
          </section>
  </div>
  </>
      )
}
