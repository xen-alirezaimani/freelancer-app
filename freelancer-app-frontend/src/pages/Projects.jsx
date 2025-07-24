import { useState } from "react";
import ProjectsTable from "../features/projects/ProjectTable";
import CreateProjectForm from "../features/projects/CreateProjectForm";
import Modal from "../ui/Modal";

export default function Projects() {
  const [addNewProjectOpen, setAddNewProjectOpen] = useState(false);

  return (
    <div>
      <div className="mb-10">
        <button onClick={() => setAddNewProjectOpen(true)} className="btn btn--primary">
          افزودن پروژه جدید
        </button>

        <Modal title="افزودن پروژه جدید" open={addNewProjectOpen} onClose={() => setAddNewProjectOpen(false)}>
          <CreateProjectForm onclose={() => setAddNewProjectOpen(false)} />
        </Modal>
      </div>

      <ProjectsTable />
    </div>
  );
}
