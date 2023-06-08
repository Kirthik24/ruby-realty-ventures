import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../css/navbar.scss";

import { HashLink } from 'react-router-hash-link';

import { nav } from "../data/data.js"

function NavBar() {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
      <div className="navbar" id="#navbar">
        <div className="big-container">
          <div className="nav">
            <div className="logo">
              <img src="./image/logo.png" alt="" />
            </div>

            <ul className={toggleMenu ? "nav-elements show-nav" : "nav-elements"}>
              {nav.map((list, index)=>(
                <li key={index}>
                  <HashLink
                    to={list.path}
                    scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: `${list.scrollpos}` })}
                  >
                    {list.text}
                  </HashLink>
                </li>
              ))}

              <li><button className="white-button"><HashLink
                    to={"#footer"}
                    scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}
                  >
                    {"Contact"}
                  </HashLink>
                  </button></li>
            </ul>
             
            <button className="toggle-button" onClick={()=>{
              setToggleMenu(!toggleMenu)
            }}><svg viewBox="0 0 100 75" width="23" height="23">
            <rect width="100" height="15"></rect>
            <rect y="25" width="100" height="15"></rect>
            <rect y="50" width="100" height="15"></rect>
          </svg>
          </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default NavBar;