import Table from "../../ui/table";
import useOwnerProjects from "./useOwnerProjects";
import Loading from "./../../ui/Loading";
import Empty from "./../../ui/Empty";
import ProjectRow from "./ProjectRow";
import CreateProjectForm from "./CreateProjectForm";

export default function ProjectsTable() {
  const { projects, isLoading } = useOwnerProjects();

  // ? if isLoading => Loader
  // ? else if projects.length = 0 => empty ...
  // ? else => show projects

  if (isLoading) return <Loading />;
  if (!projects.length) return <Empty resourceName="پروژه" />;

  return (
    <>
      <Table>
        <Table.Header>
          <th>#</th>
          <th>عنوان پروژه</th>
          <th>دسته بندی</th>
          <th>بودجه</th>
          <th>ددلاین</th>
          <th>تگ ها</th>
          <th>فریلنسر</th>
          <th>وضعیت</th>
          <th>عملیات</th>
        </Table.Header>
        <Table.Body>
          {projects.map((project, index) => (
            <Table.Row key={project._id}>
              <ProjectRow project={project} index={index} />
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </>
  );
}
