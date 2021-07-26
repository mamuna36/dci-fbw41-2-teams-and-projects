import React from "react";

const Person = ({ data }) => {
  return (
    <div className="person">
      <p>{data.name}</p>
      <a href={data.github}>github</a>
      <a href={data.linkedIn}>Linkedin</a>
    </div>
  );
};

export default Person;
