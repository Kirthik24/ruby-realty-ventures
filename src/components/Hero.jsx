import React from 'react'
import "../css/hero.scss"
import NavBar from './Navbar'
const Hero = () => {
  return (
    <div className="hero">
        <div className="container">
        <NavBar/>
        <h1>
         RUBY REALTY VENTURES
        </h1>
        <h4>Build Your Dream Property</h4>
        </div>
        <img className= "hero-img"src="\image\house-cutout-2.png" alt="" />
    </div>
  )
}

export default Hero