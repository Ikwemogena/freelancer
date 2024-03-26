import Image from "next/image";
import HeroSection from "./ui/hero/hero-section";
import NavBar from "./ui/nav-bar";
import AboutUs from "./ui/about/about-section";
import AudienceSection from "./ui/audience/audience-section";
import Services from "./ui/services/services";
import Testimonial from "./ui/testimonial/testimonial";
import Team from "./ui/team/team";
import Faq from "./ui/faq/faq";
import Footer from "./ui/footer/footer";
// import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <NavBar />
      <HeroSection />
      <AboutUs />
      <AudienceSection />
      <Services />
      <Testimonial />
      <Team />
      <Faq />
      <Footer />
    </main>
  );
}
