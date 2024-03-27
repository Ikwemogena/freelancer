import Image from "next/image"

const services = [
    {
        icon: '/assets/icons/rocket.svg',
        heading: 'High-Speed Internet',
        description: 'Experience reliable, lightning-fast internet for seamless productivity'
    },
    {
        icon: '/assets/icons/document-text.svg',
        heading: 'Meeting Rooms',
        description: 'Bookable meeting rooms equipped with AV facilities for presentations and conferences.'
    },
    {
        icon: '/assets/icons/scan.svg',
        heading: 'Printing and Scanning',
        description: 'On-site printing, scanning, and copying services for documents.'
    },
    {
        icon: '/assets/icons/message-question.svg',
        heading: 'Tech Support',
        description: 'Basic IT support for troubleshooting connectivity or equipment issues'
    },
    {
        icon: '/assets/icons/people.svg',
        heading: 'Networking Opportunities',
        description: 'Introductions to potential collaborators, mentors, or investors within the coworking community.'
    },
    {
        icon: '/assets/icons/sms.svg',
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
                    <div key={index} className="services__offerings-card">
                        <Image src={service.icon} alt={service.heading} width={24} height={24} />
                        {/* <Image src='/assets/icons/book.svg' alt='students' width={24} height={24} /> */}
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
