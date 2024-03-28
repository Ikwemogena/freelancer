"use client"

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(useGSAP)

export default function Footer() {
    const year = new Date().getFullYear()

    useGSAP(() => {
        gsap.from('.footer__title p', {
            duration: 1,
            y: 200,
            opacity: 0,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.footer__bottom-container',
                // start: 'top 80%',
            }
        })
    })
    return (
        <footer className='footer'>
            <div className='footer__top'>
                <div className='footer__top-content'><p>Dive into a community buzzing with energy, collaboration, and endless opportunities <span>Book now</span></p></div>
                <div className='footer__top-quick-links'>
                    <div className='footer__top-quick-links-menu'>
                        <p>MENU</p>
                        <p>Home</p>
                        <p>About</p>
                        <p>Membership</p>
                    </div>
                    <div className='footer__top-quick-links-menu'>
                        <p>SOCIALS</p>
                        <p>Home</p>
                        <p>About</p>
                        <p>Membership</p>
                    </div>
                </div>
            </div>
            <div className='footer__bottom-container'>
                <div className='footer__title'><p>freelancer</p></div>
                <div className='footer__bottom'>
                    <div className='footer__bottom-links'>
                        <p>team</p>
                        <p>privacy</p>
                    </div>
                    <div className='footer__bottom-copyright'>
                        <p>{year} Freelancer All rights reserved</p>
                    </div>
                </div>
            </div>

        </footer>
    )
}
