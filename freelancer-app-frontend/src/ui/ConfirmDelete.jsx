export default function ConfirmDelete({ resourceName, onClose, disabled, onConfirm }) {
  return (
    <div>
      <h2 className="text-base mb-8 overflow-hidden text-wrap"> آیا از حذف {resourceName} مطمئن هستید؟ </h2>
      <div className="flex justify-between items-center gap-x-10">
        <button disabled={disabled} onClick={onClose} className="btn btn--primary flex-1">
          لغو
        </button>
        <button disabled={disabled} onClick={onConfirm} className="btn btn--danger flex-1">
          تایید
        </button>
      </div>
    </div>
  );
}
