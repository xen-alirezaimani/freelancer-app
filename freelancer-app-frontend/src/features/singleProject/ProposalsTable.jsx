import Empty from "./../../ui/Empty";
import Table from "./../../ui/Table";
import ProposalRow from "./ProposalRow";

export default function ProposalsTable({ proposals }) {
  if (!proposals.length) return <Empty resourceName="لیست درخواست ها" />;

  console.log(proposals);
  return (
    <div>
      <Table>
        <Table.Header>
          <th>#</th>
          <td>فریلنسر</td>
          <td>توضیحات</td>
          <td>زمان تحویل</td>
          <td>هزینه</td>
          <td>وضعیت</td>
          <td>عملیات</td>
        </Table.Header>
        <Table.Body>
          {proposals.map((pro, index) => (
            <Table.Row key={pro._id}>
              <ProposalRow proposal={pro} index={index} />
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
