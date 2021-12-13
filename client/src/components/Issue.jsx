import React from "react";
import { useParams } from "react-router-dom";

import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import DUMMY_DATA from "../dummy_data.json";

const Issue = () => {
  const { projectId, issueId } = useParams();

  const project = DUMMY_DATA.filter((item) => item._id === parseInt(projectId));
  const issue = project[0].issues.filter(
    (item) => item.id === parseInt(issueId)
  );
  const { id } = issue[0];

  function createData(name, info) {
    return { name, info };
  }

  const rows = [
    createData("Project", "Project Name"),
    createData("Created by", "Username"),
    createData("Assigned to", "User assigned"),
    createData("Status", "Open"),
    createData("Tags", "tags"),
    createData("Priority", "Low"),
    createData("Status info", "Under investigation"),
  ];

  return (
    <Paper sx={{ p: 2, display: "flex" }}>
      <TableContainer sx={{ width: 300 }}>
        <Table sx={{ width: 300 }} size="small" aria-label="a dense table">
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.info}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box p={2}>
        <div>IssueID {id}</div>
        <div>Issue Text</div>
        <div>Created On</div>
        <div>Last Updated</div>
      </Box>
      <Box p={2}>
        <div>Comments</div>
      </Box>
    </Paper>
  );
};

export default Issue;
