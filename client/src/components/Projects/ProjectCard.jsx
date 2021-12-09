import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const ProjectCard = ({ info }) => {
  const { project, description, issues, _id } = info;
  const pending = issues.filter((item) => item.open === true);

  const navigate = useNavigate();

  let chartData = [
    { name: "Pending", value: pending.length },
    { name: "Resolved", value: issues.length - pending.length },
  ];

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <CardActionArea onClick={() => navigate(`/projects/${_id}`)}>
          <CardContent>
            <Typography variant="h5" component="div" sx={{ mb: 1.5 }}>
              {project}
            </Typography>
            <Typography variant="body2" gutterBottom>
              {description}
            </Typography>

            <Box height={300}>
              <Typography color="text.secondary" gutterBottom>
                Issues: {issues.length}
              </Typography>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart width={400} height={400}>
                  <Pie
                    dataKey="value"
                    isAnimationActive={false}
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    label
                  >
                    {chartData.map((entry) => (
                      <Cell
                        fill={entry.name === "Pending" ? "#F07470" : "#82ca9d"}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
};

export default ProjectCard;
