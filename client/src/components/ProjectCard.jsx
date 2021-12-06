import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const ProjectCard = ({ info }) => {
  const { project, description, issues, _id } = info;
  const pending = issues.filter((item) => item.open === true);

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {_id}
          </Typography>
          <Typography variant="h5" component="div" sx={{ mb: 1.5 }}>
            {project}
          </Typography>
          <Typography variant="body2" gutterBottom>
            {description}
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              mt: 1.5,
            }}
          >
            <Typography color="text.secondary">
              Issues: {issues.length}
            </Typography>
            <Typography color="text.secondary">
              Pending: {pending.length}
            </Typography>
            <Typography color="text.secondary">
              Resolved: {issues.length - pending.length}
            </Typography>
          </Box>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default ProjectCard;
