import React from 'react'
import "../css/home.scss"
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'

const Home = () => {
  return (
    <div className="home">
      <section id = ""><Hero/></section>
      <section id = "about"><About/></section>
      <section id = "services"><Services/></section>
    </div>
  )
}

export default Home