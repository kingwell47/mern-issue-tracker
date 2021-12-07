import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import DUMMY_DATA from "../dummy_data.json";

const Project = () => {
  const { id } = useParams();
  const [projectData, setProjectData] = useState({
    project: "",
    description: "",
    issues: [],
  });

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
      editable: true,
    },
    {
      field: "created_by",
      headerName: "Created by",
      width: 150,
      editable: true,
    },
    {
      field: "assigned_to",
      headerName: "Assigned to",
      width: 150,
      editable: true,
    },
    {
      field: "created_on",
      headerName: "Created on",
      width: 150,
      editable: true,
    },
    {
      field: "updated_on",
      headerName: "Last update",
      width: 150,
      editable: true,
    },
    {
      field: "status",
      headerName: "Status",
      type: Boolean,
      width: 150,
      editable: true,
      valueGetter: (params) =>
        params.getValue(params.id, "open") ? "open" : "closed",
    },
    {
      field: "priority",
      headerName: "Priority",
      width: 150,
      editable: true,
    },
  ];

  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ];

  return (
    <Box sx={{ height: "45rem", width: "100%", pt: 2 }}>
      <Typography variant="h5" mb={2}>
        {projectData.project}
      </Typography>
      <Typography>{projectData.description}</Typography>
      <DataGrid
        rows={projectData.issues}
        columns={columns}
        pageSize={15}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </Box>
  );
};

export default Project;
