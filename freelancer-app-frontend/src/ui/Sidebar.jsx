import { NavLink } from "react-router-dom";
import ThemeToggle from "../components/ThemeToggle";

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
      <ThemeToggle />
      <ul className="flex flex-col gap-y-1">
        <li className="text-secondary-600 dark:text-dark-secondary-600">
          <NavItem to="dashboard" handleCloseSidebar={handleCloseSidebar}>
            <span>داشبورد</span>
          </NavItem>
        </li>
        <li className="text-secondary-600 dark:text-dark-secondary-600">
          <NavItem to="projects" handleCloseSidebar={handleCloseSidebar}>
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
        className={`flex items-center gap-x-2 p-2 rounded-md transition-all duration-300 hover:bg-primary-100/50 dark:hover:bg-primary-300 hover:text-primary-900 ${({
          isActive,
        }) => (isActive ? "active" : "")}`}
      >
        {children}
      </NavLink>
    </>
  );
}
