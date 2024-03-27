import Image from 'next/image'
import React from 'react'

export default function AudienceSection() {
    return (
        <section className='audience'>
            <div className="audience__content">
                {/* <h1>Open doors, diverse minds: welcomes all</h1> */}
                <div className="audience__content-cards">
                    <Image src='/assets/icons/user.svg' alt='freelancers' width={24} height={24} />
                    <p>Freelancers</p></div>
                <div className="audience__content-cards">
                    <Image src='/assets/icons/book.svg' alt='students' width={24} height={24} />
                    <p>Students</p></div>
                <div className="audience__content-cards">
                    <Image src='/assets/icons/monitor.svg' alt='students' width={24} height={24} />
                    <p>Remote Workers</p></div>
                <div className="audience__content-cards">
                    <Image src='/assets/icons/employee.svg' alt='students' width={24} height={24} />
                    <p>Corporate Employees</p></div>
                <h1>Open doors, diverse minds: welcomes all</h1>
            </div>
        </section>
    )
}
