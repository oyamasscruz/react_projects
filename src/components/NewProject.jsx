import { useRef, useState } from "react";
import Input from "./Input";
import Button from "./Button";
import Modal from "../components/Modal";

export default function NewProject({ onAddNewProject, onCancel }) {
  // const [dataInputs, setDataIputs] = useState({
  //   title: "",
  //   description: "",
  //   date: "",
  // });

  // function handleData(event) {
  //   const { name, value } = event.target;
  //   setDataIputs((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  // }

  const modal = useRef();

  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();

  function handleSubmit(event) {
    event.preventDefault();

    const projectData = {
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      date: dueDateRef.current.value,
    };

    if (
      titleRef.current.value.trim() === "" ||
      descriptionRef.current.value.trim() === "" ||
      dueDateRef.current.value.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    onAddNewProject(projectData);
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Close">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">
          Oops ... looks like you forgot to enter a value
        </p>
        <p className="text-stone-600 mb-4">
          Plase, make sure you provide a valid value for every input filds
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <button
            className="text-stone-800 hover:text-stone-950"
            onClick={onCancel}
          >
            Cancel
          </button>
          <Button onClick={handleSubmit}>Save</Button>
        </menu>
        <div>
          <Input
            ref={titleRef}
            title="Title"
            type="text"
            name="title"
            // onChange={handleData}
          />
          <Input
            ref={descriptionRef}
            title="Description"
            textarea
            name="description"
            // onChange={handleData}
          />
          <Input
            ref={dueDateRef}
            title="Due Date"
            type="date"
            name="date"
            // onChange={handleData}
          />
        </div>
      </div>
    </>
  );
}
