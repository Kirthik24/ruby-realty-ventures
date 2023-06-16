import React from 'react'
import "../css/hero.scss"
import NavBar from './Navbar'
const Hero = () => {
  return (
    <>
          <NavBar/>
    <div className="hero">
          <div className="hero-content container">
            <div className="text">
              <h1>
              RUBY 
              <br /> REALTY 
              <br />
              VENTURES
              </h1>
              <h4>Build Your Dream Property</h4>
            </div>
            
            {/* <img className= "hero-img" src="\image\hero-4.jpg" alt="" /> */}
        </div>
    </div>
    </>
  )
}

export default Hero