import React from 'react'
import "./Footer.css";

const Footer = () => {
  return (
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
  )
}

export default Footer
