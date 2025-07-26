import { HiArrowRight } from "react-icons/hi";
import useMoveBack from "./../../hooks/useMoveBack";

export default function ProjectHeader({ project }) {
  const moveBack = useMoveBack();

  return (
    <div className="flex items-center justify-baseline gap-x-4 mb-10">
      <button onClick={moveBack} className="cursor-pointer">
        <HiArrowRight className="w-5 h-5 text-secondary-500" />
      </button>

      <h1 className="text-xl"> لیست درخواست های {project.title} </h1>
    </div>
  );
}
