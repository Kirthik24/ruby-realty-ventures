import React from 'react'
import "../css/home.scss"
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import OurProjects from '../components/OurProjects'
import OurPartners from '../components/OurPartners'

const Home = () => {
  return (
    <div className="home">
      <section id = "hero"><Hero/></section>
      <section id = "about"><About/></section>
      <section id = "services"><Services/></section>
      <section id = "projects"><OurProjects/></section>
      <section id = "partners"><OurPartners/></section>
    </div>
  )
}

export default Home