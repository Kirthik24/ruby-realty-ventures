import React from 'react'
import "../css/Services.scss"
import { services } from '../data/data'
const Services = () => {
  return (
    <div className="services">
        <div className="container">
            <h5>OUR SERVICES</h5>
            <h2>Our Main Focus</h2>
            <div className="service-cards">
                {services.map((list, index)=>(
                    <div className="s-card" key = {index}>
                        <img src={list.icon} />
                        <h4>{list.heading}</h4>
                        <p>{list.belowtext}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Services