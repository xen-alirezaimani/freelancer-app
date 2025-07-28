import { NavLink } from "react-router-dom";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { GoProjectSymlink } from "react-icons/go";

export default function Sidebar({ isOpen, setIsOpen }) {
  const handleCloseSidebar = () => {
    setIsOpen(false);
  };

  return (
    <div
      className={`h-screen w-64 p-5 fixed top-0 right-0 z-100 transform transition-transform duration-300 bg-secondary-100 dark:bg-dark-secondary-100 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <ul className="flex flex-col gap-y-1">
        <li className="text-secondary-600 dark:text-dark-secondary-600">
          <NavItem to="dashboard" handleCloseSidebar={handleCloseSidebar}>
            <MdOutlineSpaceDashboard className="w-5 h-5" />
            <span>داشبورد</span>
          </NavItem>
        </li>
        <li className="text-secondary-600 dark:text-dark-secondary-600">
          <NavItem to="projects" handleCloseSidebar={handleCloseSidebar}>
            <GoProjectSymlink className="w-5 h-5" />
            <span>پروژه ها</span>
          </NavItem>
        </li>
      </ul>
    </div>
  );
}

function NavItem({ children, to, handleCloseSidebar }) {
  return (
    <>
      <NavLink
        to={to}
        onClick={handleCloseSidebar}
        className={`flex items-center gap-x-1 p-2 rounded-md transition-all duration-300 hover:bg-primary-100/50 dark:hover:bg-primary-300 hover:text-primary-900 ${({
          isActive,
        }) => (isActive ? "active" : "")}`}
      >
        {children}
      </NavLink>
    </>
  );
}
