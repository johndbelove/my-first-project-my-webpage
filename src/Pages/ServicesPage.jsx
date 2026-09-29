import React from 'react'
import "./ServicesPage.css"
import Header from "../components/Header/Header";

const ServicesPage = () => {
  return (
    <div>
             <Header />
      <section className="services">
    <div className="services-heading">
        <span>WHAT WE DO</span>
        <h2>Our Services</h2>
        <p>
            We provide quality services designed to meet your needs
            and deliver excellent results.
        </p>
    </div>

    <div className="services-container">

        <div className="service-card">
            <div className="service-icon">💡</div>
            <h3>Creative Design</h3>
            <p>
                We create beautiful and creative designs
                that help your brand stand out.
            </p>
            <a href="#">Learn More →</a>
        </div>

        <div className="service-card">
            <div class="service-icon">💻</div>
            <h3>Web Development</h3>
            <p>
                We build modern, responsive and user-friendly
                websites for businesses and individuals.
            </p>
            <a href="#">Learn More →</a>
        </div>

        <div className="service-card">
            <div className="service-icon">📈</div>
            <h3>Digital Marketing</h3>
            <p>
                We help businesses reach more customers
                and grow their online presence.
            </p>
            <a href="#">Learn More →</a>
        </div>

    </div>
</section>
  {/* <!-- Call to action --> */}
       <section className="cta">
        <div className="cta-content">
            <h2>Ready To Begin Your learning?</h2>
            <p>Join and begin learning practical digital skills that can enhance your future</p>
            <a href="#" className="cta-button">Get Started</a>
        </div>
       </section>
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
  )
}

export default ServicesPage
