"use client"
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(useGSAP)

export default function AudienceSection() {

    useGSAP(() => {
        gsap.from('.audience__content-cards', {
            delay: 0.5,
            duration: 1,
            opacity: 0,
            stagger: 0.5,
            scrollTrigger: {
                trigger: '.audience__content h1',
            }
        })
    })
    return (
        <section className='audience'>
            <div className="audience__content">
                <div className="audience__content-cards">
                    <Image src='/assets/icons/user.svg' alt='freelancers' width={24} height={24} />
                    <p>Freelancers</p>
                </div>
                <div className="audience__content-cards">
                    <Image src='/assets/icons/book.svg' alt='students' width={24} height={24} />
                    <p>Students</p>
                </div>
                <div className="audience__content-cards">
                    <Image src='/assets/icons/monitor.svg' alt='students' width={24} height={24} />
                    <p>Remote Workers</p>
                </div>
                <div className="audience__content-cards">
                    <Image src='/assets/icons/employee.svg' alt='students' width={24} height={24} />
                    <p>Corporate Employees</p>
                </div>
                <h1>Open doors, diverse minds: welcomes all</h1>
            </div>
        </section>
    )
}
