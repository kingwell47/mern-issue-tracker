import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import { Routes, Route } from "react-router-dom";

import DUMMY_DATA from "./dummy_data.json";
import NewProject from "./components/NewProject";
import Project from "./components/Project";

function App() {
  return (
    <div className="container mx-auto">
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Projects data={DUMMY_DATA} />} />
        <Route path="/new-project" exact element={<NewProject />} />
        <Route path="/projects/:id" exact element={<Project />} />
      </Routes>
    </div>
  );
}

export default App;
