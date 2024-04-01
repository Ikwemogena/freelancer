import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(useGSAP)

const getRandomCharacter = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    return chars[Math.floor(Math.random() * chars.length)]
}

const shuffleAnimation = (event: any) => {
    const target = event.currentTarget

    if (target.dataset.animating) {
        return;
    }

    target.dataset.animating = true

    const words = target.querySelectorAll('.footer__title p')
    const originalWords = Array.from(words).map((word: any) => word.textContent)
    let shuffles = 0
    const maxShuffles = 10
    const intervalDuration = 500 / maxShuffles

    let animationInterval = setInterval(() => {
        if (shuffles >= maxShuffles) {
            clearInterval(animationInterval)

            words.forEach((word: any, index: any) => {
                word.textContent = originalWords[index];
            })
            delete target.dataset.animating
        } else {
            words.forEach((word: any) => {
                const length = word.textContent.length
                let shuffledText = ''
                for (let i = 0; i < length; i++) {
                    shuffledText += getRandomCharacter()
                }
                word.textContent = shuffledText
            })
            shuffles++
        }
    }, intervalDuration)
}

export default function Footer() {
    const year = new Date().getFullYear()

    useGSAP(() => {
        gsap.from('.footer__title p', {
            duration: 1,
            y: 200,
            opacity: 0,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.footer__bottom-container'
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
                <div className='footer__title' onMouseEnter={shuffleAnimation} onMouseLeave={shuffleAnimation}><p>freelancer</p></div>
                <div className='footer__bottom'>
                    <div className='footer__bottom-links'>
                        <p>team</p>
                        <p>privacy</p>
                    </div>
                    <div className='footer__bottom-copyright'>
                        <p><span>&copy;</span> {year} Freelancer All rights reserved</p>
                    </div>
                </div>
            </div>

        </footer>
    )
}
