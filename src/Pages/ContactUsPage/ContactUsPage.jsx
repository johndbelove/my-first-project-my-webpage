import React from 'react'
import "./ContactUsPage.css"

const ContactUsPage = () => {
  return (
    <div>
     <section className="contact">
      <div className="contact-container">
        <div className="contact-info">
            <h2>Contact Us</h2>
            <p>
                Have a question or want to work with us?
                Send us a message and we'll get back to you.
            </p>
            <div className="info">
                <h3>📍 Address</h3>
                <p>Owerri, Nigeria</p>
            </div>

            <div className="info">
                <h3>📞 Phone</h3>
                <p>+234 813 224 2231</p>
            </div>

            <div className="info">
                <h3>✉️ Email</h3>
                <p>johndbelove@gmail.com</p>
            </div>
        </div>

        <div className="contact-form">
            <h2>Send a Message</h2>

            <form >
                <input type="text" placeholder="Your Name" required />

                <input type="email" placeholder="Your Email" required />

                <input type="text" placeholder="Subject" />

                <textarea placeholder="Your Message" rows="5"></textarea>

                <button type="submit">Send Message</button>
            </form>
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

export default ContactUsPage
