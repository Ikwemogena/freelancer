"use client"
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(useGSAP)

export default function HeroSection() {

  useGSAP(() => {
    gsap.from('.hero__section-content h1', {
      duration: 1,
      y: 200,
      opacity: 0,
      ease: 'power2.out',
      stagger: 0.5,
      // scrollTrigger: {
      //   trigger: '.hero__section-content',
      //   // start: 'top 80%',
      // }
    })
  })
  return (
    <section className='hero__section'>
      <div className='black-overlay'></div>
      <div className='hero__section-content'>
        <h1>create</h1>
        <h1>innovate</h1>
        <h1>connect</h1>
        {/* <p>create</p>
          <p>innovate</p>
          <p>connect</p> */}
      </div>
    </section>
  )
}