import React from 'react'

const services = [
    {
        icon: 'er',
        heading: 'High-Speed Internet',
        description: 'Experience reliable, lightning-fast internet for seamless productivity'
    },
    {
        icon: 'er',
        heading: 'Meeting Rooms',
        description: 'Bookable meeting rooms equipped with AV facilities for presentations and conferences.'
    },
    {
        icon: 'er',
        heading: 'Printing and Scanning',
        description: 'On-site printing, scanning, and copying services for documents.'
    },
    {
        icon: 'er',
        heading: 'Tech Support',
        description: 'Basic IT support for troubleshooting connectivity or equipment issues'
    },
    {
        icon: 'er',
        heading: 'Networking Opportunities',
        description: 'Introductions to potential collaborators, mentors, or investors within the coworking community.'
    },
    {
        icon: 'er',
        heading: 'Mail Handling',
        description: 'Reception services for mail and packages, with secure storage for members.'
    }
]

export default function Services() {
    return (
        <section className='services'>
            <div className="services__heading">
                <h2>unlocking potential, together</h2>
            </div>
            <div className="services__offerings">
                {services.map((service, index) => (
                    <div key={index} className="services__offerings-card" >
                        <p>icon</p>
                        <div className="services__offerings-card-text">
                            <h2>{service.heading}</h2>
                            <p>{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
