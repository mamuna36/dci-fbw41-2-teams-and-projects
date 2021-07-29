import React, {useState, useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import { NavItem, NavLink, Badge, Collapse, DropdownItem } from "shards-react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody,
  ListGroup,
  ListGroupItem,
  Button
} from "shards-react";
const Person = ({ data }) => {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    document.addEventListener('mousedown', ()=>{
      setVisible(false)
    });
  }, [])
  function toggle(e){
    e.preventDefault()
    setVisible(!visible)
  }
  return (
    <div className="person">
      <a
                href="#"
                onClick={toggle}
                className="card-post__author-avatar card-post__author-avatar--small"
                style={{ backgroundImage: `url('${data.pic}')` }}
              >
              {data.name}
            </a>
            <Collapse
          open={visible}
          className="dropdown-menu dropdown-menu-small"
        >
         
    <CardHeader className="border-bottom">
    <div
          className="person__image"
          style={{ backgroundImage: `url(${data.pic})`, backgroundSize: 'cover' }}
        >
          
        </div>
      <h6 className="m-0">{data.name}</h6>
    </CardHeader>

    <CardBody className="p-0">
      <ListGroup flush>
        <ListGroupItem className="p-3 social-links">
          <span className="d-flex mb-2">
          <a href={data.github}>
            <FontAwesomeIcon icon={faGithub} /> 
          </a>
          <a href={data.linkedIn}>
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href={`mailto:${data.email}`}>
            <FontAwesomeIcon icon={faEnvelopeSquare} />
          </a>
          </span>
        </ListGroupItem>
        
      </ListGroup>
    </CardBody>
        </Collapse>
    </div>
  );
};

export default Person;
