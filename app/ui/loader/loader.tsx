"use client"
import Image from "next/image";
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(useGSAP)
// export default function Loader({ hasLoaded = true }: { hasLoaded: boolean }) {
export default function Loader() {

    useGSAP(() => {
        gsap.set("body", { overflow: "hidden" })
        gsap.to(".loader", {
            duration: 1.5,
            delay: 1.5,
            y: -100,
            height: 0,
            ease: "power1.inOut",
            onComplete: () => {
                gsap.set("body", { overflow: "auto" })
            }
        });
    })
    return (
        <section className="loader">
            <div className="loader__wrapper">
                <Image src="/freelancer-logo.svg" alt="Logo" width={35} height={42} />
                <p>Freelancer</p>
            </div>
        </section>
    )
}