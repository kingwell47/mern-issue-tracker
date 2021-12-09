import React from "react";
import Paper from "@mui/material/Paper";
import { useParams } from "react-router-dom";

const Issue = () => {
  const { issueId } = useParams();
  return (
    <Paper sx={{ p: 2 }}>
      <h2>Hello Issue {issueId}</h2>
    </Paper>
  );
};

export default Issue;
