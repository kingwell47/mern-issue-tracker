import React from "react";
import Grid from "@mui/material/Grid";
import ProjectCard from "./ProjectCard";

const Projects = ({ data }) => {
  return (
    <>
      {data.map((item, index) => (
        <Grid item xs={2} sm={4} md={4} key={index}>
          <ProjectCard info={item} />
        </Grid>
      ))}
    </>
  );
};

export default Projects;
