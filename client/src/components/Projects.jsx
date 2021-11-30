import React from "react";
import ProjectCard from "./ProjectCard";
import { Link } from "react-router-dom";

const Projects = ({ data }) => {
  return (
    <div className="flex flex-col px-3 pt-20 gap-3">
      {data.map((item, index) => (
        <Link to={`/projects/${item._id}`} key={index}>
          <ProjectCard info={item} />
        </Link>
      ))}
    </div>
  );
};

export default Projects;
