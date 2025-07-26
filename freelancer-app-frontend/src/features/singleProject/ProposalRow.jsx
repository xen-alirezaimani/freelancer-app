import truncateText from "./../../utils/truncateText";
import Modal from "./../../ui/Modal";
import { useState } from "react";
import ChangeProposalStatus from "./ChangeProposalStatus";

const statusMap = {
  0: { label: "رد شده", className: "badge--danger" },
  1: { label: "در انتظار تایید", className: "badge--secondary" },
  2: { label: "تایید شده", className: "badge--success" },
};

export default function ProposalRow({ proposal, index }) {
  const [openModal, setOpenModal] = useState(false);
  const { _id, status, user, description, duration, price } = proposal;

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
      <td>
        <Modal open={openModal} onClose={() => setOpenModal(false)} title="">
          <ChangeProposalStatus proposalId={_id} onClose={() => setOpenModal(false)} />
        </Modal>
        <button onClick={() => setOpenModal(true)} className="cursor-pointer">
          تغییر وضعیت
        </button>
      </td>
    </>
  );
}
