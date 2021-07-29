import React from "react";
import Person from "./Person";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

const Project = ({ project }) => {
  return (
    <div className="project-container">
      <h2>{project.projectTitle}</h2>
      <p>Project Summary: {project.summary}</p>
      <div className="images">
        <div className="project-image-container">
          <img
            src={project.projectImage}
            alt={`image_for_${project.projectTitle}`}
          ></img>
        </div>
        <div className="project-image-container">
          <img
            src={project.techStack}
            alt={`image_for_${project.projectTitle}`}
          ></img>
        </div>
      </div>

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
