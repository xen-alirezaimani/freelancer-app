import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { EditProjectApi } from "../../services/projectService";

export default function useEditProject() {
  const queryClient = useQueryClient();

  const { isPending: isEditing, mutate: editProject } = useMutation({
    mutationFn: EditProjectApi,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: ["owner-projects"] });
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message);
    },
  });

  return { isEditing, editProject };
}
