import { HiOutlineX } from "react-icons/hi";
import useOutSideClick from "../hooks/useOutSideClick";

export default function Modal({ open, onClose, title, children }) {
  const ref = useOutSideClick(onClose);

  return (
    open && (
      <div className="w-full h-screen z-100 inset-0 backdrop-blur-sm fixed top-0 left-0 bg-secondary-800/20">
        <div
          ref={ref}
          //  برای قرار دادن المان ها در وسط مدال
          className="w-[calc(100vw-3rem)] md:max-w-lg max-h-[calc(100vh-3rem)] overflow-y-auto fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-secondary-0 dark:bg-secondary-700 p-4 shadow-lg transition-all duration-500 ease-out"
        >
          <div className="flex items-center justify-between border-b border-b-secondary-300 dark:border-b-secondary-500 pb-2 mb-6">
            <p className="text-secondary-700 font-bold text-base">{title}</p>
            <button onClick={onClose} className="cursor-pointer">
              <HiOutlineX className="w-5 h-5 text-secondary-500 dark:text-secondary-0" />
            </button>
          </div>
          {children}
        </div>
      </div>
    )
  );
}
