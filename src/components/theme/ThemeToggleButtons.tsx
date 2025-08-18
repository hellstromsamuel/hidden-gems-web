import type { ReactNode } from "react";
import { Moon, Sun } from "lucide-react";
import useTheme from "../../hooks/theme/useTheme";
import type { Theme } from "../../types/Theme";
import { Button } from "../ui/button";

interface Props {
  size?: "sm" | "default";
}

function ThemeToggleButtons({ size = "default" }: Props) {
  const { theme, setTheme } = useTheme();

  const themeOptions: { value: Theme; icon: ReactNode }[] = [
    {
      value: "light",
      icon: <Sun className="text-yellow-500" />,
    },
    {
      value: "dark",
      icon: <Moon className="text-blue-500" />,
    },
  ];

  return (
    <div className="flex gap-1 rounded-xl p-1">
      {themeOptions.map((option) => (
        <Button
          key={option.value}
          size={size}
          variant={option.value === theme ? "secondary" : "ghost"}
          onClick={() => setTheme(option.value)}
        >
          {option.icon}
        </Button>
      ))}
    </div>
  );
}

export default ThemeToggleButtons;
