import React from 'react'
import Image from 'next/image';

export default function NavBar() {
    return (
        <header className="header">
            <div className='logo-container'>
                <Image
                    src="/freelancer-logo.svg"
                    width={22}
                    height={26}
                    className="hidden md:block"
                    alt="Screenshots of the dashboard project showing desktop version"
                />
                Freelancer
            </div>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
            <button className='contact-us'>contact us</button>
        </header>
    )
}