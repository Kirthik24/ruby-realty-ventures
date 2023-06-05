import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  useParams
} from "react-router-dom";
import { projects } from "../data/data";

const SingleProject = () => {
    let { id } = useParams();
    const the_project = projects[id-1];
  return (
    <div className="singleproject">
        <h1>{the_project.project_name}</h1>
        
    </div>
  )
}

export default SingleProject