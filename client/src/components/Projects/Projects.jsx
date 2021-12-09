import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import ProjectCard from "./ProjectCard";

const Projects = ({ data }) => {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {data.map((item, index) => (
        <Grid item xs={2} sm={4} md={4} key={index}>
          <Paper>
            <ProjectCard info={item} />
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default Projects;
