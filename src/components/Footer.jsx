import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../css/Footer.scss"
import {nav} from "../data/data"
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-main">
        <div className="list-of-data">
        <div className="logo">
          <img src="/image/logo-white.png" alt="" />
          <div className="list-of-data">
          <h2>RUBY REALTY VENTURES</h2>
          <h3>131, 100 Feet Road, 1st Floor, R.K.P. Plaza,</h3>
          <h3>Gandhipuram, Coimbatore - 641 012</h3>
          </div>
        </div>
        </div>

        <div className="list-of-data">
          <h4>Quick Links</h4>
            {nav.map((list, index)=>(
              <div className="links">
                <HashLink
                    to={list.path}
                    scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'center' })}
                  >
                  {list.text}
                  </HashLink>
              </div>
            ))}
        </div>

        <div className="list-of-data">
            <h4>Contact Us</h4>
            <h5>+91 9894209390</h5>
            <h5>+91 9677984243</h5>
        </div>
      </div>

      <hr />
      <h6>KR | ©2023 All Right Reserved</h6>
    </div>
  )
}

export default Footer