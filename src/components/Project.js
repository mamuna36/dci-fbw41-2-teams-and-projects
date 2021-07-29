import React from "react";
import Person from "./Person";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardFooter,
  Badge,
  Button
} from "shards-react";

const Project = ({ project }) => {
  return (
    <Col lg="6" md="12" sm="12" className="mb-4" >
      <Card small className="card-post card-post--aside card-post--1">
        <div
          className="card-post__image"
          style={{ backgroundImage: `url(${project.projectImage})`, backgroundSize: 'contain' }}
        >
          
        </div>
        <CardBody>
          <h5 className="card-title">
            <a href="#" className="text-fiord-blue">
              {project.projectTitle}
            </a>
            
          </h5>
          <p className="card-text d-inline-block mb-3">{project.summary}</p>
          <div className="card-post__author d-flex">
            {project.team.map((member) => {
              return <Person data={member} />
            })}
            
          </div>
          <span className="text-muted">{/*post.date*/}</span>
          <CardFooter className="border-top d-flex">
                <img src={project.techStack} style={{width: '100%'}} />
            
          </CardFooter>
          
        </CardBody>
        
      </Card>
    </Col>
  );
};

export default Project;
