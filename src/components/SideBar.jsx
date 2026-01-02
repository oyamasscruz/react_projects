import Button from "./Button";

export default function SideBar({ onAddProject, projects }) {
  return (
    <aside className="w-1/3 bg-black text-white h-full">
      <div>
        <h2>Your Projects</h2>
        <Button onClick={onAddProject}>+ Add new Project</Button>
      </div>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>{project.title}</li>
        ))}
      </ul>
    </aside>
  );
}
