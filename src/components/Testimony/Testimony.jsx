import React from 'react'
import "./Testimony.css";
import card from "../../assets/card.jpg";

const Testimony = () => {
  return (
    <div>
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
    </div>
  )
}

export default Testimony
