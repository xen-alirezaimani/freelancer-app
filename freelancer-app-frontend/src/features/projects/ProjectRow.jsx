import truncateText from "../../utils/truncateText";
import toLocalDateShort from "../../utils/toLocalDateShort";
import { toPersianNumber } from "../../utils/toPersianNumber";
import { FaRegTrashAlt } from "react-icons/fa";
import { TbPencil } from "react-icons/tb";
import { HiEye } from "react-icons/hi";
import Modal from "../../ui/Modal";
import { useState } from "react";
import ConfirmDelete from "../../ui/ConfirmDelete";
import useRemoveProject from "./useRemoveProject";
import CreateProjectForm from "./CreateProjectForm";
import ToggleProjectStatus from "../../ui/ToggleProjectStatus";
import { Link } from "react-router-dom";

export default function ProjectRow({ project, index }) {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const { removeProject, isDeleting } = useRemoveProject();

  return (
    <>
      <td>{index + 1}</td>
      <td>{truncateText(project.title, 30)}</td>
      <td>{project.category.title}</td>
      <td>{toPersianNumber(project.budget)}</td>
      <td>{toLocalDateShort(project.deadline)}</td>
      <td>
        <div className="flex flex-wrap items-center gap-2 max-w-[200px]">
          {project.tags.map((tag) => (
            <span className="badge badge--secondary" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </td>
      <td>{project.freelancer?.name || ""}</td>
      <td>
        <ToggleProjectStatus project={project} />
      </td>
      <td>
        <div className="flex items-center justify-center gap-x-4">
          <>
            <button onClick={() => setIsDeleteOpen(true)} className="cursor-pointer">
              <FaRegTrashAlt className="w-5 h-5 text-primary-900" />
            </button>
            <Modal title={`حذف پروژه ${project.title}`} open={isDeleteOpen} onClose={() => setIsDeleteOpen(false)}>
              <ConfirmDelete
                resourceName={project.title}
                onClose={() => setIsDeleteOpen(false)}
                disabled={false}
                onConfirm={() =>
                  removeProject(project._id, {
                    onSuccess: () => {
                      setIsDeleteOpen(false);
                    },
                  })
                }
              />
            </Modal>
          </>

          <>
            <button onClick={() => setIsEditOpen(true)} className="cursor-pointer">
              <TbPencil className="w-5 h-5 text-error" />
            </button>
            <Modal title={`ویرایش پروژه ${project.title}`} open={isEditOpen} onClose={() => setIsEditOpen(false)}>
              <CreateProjectForm projectToEdit={project} onclose={() => setIsEditOpen(false)} />
            </Modal>
          </>
        </div>
      </td>
      <td>
        <Link to={project._id} className="flex justify-center items-center">
          <HiEye className="w-5 h-5 text-primary-900" />
        </Link>
      </td>
    </>
  );
}
