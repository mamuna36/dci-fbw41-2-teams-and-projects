import React from "react";
import Person from "./Person";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Project = ({ project }) => {
  return (
    <div className="project-container">
      <h2>{project.projectTitle}</h2>
      <img
        src={project.projectImage}
        alt={`image_for_${project.projectTitle}`}
      ></img>
      <p>{project.summary}</p>
      <div>
        <a href={project.link}>{project.projectTitle}</a>
      </div>
      <div>
        <a href={project.frontendRepo}>Frontend Repository</a>
      </div>
      <div>
        <a href={project.backendRepo}>Backend Repository</a>
      </div>
      <h3>Team</h3>
      <div className="team-container">
        {project.team.map((e) => (
          <Person data={e} />
        ))}
      </div>
    </div>
  );
};

export default Project;
