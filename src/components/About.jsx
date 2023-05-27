import React from 'react'
import "../css/about.scss"
import aboutimg from "../assets/about-1.jpg"
const About = () => {
  return (
    <div className="about">
        <div className="about-box container">
            <img src={aboutimg} />
            <div className="text">
                <h2>We're on a Mission to Change
                View of Real Estate Field.</h2>
                <p>
                    Ruby Realty Ventures is not just about building homes, workspaces, and retail spaces. 
                    It is a way of thinking and creating. Rooted in a development legacy of over a decade, 
                    innovation in techniques and the customer’s needs have been the cornerstones of all our projects.
                </p>
            </div>
        </div>
    </div>
  )
}

export default About