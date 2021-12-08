import React from "react";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { useParams, useNavigate } from "react-router-dom";

const Issue = () => {
  const { issueId } = useParams();
  const navigate = useNavigate();
  return (
    <Paper sx={{ p: 2 }}>
      <Button onClick={() => navigate(-1)}>Go back</Button>
      <h2>Hello Issue {issueId}</h2>
    </Paper>
  );
};

export default Issue;
