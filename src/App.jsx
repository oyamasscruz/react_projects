import SideBar from "./components/SideBar";
import NoProjectSelected from "./components/NoProjectSelected";
import NewProject from "./components/NewProject";
import { useState } from "react";

function App() {
  const [projects, setProjects] = useState({
    stateProjects: undefined,
    projects: [],
  });

  function handleProjects() {
    setProjects((prev) => {
      return {
        ...prev,
        stateProjects: null,
      };
    });
  }

  function handleNewProjects(projectData) {
    const newProject = {
      id: Math.random(),
      title: projectData.title,
      description: projectData.description,
      date: projectData.date,
    };
    setProjects((prev) => {
      return {
        ...prev,
        projects: [...prev.projects, newProject],
      };
    });
    console.log(projectData);
  }

  let content;

  if (projects.stateProjects === null) {
    content = <NewProject onAddNewProject={handleNewProjects} />;
  } else {
    content = <NoProjectSelected onAddProject={handleProjects} />;
  }

  return (
    <main className="w-2/3 mt-24 flex">
      <SideBar onAddProject={handleProjects} projects={projects.projects} />
      {content}
    </main>
  );
}

export default App;
