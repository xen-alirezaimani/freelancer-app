import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getSingleProjectApi } from "../../services/projectService";

export default function useSingleProject() {
  const { id } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["project", id],
    queryFn: () => getSingleProjectApi(id),
    retry: false,
  });

  const { project } = data || {};

  return { isLoading, project };
}
