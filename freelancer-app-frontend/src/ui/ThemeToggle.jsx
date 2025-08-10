import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";
import { useTheme } from "../context/DarkModeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="flex items-center cursor-pointer transition-all duration-300">
      {theme === "dark" ? <IoSunnyOutline className="w-5 h-5" /> : <IoMoonOutline className="w-5 h-5" />}
    </button>
  );
}
