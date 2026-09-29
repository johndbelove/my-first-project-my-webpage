import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
    <section>
        <header>
            <div className="nav-links-text"><Link to="/">Home</Link></div>
             <div className="nav-links-text"><Link to="/About-Page">About</Link></div>
              <div className="nav-links-text"><Link to="/contact-us">Contact</Link></div>
               <div className="nav-links-text"><Link to="/Services-Page">services</Link></div>

        </header>
     </section>
    </div>
  )
}

export default Header
