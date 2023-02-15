import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import ProjectModal from "./components/ProjectModal/ProjectModal";
import StationModal from "./components/StationModal/StationModal";
import React, { useState } from "react";
import Projects from "./DATA.json";

function App() {
  let data = Projects
  console.log(data)
  const [projectModal, setProjectModal] = useState(false);
  const [newProject, setNewProject] = useState(data)
  const [projectIndex, setProjectIndex] = useState(0);
  const [stationModal, setStationModal] = useState(false);
  const [newStation, setNewStation] = useState(data[projectIndex].data)

  data = newProject
  data[projectIndex].data = newStation
  Projects = data
                                                       
  function createProject() {
    setProjectModal(true)
  }

  function createStation(index) {
    setStationModal(true)
    setProjectIndex(index)
    console.log(index)
    setNewStation(data[index].data)
  }


  return (
    <div className="container">
      <Header />
      <Body data={data} setProject={createProject} setStation={createStation}/>
      {projectModal && <ProjectModal dataState={newProject} setState={setProjectModal} addProject={setNewProject}/>}
      {stationModal && <StationModal dataState={newStation} setState={setStationModal} addStation={setNewStation}/>}
    </div>
  );
}

export default App;
