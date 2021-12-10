import { Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";

import Projects from "./components/Projects";
import NewProject from "./components/NewProject";
import Project from "./components/Project";
import Login from "./components/Login";

import DUMMY_DATA from "./dummy_data.json";
import Dashboard from "./components/Dashboard/Dashboard";
import DashboardContent from "./components/DashboardContent";
import Issue from "./components/Issue";
import Users from "./Users";

function App() {
  return (
    <>
      <CssBaseline />
      <Dashboard>
        <Routes>
          <Route path="/" element={<DashboardContent />} />
          <Route path="/projects" element={<Projects data={DUMMY_DATA} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/users" element={<Users />} />
          <Route path="/new-project" element={<NewProject />} />
          <Route path="/projects/:projectId" element={<Project />} />
          <Route path="/projects/:projectId/:issueId" element={<Issue />} />
        </Routes>
      </Dashboard>
    </>
  );
}

export default App;
