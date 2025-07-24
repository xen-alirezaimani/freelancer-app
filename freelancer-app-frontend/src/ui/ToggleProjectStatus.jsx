import useToggleProjectStatus from "../features/projects/useToggleProjectStatus";
import ToggleSwich from "./ToggleSwich";

export default function ToggleProjectStatus({ project }) {
  const { isUpdating, toggleProjectStatus } = useToggleProjectStatus();

  const handleToggle = () => {
    const newStatus = project.status == "OPEN" ? "CLOSED" : "OPEN";
    toggleProjectStatus({ id: project._id, data: { status: newStatus } });
  };

  return (
    <div className="flex justify-center items-center">
      <ToggleSwich onChange={handleToggle} status={project.status} />
    </div>
  );
}
