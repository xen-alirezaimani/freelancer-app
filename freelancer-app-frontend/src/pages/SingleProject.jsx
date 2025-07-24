import useSingleProject from "../features/singleProject/useSingleProject";
import Loading from "./../ui/Loading";
import ProjectHeader from "./../features/singleProject/ProjectHeader";
import ProposalsTable from "./../features/singleProject/ProposalsTable";

export default function SingleProject() {
  const { project, isLoading } = useSingleProject();

  if (isLoading) return <Loading />;

  console.log(project);

  return (
    <div>
      <ProjectHeader project={project} />
      <ProposalsTable proposals={project.proposals} />
    </div>
  );
}
