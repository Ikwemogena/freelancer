import React from 'react'

const faqs = [
    'What amenities are included in the coworking space?',
    'Can I use the coworking space on weekends and after hours?',
    'How do I book meeting rooms, and is there an additional cost?',
    'Are there any networking or community events held at the coworking space?',
    'Can I bring guests or clients to the coworking space?',
    ' Is parking available at the coworking space?'
]

function Faq() {
    return (
        <section className='faq'>
            <div className="faq__title">
                faq
            </div>

            <div className="faq__items">
                {
                    faqs.map((faq, index) => (
                        <p key={index}>{faq}</p>
                    ))
                }
            </div>

        </section>
    )
}

export default Faq