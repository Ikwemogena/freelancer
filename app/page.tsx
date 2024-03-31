"use client";
import HeroSection from "./ui/hero/hero-section";
import NavBar from "./ui/nav-bar";
import AboutUs from "./ui/about/about-section";
import AudienceSection from "./ui/audience/audience-section";
import Services from "./ui/services/services";
import Testimonial from "./ui/testimonial/testimonial";
import Team from "./ui/team/team";
import Faq from "./ui/faq/faq";
import Footer from "./ui/footer/footer";
import { useEffect, useState } from "react";
import Loader from "./ui/loader/loader";

export default function Home() {

  // async function CallProductsAPI() {
  //   let tmp = await fetch('https://dummyjson.com/products')
  //   let data = await tmp.json()
  //   console.log("Data from API : ", data);
  //   // VISIBLE IN BROWSER CONSOLE
  //   SetProducts(data)
  // }

  const [hasLoaded, setHasLoaded] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setHasLoaded(true)
    }, 2000)
  }, [])
  return (
    <>
      {!hasLoaded && <Loader hasLoaded={hasLoaded} />}
      {hasLoaded && (
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
      )}
    </>
  );
}
