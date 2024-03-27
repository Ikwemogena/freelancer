import Image from 'next/image'

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
                faq&apos;s
            </div>

            <div className="faq__items">
                {
                    faqs.map((faq, index) => (
                        <div key={index} className='faq-title'><p>{faq}</p> <Image src="/assets/icons/arrow-down-right.svg" alt={faq} width={24} height={24} /></div>
                    ))
                }
            </div>

        </section>
    )
}

export default Faq