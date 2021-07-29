import Project from "./Project";
import { projectData } from "../projectsData";

import "bootstrap/dist/css/bootstrap.min.css";
import "../shards-dashboard/styles/shards-dashboards.1.1.0.min.css";
import "./App.css";

import {
  Container,
  Row
} from "shards-react";

import PageTitle from "../components/common/PageTitle";

function App() {
  return (
    <div className="App">
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="FBW41-2 Final Projects" subtitle="DCI" className="text-sm-left" />
        </Row>
        
        <Row>
          {projectData.map((e) => {
            return <Project project={e} />;
          })}
        </Row>
      </Container>
    </div>
  );
}

export default App;
