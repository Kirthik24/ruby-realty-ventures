import React from 'react'
import { projects } from '../data/data'
import "../css/OurProjects.scss"
import { useNavigate } from "react-router-dom"; 

const OurProjects = () => {
    const navigate = useNavigate();
  return (
    <div className="projects container">
        {
            projects.map((project, index)=>(
                <div className="project-card" onClick={()=>navigate(`/singleproject/${project.project_id}`)} key = {index}>
                    <img src={project.images[0]} />
                    <h4>{project.project_name}</h4>
                </div>
            ))
        }
    </div>
  )
}

export default OurProjects