import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../css/Footer.scss"
import {nav} from "../data/data"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-main">
        <div className="list-of-data">
        <div className="logo">
          <img src="./image/logo-white.png" alt="" />
        </div>
        </div>

        <div className="list-of-data">
          <h4>Quick Links</h4>
            {nav.map((list, index)=>(
              <div className="links">
                <a href={list.path}>{list.text}</a>
              </div>
            ))}
        </div>

        <div className="list-of-data">
            <h4>Contact Us</h4>
            <h5>+91 9894209390</h5>
            <h5>rangaraj@gmail.com</h5>
        </div>
      </div>

      <hr />
      <h6>KR | 2023 All Right Reserved</h6>
    </div>
  )
}

export default Footer