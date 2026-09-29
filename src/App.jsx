import React from 'react'
import LandingPageScreen from './Pages/LandingPageScreen'
import { Route, Routes } from "react-router-dom";
import AboutPage from "./Pages/AboutPage"
import ContactUsPage from './Pages/ContactUsPage/ContactUsPage';
import ServicesPage from './Pages/ServicesPage';
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"

const App = () => {
  return (
    
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPageScreen />} />
        <Route path="/About-Page"  element={<AboutPage />} />
        <Route path="/contact-us"  element={<ContactUsPage />} />
        <Route path="/Services-Page" element={<ServicesPage />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
