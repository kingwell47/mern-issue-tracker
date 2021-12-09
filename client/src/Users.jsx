import React from "react";
import Paper from "@mui/material/Paper";

import { DataGrid } from "@mui/x-data-grid";
import Title from "./components/Title";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.getValue(params.id, "firstName") || ""} ${
        params.getValue(params.id, "lastName") || ""
      }`,
  },
  { field: "role", headerName: "Role", width: 130 },
  { field: "issueCreated", headerName: "Created", type: "number", width: 130 },
  {
    field: "issueAssigned",
    headerName: "Assigned",
    type: "number",
    width: 130,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35, role: "Bastard" },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42, role: "Queen" },
  {
    id: 3,
    lastName: "Lannister",
    firstName: "Jaime",
    age: 45,
    role: "Kingsguard",
  },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16, role: "Child" },
  {
    id: 5,
    lastName: "Targaryen",
    firstName: "Daenerys",
    age: null,
    role: "Exile",
  },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150, role: "Priest" },
  {
    id: 7,
    lastName: "Clifford",
    firstName: "Ferrara",
    age: 44,
    role: "Some person",
  },
  {
    id: 8,
    lastName: "Frances",
    firstName: "Rossini",
    age: 36,
    role: "Some person",
  },
  {
    id: 9,
    lastName: "Roxie",
    firstName: "Harvey",
    age: 65,
    role: "Some person",
  },
];

const Users = () => {
  return (
    <>
      <Title>Users</Title>

      <Paper style={{ height: "45rem", width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={15}
          rowsPerPageOptions={[15]}
          checkboxSelection
        />
      </Paper>
    </>
  );
};

export default Users;
