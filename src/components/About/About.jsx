import React from 'react'
import "./About.css"
import card  from "../../assets/card.jpg";

const About = () => {
  return (
    <div>
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
                  <img src={card} alt='About' />
              </div>
           </section>
    </div>
  )
}

export default About
