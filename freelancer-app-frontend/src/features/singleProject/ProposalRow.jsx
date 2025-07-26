import truncateText from "./../../utils/truncateText";

const statusMap = {
  0: { label: "رد شده", className: "badge--danger" },
  1: { label: "در انتظار تایید", className: "badge--secondary" },
  2: { label: "تایید شده", className: "badge--success" },
};

export default function ProposalRow({ proposal, index }) {
  const { status, user, description, duration, price } = proposal;

  return (
    <>
      <td>{index + 1}</td>
      <td>{user.name}</td>
      <td>{truncateText(description)}</td>
      <td>{duration} روز</td>
      <td>{price}</td>
      <td>
        <span className={`badge ${statusMap[status].className}`}>{statusMap[status].label}</span>
      </td>
    </>
  );
}
