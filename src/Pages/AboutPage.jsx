import React from 'react'
import "./AboutPage.css"
import card from "../../src/assets/card.jpg"
import Header from "../components/Header/Header";

const AboutPage = () => {
  return (
    <div>
       <Header />
      <section className="about">
        <div className='about-image'>
          <img src={card} alt="about us"></img>
        </div>
        <div className='about-content'>
          <h2>About Us</h2>
          <h3>We Are A Certified Tech Hub</h3>
          <p>We are passionate about providing quality tech skills and services taht make a difference. Our goal is to equip all our student through excellence and dedication</p>
          <a href="#" className='about-btn'>Learn More</a>
        </div>
      </section>
       <div>
      {/* <!-- Call to action --> */}
       <section className="cta">
        <div className="cta-content">
            <h2>Ready To Begin Your learning?</h2>
            <p>Join and begin learning practical digital skills that can enhance your future</p>
            <a href="#" className="cta-button">Get Started</a>
        </div>
       </section>
    </div>
        <div>
        <footer className="footer">
        <div className="footer-container">
        {/* <!-- about --> */}
         <div className="footer-box">
            <h2>Our Digital Skill Academy</h2>
            <p>Empowering students with practical digital skills for better future</p>
         </div>
          {/* <!-- Quick links --> */}
         <div className="footer-box">

            <h3>Quick links</h3>
            <a href="Home">Home</a>
            <a href="About">About</a>
            <a href="Courses">Courses</a>
            <a href="Contact">Contact</a>
        </div>
        {/* <!-- contact --> */}
          <div className="footer-box">
            <h3>Contact Us</h3>
            <p>Email: Info@example.com</p>
            <p>Phone: +2348132242231</p>
            <p>Owerri, Imo State</p>
          </div>     
        </div>
        {/* <!-- Copyright --> */}
         <div className="copyright">
            <p>&copy; 2026 Our Digital Skills Academy, All Rights Reserved</p>
         </div>
       </footer>
    </div>
    </div>
  )
}

export default AboutPage
