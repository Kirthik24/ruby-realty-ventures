import React from 'react'
import "../css/home.scss"
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'

const Home = () => {
  return (
    <div className="home">
      <Hero/>
      <About/>
      <Services/>
    </div>
  )
}

export default Home