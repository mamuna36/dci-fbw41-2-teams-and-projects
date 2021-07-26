import "./App.css";
import Project from "./Project";
import { projectData } from "../projectsData";

function App() {
  return (
    <div className="App">
      <h1>Digital Career Institute</h1>
      <h3>Final presentation</h3>
      <h3>30th July 2021</h3>
      <div className="main-container">
        {projectData.map((e) => {
          return <Project project={e} />;
        })}
      </div>
    </div>
  );
}

export default App;
