import React from "react";
import Project from "./Project";

const Projects = ({ data }) => {
  return (
    <div className="flex flex-col p-3 pt-20 gap-3">
      {data.map((item, index) => (
        <Project info={item} key={index} />
      ))}
    </div>
  );
};

export default Projects;
