import Image from "next/image";
// export default function Loader({ isLoading = true }: { isLoading: boolean }) {
export default function Loader() {
    return (
        <section className="loader">
            <div className="loader__wrapper">
                <Image src="/freelancer-logo.svg" alt="Logo" width={35} height={42} />
                <p>Freelancer</p>
            </div>

        </section>
    )
}