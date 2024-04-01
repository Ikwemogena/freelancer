import Image from 'next/image';
import React from 'react'

const members = [
    {
        image: "https://s3-alpha-sig.figma.com/img/62b2/de86/3e5c02d1c4d27a7ec3537a08183734bc?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VsRPEgg6IqOOtWiJtBVUTmRepTDulMW6oYBmTntMgufqDQFRAIKiqWtkpGTjeCOy8RDRtI-GPgaK5zN0-dAgCJI29xvk7FQ4pO1jKh54eeftPRE3Q7ttS3yoDoekcdQ3ISYcj3MNEQrwQHDLXyd60G80uEFBapKQ5Q5EiTPv246jdz4yoSD1OPQkdJ5B7g00lPBu4uirUlNHhf~OGXAmoVhj0JO1Ism6y5Kr~RARSvB3lqaf5mAXx8faGlry9xdVwwRel7Np96ahUASoWQvODeC1s0nNzS5AIHHh213ZijRuNHRBeIiFxB-XpaDXTTq7ca1hI1g0kN~61~2-aGlOsQ__",
        name: "John Doe",
        role: "Community Manager"
    },
    {
        image: "https://s3-alpha-sig.figma.com/img/bde1/f480/1b16043d46286fa9c6617a21044f1a01?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OtO18tbH4Ggz7OkYiKkLdtMQbaMCuVC7pS3PPTkRqWyAKb4vGvVXeznBXQSatHFGjBN~UPm9b0x6BWRvAMvWcq2BdlglDWvCuo6SHX9bUIJ3yFrj~G01hNxMQaWSx8xzJsnnnvitPVS98YBGfA~MYY4UbfVPbaCSaimt9iGrbtRg4BRyLIVcmUnbhEFOMAppMgsdejo1uq1RJFAbXeDkF7HHbqdT4FppKoDNGfdf0hGlE42e11-Io9pb0Ax9BPs4mbil1j1TTxRZdldSrfYdWANqiZTW3hNvbKT7M6y1K8QhU3KYhhx7wwUaex6UBkjJNFw4odcWEy5VCd971l4qNQ__",
        name: "Henry Arthur",
        role: "General Manager"
    },
    {
        image: "https://s3-alpha-sig.figma.com/img/95d1/65b3/3fd4ef586125a034d21339e44d3e37a6?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=er3rk-mw-VBoPq5SyUDKRdvTJnJu2eSSZ5cXbt2cxgHklPsXz20yy1MI52Qi6Ae2KCQHyf4Q5mqLhhDU6XYzoyyJ9OaVMZqWVEw5NYu92iCxeX2czdqGpxj9zRu3F4daT60YMKVwtLOuLxxYeTijTLR5rRX0jak6p9I8bhRku09YiHyJPmgcXffjSYL5HeYfq49beM-1IR77BYIArDbIbnfI3xfw3mDtqOXJO3fM-yqNecMV4LDXJKAjXq2Gizoddqp1DvpHIKnV3wWRJAo-QCXMyTMz2DnTwdVntl4etT~SzSYJ4Clgxj5PcFsl085Qmc1rYTRRCLXW~v-6avgKPA__",
        name: "Louise Marvin",
        role: "CEO"
    },
    {
        image: "https://s3-alpha-sig.figma.com/img/9a6f/3143/ae752419508f93ca0fd98e0048fa9908?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KsCvT9jlCl3qWcUJMXOuqr1ssMlYezQB7hlIP5Y5gzPeFmFgr83vemWFWVoG6~D5UAa0Ch2ATlyIIw~YX4iM1Q0S23E4XcBYa4-591nHdieipMhizy0EAw9VJCPcs9096pLpdvJ33duSkKVgKbAz0wbUiV3MO6VepKO~zM8a8Z5E6LpVln-LoRUvwHYRKLODnZeddBZC0xBWvH~2En1jaIl3iGMvscmUaYnrDC317cu7cyoSSNG8~teozYVQT5xA6Qr0grD-~fReGBtCnZibCFJRjYiuhp3W2ECst2MBvdF~6ZcyiHjg3Wwy31TWPbyf34KDz2d4N6fthSiRzGsJYg__",
        name: "Bode Akinwunmi",
        role: "Social Media manager"
    },
    {
        image: "https://s3-alpha-sig.figma.com/img/2d3d/8102/270ef0cffa544455a66472086c482066?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BXZbQ3Ja6Xakfi5-TWXDpIU6nWwSe~45aVPAO3iAmnXxtTgyOrbbsCHOhG1WaEPK2qZPt4KwMBbgN7hkdDM-SK3X-I~9kafxQyixW9VHfbdWljC7SIsqmP43MbH3DmfWgN73sB0AXULFJl47bbqAlPDzgWjq0MjAboKhUblTYJKik1EKl4JFR0XmuOfKnJ0imnj9K0FOk3r8nBPGi3txBS0HZjIsozQMdqoyhoUHdsuVjl1sAhruL564xcmgwj4TtigDOyWuFrf3xBsZN8dw2Br8PKPUnGHb2uXIVrAO-Wx64~~qLUMA~oFh-5RWQx-WIZlzwpFPx3thCzdpNSYzTg__",
        name: "Nguyen Shane",
        role: "Photographer"
    }
]

export default function Team() {
    return (
        <section className='team'>
            <div className="team__heading"><h5>Brains Behind Our Vision.</h5></div>
            <div className="team__members">
                {
                    members.map((member, index) => (
                        <div key={index} className="team__members-card">
                            {/* <div className="team__members-card-image"> */}
                            <Image className='team__members-card-image' src={member.image} alt={member.name} width={348} height={420} />
                            {/* </div> */}
                            <div className="team__members-card-text">
                                <h2>{member.name}</h2>
                                <p>{member.role}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
