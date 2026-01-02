import Button from "./Button";

export default function SideBar({ onAddProject, projects }) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <div>
        <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
          Your Projects
        </h2>
        <Button onClick={onAddProject}>+ Add new Project</Button>
      </div>
      <ul className="mt-10">
        {projects.map((project) => (
          <li
            key={project.id}
            className="mb-1 hover:bg-stone-800 cursor-pointer"
          >
            {project.title}
          </li>
        ))}
      </ul>
    </aside>
  );
}
