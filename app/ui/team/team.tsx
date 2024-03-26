import React from 'react'

const iterations = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function Team() {
    return (
        <section className='team'>
            <div className="team__heading"><h5>Brains Behind Our Vision.</h5></div>
            <div className="team__members">
                {
                    iterations.map((n, index) => (
                        <div key={index} className="team__members-card">
                            <div className="team__members-card-image">
                                {/* <img src="/images/team-member-1.jpg" alt="team-member-1" /> */}
                            </div>
                            <div className="team__members-card-text">
                                <h2>Leslie Alexander</h2>
                                <p>Co-Founder & CEO</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
