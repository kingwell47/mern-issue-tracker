import React from "react";
import { useParams } from "react-router-dom";

import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

import DUMMY_DATA from "../dummy_data.json";

const Issue = () => {
  const { projectId, issueId } = useParams();

  const project = DUMMY_DATA.filter((item) => item._id === parseInt(projectId));
  const issue = project[0].issues.filter(
    (item) => item.id === parseInt(issueId)
  );
  const { id } = issue[0];
  return (
    <Paper sx={{ p: 2, display: "flex" }}>
      <Box border="1px solid red" p={2}>
        <div>Created By</div>
        <div>Assigned To</div>
        <div>Status</div>
        <div>Priority</div>
        <div>Status Text</div>
      </Box>
      <Box border="1px solid red" p={2}>
        <div>IssueID {id}</div>
        <div>Issue Text</div>
        <div>Created On</div>
        <div>Last Updated</div>
      </Box>
      <Box border="1px solid red" p={2}>
        <div>Comments</div>
      </Box>
    </Paper>
  );
};

export default Issue;
