import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

import DUMMY_DATA from "./dummy_data.json";

function App() {
  return (
    <div className="container mx-auto">
      <Navbar />
      <Projects data={DUMMY_DATA} />
    </div>
  );
}

export default App;
