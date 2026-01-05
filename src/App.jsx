import SideBar from "./components/SideBar";
import NoProjectSelected from "./components/NoProjectSelected";
import NewProject from "./components/NewProject";
import { useState } from "react";

function App() {
  const [projectsState, setProjectsState] = useState({
    stateProjects: undefined,
    projects: [],
  });

  function handleCancelAddProjects() {
    setProjectsState((prev) => {
      return {
        ...prev,
        stateProjects: undefined,
      };
    });
  }

  function handleProjects() {
    setProjectsState((prev) => {
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
    setProjectsState((prev) => {
      return {
        ...prev,
        stateProjects: undefined,
        projects: [...prev.projects, newProject],
      };
    });
  }
  console.log(projectsState);

  let content;

  if (projectsState.stateProjects === null) {
    content = (
      <NewProject
        onAddNewProject={handleNewProjects}
        onCancel={handleCancelAddProjects}
      />
    );
  } else {
    content = <NoProjectSelected onAddProject={handleProjects} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar
        onAddProject={handleProjects}
        projects={projectsState.projects}
      />
      {content}
    </main>
  );
}

export default App;
