import { MdOutlineSpaceDashboard } from "react-icons/md";
import ThemeToggle from "./ThemeToggle";
import Logout from "../features/authentication/Logout";
import { Link } from "react-router-dom";

export default function HeaderMenu() {
  return (
    <div>
      <nav>
        <ul className="flex items-center justify-between gap-x-6">
          <li className="text-secondary-600 dark:text-dark-secondary-600">
            <NavItem to="dashboard">
              <MdOutlineSpaceDashboard className="w-5 h-5" />
              <span>داشبورد</span>
            </NavItem>
          </li>
          <li className="text-secondary-600 dark:text-dark-secondary-600">
            <ThemeToggle />
          </li>
          <li className="text-secondary-600 dark:text-dark-secondary-600">
            <Logout />
          </li>
        </ul>
      </nav>
    </div>
  );
}

function NavItem({ children, to }) {
  return (
    <Link to={to} className={`flex items-center gap-x-1 p-2 rounded-md transition-all duration-300 hover:text-primary-900`}>
      {children}
    </Link>
  );
}
