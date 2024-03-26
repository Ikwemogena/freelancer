import React from 'react'
import ImageSlider from './image-slider'


export default function AboutUs() {
    return (
        <section className='about'>
            <div className='about__text'>
                <h1 className='about__text-title'>where productivity meets community</h1>
                <p className='about__text-sub'>
                    Step into our co-working sanctuary – where ambition ignites and creativity flourishes. With top-notch amenities and a vibrant community, fuel your drive and feed your imagination. Welcome to the space where your dreams take flight.
                </p>
            </div>
            <div className='about__images'><ImageSlider />
                <ImageSlider /></div>
        </section>
    )
}