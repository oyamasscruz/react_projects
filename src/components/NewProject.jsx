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
    console.log(dataInputs);
  }

  return (
    <div className="flex flex-col">
      <div>
        <button>Cancel</button>
        <Button onClick={handleSubmit}>Save</Button>
      </div>
      <div className="flex flex-col mt-24">
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
