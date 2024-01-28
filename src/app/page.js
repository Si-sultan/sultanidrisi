'use client'
import { HeroSection , About , Experience,Skills, ContactUs, Projects , CursorPoint } from '@/components'
import { useEffect } from 'react';
import { initializeGoogleTagManager } from './googleTagManager';

export default function Home() {
  let GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

  useEffect(() => {
    // Initialize Google Tag Manager with your GTM ID
    initializeGoogleTagManager(GTM_ID);
  }, []);
  

  return (
    <>
    <div className='snap-mandatory snap-y z-0 relative'>
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
