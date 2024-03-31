"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import NavBar from '../nav-bar'
// import { useEffect, useState } from 'react'

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(useGSAP)


// export default function Loader({ isLoading = true }: { isLoading: boolean }) {
export default function Loader() {

    useGSAP(() => {
        // gsap.to('.loader', {
        // height: 0,
        // duration: 1,
        // y: 200,
        // opacity: 0,
        // ease: 'power2.out',
        // delay: 3,
        // stagger: 0.5,
        // })
        // gsap.to('.loader__wrapper', {
        // display: 'none',
        // opacity: 0,
        // duration: 0.1
        // })
    })
    // const [isLoading, setIsLoading] = useState(true);

    // useEffect(() => {
    //     const handleContentLoaded = () => {
    //         setIsLoading(false);
    //     };

    //     document.addEventListener('DOMContentLoaded', handleContentLoaded);

    //     // Cleanup function to remove event listener on unmount
    //     return () => document.removeEventListener('DOMContentLoaded', handleContentLoaded);
    // }, []);

    // useEffect(() => {
    //     // Simulate some loading time (replace with your actual loading logic)
    //     setTimeout(() => {
    //         setIsLoading(false);
    //     }, 2000);
    // }, []);
    return (
        <section className="loader">
            <div className="loader__wrapper">
                <Image src="/freelancer-logo.svg" alt="Logo" width={35} height={42} />
                <p>Freelancer</p>
            </div>

        </section>
    )
}