import React from 'react'
import card from "./assets/card.jpg"


const App = () => {
  return (
    <div>
    {/* <!-- Head --> */}
     <section>
        <header>
            <div className="nav-links-text"><a href="#">Home</a></div>
             <div className="nav-links-text"><a href="#">About</a></div>
              <div className="nav-links-text"><a href="#">Contact</a></div>
               <div className="nav-links-text"><a href="#">services</a></div>

        </header>
     </section>
     <section className="hero">
        <div className="overlay">
            <div className="hero-content">
                <h1>Welcome to my webpage</h1>
                <p>learn fullstack software development, UI/UX graphics design and other digital skills</p>
                <button>Get Started</button>
            </div>
        </div>
     </section>
     {/* <!-- About section --> */}
     <section className="about">
        <div className="about-text">
            <h3>About us</h3>
            <h2>Building skills, <br />Building Future</h2>
            <p>At Morning Class digital Academy, we provide practical className that helps you create a future</p>
            <ul>
                <li>&#10004; Digital Marketing</li>
                <li>&#10004; web Development</li>
                <li>&#10004; Digital Marketing</li>
                <li>&#10004; Digital Marketing</li>
            </ul>
            <a href="www.google.com" className="btn">learn more</a>
        </div>
        <div className="about-image">
            <img src="../pictures/beloved.jpg" alt="about image" />
        </div>
     </section>
     {/* <!-- TESTIMONY --> */}
      <section className="testimonials">
        <h4>TESTIMONIES</h4>
        <h2>Feedback From Our Student</h2>
        <div className="testimonial-container">
            <div className="card">
                <img src={card} alt='hjfjk'/>
                <h3>Oluchi Iwueze</h3>
                <p>This Academy completely changed my career in tech. I learnt how to design from scratch in this program</p>
            </div>
            <div className="card">
                <img src={card} alt="io"/>
                <h3>Jamine Okeke</h3>
                <p>This Academy has state of the art facilities and a very wonderful learning enviroment that help me learn and now i am a senior developer</p>
            </div>
            <div className="card">
                <img src={card} alt='hjfjk'/>
                <h3>Chidinma Maxwell</h3>
                <p>The Academy facilitators are amazing, they possess a very high level teaching and knowledge training skill, helping all student gain tarcid knowledge as far as tech is concerne</p>
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

       {/* <!-- Footer --> */}

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

export default App
