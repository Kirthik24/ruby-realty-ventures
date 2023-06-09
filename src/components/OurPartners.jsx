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
                    <a href={partner.link} target='block' key={index}>
                    <div className="partner-card" key={index}>
                    <div className="details">
                        <img src={partner.image} alt="" />
                        <hr />
                        <div className="flex-c">
                        <h5>{partner.partner_type}</h5>
                        <span className='h7'>{partner.name}</span>
                        <span className='h8' >{partner.company}</span>
                        </div>
                    </div>
                </div>
                    <p>CLICK TO CONNECT</p>
                </a>
                    
                    
                ))}
            </div>
        </div>
    </div>
  )
}

export default OurPartners