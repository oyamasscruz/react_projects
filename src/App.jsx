import SideBar from "./components/SideBar";
import NoProjectSelected from "./components/NoProjectSelected";
import NewProject from "./components/NewProject";
import { useState } from "react";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectsState, setProjectsState] = useState({
    stateProjects: undefined,
    projects: [],
  });

  function handleSelectedProject(id) {
    setProjectsState((prev) => {
      return {
        ...prev,
        stateProjects: id,
      };
    });
  }

  function handleDelete() {
    setProjectsState((prev) => {
      return {
        ...prev,
        stateProjects: undefined,
        projects: prev.projects.filter(
          (project) => project.id !== prev.stateProjects
        ),
      };
    });
  }

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

  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.stateProjects
  );

  let content = (
    <SelectedProject project={selectedProject} onDelete={handleDelete} />
  );

  if (projectsState.stateProjects === null) {
    content = (
      <NewProject
        onAddNewProject={handleNewProjects}
        onCancel={handleCancelAddProjects}
      />
    );
  } else if (projectsState.stateProjects === undefined) {
    content = <NoProjectSelected onAddProject={handleProjects} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar
        onSelectProject={handleSelectedProject}
        onAddProject={handleProjects}
        projects={projectsState.projects}
      />
      {content}
    </main>
  );
}

export default App;
