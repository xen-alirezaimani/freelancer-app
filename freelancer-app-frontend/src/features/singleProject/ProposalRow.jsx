import truncateText from "./../../utils/truncateText";

export default function ProposalRow({ proposal, index }) {
  return (
    <>
      <td>{index + 1}</td>
      <td>{proposal.user.name}</td>
      <td>{truncateText(proposal.description)}</td>
      <td>{proposal.duration} روز</td>
      <td>{proposal.price}</td>
      <td>{proposal.status}</td>
    </>
  );
}
