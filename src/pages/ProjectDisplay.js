import React from 'react'
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
// import GitHubIcon from " @material-ui/icons/Github";
import "../styles/ProjectDisplay.css";



function ProjectDisplay() {
    const { id } = useParams();
    const project = ProjectList[id];
  return (
   <div className="project">
    <h1> {project.name}</h1>
    <img src={project.image} alt="project tile" />
    <p>
        <b>Skills:</b> {project.skills}
    </p>
    {/* <GithubIcon /> */}
    </div>
  );
}

export default ProjectDisplay