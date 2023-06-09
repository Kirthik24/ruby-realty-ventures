import React from 'react'
import "../css/OurPartners.scss"
import { partners } from '../data/data'

const OurPartners = () => {
  return (
    <div className="container">
        <div className="partners-container">
            <h5>OUR PARTNERS</h5>
            <div className="partners">
                {partners.map((partner, index)=>(
                    <a href={partner.link} target='block'>
                    <div className="partner-card" key={index}>
                    <img src={partner.image} alt="" />
                    <div className="details">
                        <h5>{partner.partner_type}</h5>
                        <h7>{partner.name}</h7>
                        <h8>{partner.company}</h8>
                    </div>
                </div></a>
                    
                ))}
            </div>
        </div>
    </div>
  )
}

export default OurPartners