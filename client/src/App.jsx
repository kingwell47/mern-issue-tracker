import { Routes, Route } from "react-router-dom";

import AppNavbar from "./components/AppNavbar";
import Projects from "./components/Projects";
import NewProject from "./components/NewProject";
import Project from "./components/Project";
import Login from "./components/Login";
import SideBar from "./components/SideBar";

import Box from "@mui/material/Box";

import DUMMY_DATA from "./dummy_data.json";

function App() {
  return (
    <>
      <AppNavbar />
      <Box sx={{ display: "flex", paddingTop: 10, gap: 5 }}>
        <SideBar />
        <Box sx={{ paddingLeft: 30 }}>
          <Routes>
            <Route path="/" exact element={<Projects data={DUMMY_DATA} />} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/new-project" exact element={<NewProject />} />
            <Route path="/projects/:id" exact element={<Project />} />
          </Routes>
        </Box>
      </Box>
    </>
  );
}

export default App;
