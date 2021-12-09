import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import DUMMY_DATA from "../dummy_data.json";

const Project = () => {
  const { id } = useParams();
  const [projectData, setProjectData] = useState({
    project: "",
    description: "",
    issues: [],
  });

  const navigate = useNavigate();

  useEffect(() => {
    let project = DUMMY_DATA.filter((item) => item._id === parseInt(id));
    setProjectData(project[0]);
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "issue_title",
      headerName: "Issue",
      width: 250,
    },
    {
      field: "created_by",
      headerName: "Created by",
      width: 150,
    },
    {
      field: "assigned_to",
      headerName: "Assigned to",
      width: 150,
    },
    {
      field: "created_on",
      headerName: "Created on",
      width: 150,
    },
    {
      field: "updated_on",
      headerName: "Last update",
      width: 150,
    },
    {
      field: "status",
      headerName: "Status",
      type: Boolean,
      width: 150,
      valueGetter: (params) => (params.row.open ? "open" : "closed"),
    },
    {
      field: "priority",
      headerName: "Priority",
      width: 150,
    },
  ];

  return (
    <Paper sx={{ height: "100%", width: "100%" }}>
      <Box
        sx={{
          height: "45rem",
          width: "100%",
          pt: 2,
          display: "flex",
          flexDirection: "Column",
        }}
      >
        <Typography variant="h5" mb={2} pl={2}>
          {projectData.project}
        </Typography>
        <Typography pl={2} gutterBottom>
          {projectData.description}
        </Typography>
        <Divider />
        <Box
          sx={{
            height: "100%",
            width: "100%",
            "& .data-row": { cursor: "pointer" },
          }}
        >
          <DataGrid
            rows={projectData.issues}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
            checkboxSelection
            disableSelectionOnClick
            onRowClick={(e) => navigate(`./${e.row.id}`)}
            sx={{ border: "none" }}
            getRowClassName={() => "data-row"}
          />
        </Box>
      </Box>
    </Paper>
  );
};

export default Project;
