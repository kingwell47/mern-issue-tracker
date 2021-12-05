import { Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";

import Projects from "./components/Projects";
import NewProject from "./components/NewProject";
import Project from "./components/Project";
import Login from "./components/Login";

import DUMMY_DATA from "./dummy_data.json";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Projects data={DUMMY_DATA} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/new-project" element={<NewProject />} />
        <Route path="/projects/:id" element={<Project />} />
      </Routes>
    </>
  );
}

export default App;
