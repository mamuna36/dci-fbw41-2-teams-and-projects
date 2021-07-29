import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";

const Person = ({ data }) => {
  return (
    <div className="person">
      <div class="person-img-container">
        <img src={data.pic} alt={`image_for_${data.name}`}></img>
      </div>
      <p>{data.name}</p>
      <div className="contact-details">
        <div>
          <a href={data.github}>
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
        <div>
          <a href={data.linkedIn}>
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
        <div>
          <a href={data.email}>
            <FontAwesomeIcon icon={faEnvelopeSquare} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Person;
