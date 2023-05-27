import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../css/navbar.scss";

import { nav } from "../data/data.js"

function NavBar() {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
      <div className="navbar">
        <div className="big-container">
          <div className="nav">
            <div className="logo">
              <h1>RUBY</h1>
            </div>

            <ul className={toggleMenu ? "nav-elements show-nav" : "nav-elements"}>
              {nav.map((list, index)=>(
                <li key={index}>
                  <NavLink to={list.path}>{list.text}</NavLink>
                </li>
              ))}

              <li><button className="white-button">Contact</button></li>
            </ul>
             
            <button className="toggle-button" onClick={()=>{
              setToggleMenu(!toggleMenu)
            }}><svg viewBox="0 0 100 75" width="23" height="23">
            <rect width="100" height="15"></rect>
            <rect y="25" width="100" height="15"></rect>
            <rect y="50" width="100" height="15"></rect>
          </svg></button>
          </div>
        </div>
      </div>
    );
  }
  
  export default NavBar;