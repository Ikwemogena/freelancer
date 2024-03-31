"use client"
import HeroSection from "./ui/hero/hero-section";
import NavBar from "./ui/nav-bar";
import AboutUs from "./ui/about/about-section";
import AudienceSection from "./ui/audience/audience-section";
import Services from "./ui/services/services";
import Testimonial from "./ui/testimonial/testimonial";
import Team from "./ui/team/team";
import Faq from "./ui/faq/faq";
import Footer from "./ui/footer/footer";

export default async function Home() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve('Done!');
      console.log('done loading')
    }, 3000);
  })

  return (
    <main>
      <div className="hero-wrapper">
        <div className='black-overlay'></div>
        <NavBar />
        <HeroSection />
      </div>
      <AboutUs />
      <AudienceSection />
      <Services />
      <div>
        <div className='black-overlay'></div>
        <Testimonial />
      </div>
      <Team />
      <Faq />
      <Footer />
    </main>
  );
}
