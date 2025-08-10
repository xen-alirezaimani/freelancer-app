import { createContext, useContext, useEffect, useState } from "react";

const DarkModeContext = createContext();

export default function DarkModeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return <DarkModeContext.Provider value={{ theme, toggleTheme }}>{children}</DarkModeContext.Provider>;
}

export function useTheme() {
  const context = useContext(DarkModeContext);
  if (context === undefined) throw new Error("Toggle theme not available");

  return context;
}
