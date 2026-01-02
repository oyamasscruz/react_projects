import { useState } from "react";
import Input from "./Input";
import Button from "./Button";

export default function NewProject({ onAddNewProject }) {
  const [dataInputs, setDataIputs] = useState({
    title: "",
    description: "",
    date: "",
  });

  function handleData(event) {
    const { name, value } = event.target;
    setDataIputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    onAddNewProject(dataInputs);
  }

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <button className="text-stone-800 hover:text-stone-950">Cancel</button>
        <Button onClick={handleSubmit}>Save</Button>
      </menu>
      <div>
        <Input title="Title" type="text" name="title" onChange={handleData} />
        <Input
          title="Description"
          textarea
          name="description"
          onChange={handleData}
        />
        <Input title="Due Date" type="date" name="date" onChange={handleData} />
      </div>
    </div>
  );
}
