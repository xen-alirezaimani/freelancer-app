import { IoLogOutOutline } from "react-icons/io5";
import useLogout from "./useLogout";

export default function Logout() {
  const { isPending, logout } = useLogout();

  return (
    <button onClick={logout} className="flex items-center gap-x-1 cursor-pointer transition-all duration-300 hover:text-error">
      <IoLogOutOutline className="w-5 h-5" />
      <span>خروج</span>
    </button>
  );
}
