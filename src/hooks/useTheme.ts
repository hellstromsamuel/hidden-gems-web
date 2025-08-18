import { useContext } from "react";
import { ThemeProviderContext } from "../components/theme/ThemeProviderContext";

function useTheme() {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  const { theme, setTheme } = context;

  // Toggle between themes
  const toggleTheme = () => {
    if (theme === "light") setTheme("dark");
    else setTheme("light");
  };

  return { ...context, toggleTheme };
}

export default useTheme;
