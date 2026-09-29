import React from 'react'
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Testimony from '../components/Testimony/Testimony';
import Cta from '../components/Cta/Cta';
import Footer from '../components/Footer/Footer';
const LandingPageScreen = () => {
  return (
    <div>
    <Hero />
    <About />
    <Testimony />
    <Cta />
    <Footer />
    </div>
  )
}

export default LandingPageScreen
