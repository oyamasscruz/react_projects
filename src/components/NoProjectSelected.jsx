import noProjectSelected from "../assets/no-projects.png";
import Button from "./Button";

export default function NoProjectSelected({ onAddProject }) {
  return (
    <div className="text-center">
      <img
        src={noProjectSelected}
        alt="No project selected"
        className="h-24 w-24"
      />
      <p>no project selected, create a new one.</p>
      <p>
        <Button onClick={onAddProject}>+ Add new Project</Button>
      </p>
    </div>
  );
}
