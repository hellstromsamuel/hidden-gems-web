import type { ReactNode } from "react";
import { Moon, Sun } from "lucide-react";
import useTheme from "../../hooks/useTheme";
import type { Theme } from "../../types/Theme";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

type ThemeOption = {
  value: Theme;
  label: string;
  icon: ReactNode;
};

const themeOptions: ThemeOption[] = [
  {
    value: "light",
    label: "Lyst",
    icon: <Sun className="text-yellow-500" />,
  },
  {
    value: "dark",
    label: "Mørk",
    icon: <Moon className="text-blue-500" />,
  },
];

interface Props {
  size?: "sm" | "default";
}

function ThemeToggleButtons({ size = "default" }: Props) {
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size={size}>
          {themeOptions.find((option) => option.value === theme)?.icon}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-32">
        <DropdownMenuLabel>Visning</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {themeOptions.map((option) => (
          <DropdownMenuCheckboxItem
            key={option.value}
            checked={theme === option.value}
            onCheckedChange={() => setTheme(option.value)}
            className="flex items-center justify-between"
          >
            {option.label}
            {option.icon}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );

  return (
    <div className="flex items-center px-0.5 gap-1 rounded-lg border h-9">
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
