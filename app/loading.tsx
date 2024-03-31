import Image from "next/image";

export default function Loading() {
    return (
        <section className="loader">
            <div className="loader__wrapper">
                <Image src="/freelancer-logo.svg" alt="Logo" width={35} height={42} />
                <p>Freelancer</p>
            </div>
        </section>
    )
}