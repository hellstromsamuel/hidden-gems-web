import useAuthSession from "@/hooks/useAuthSession";
import { cn } from "../../lib/utils";
import ThemeToggleButtons from "../theme/ThemeToggleButtons";
import LogoutButton from "./LogoutButton";

interface Props {
  className?: string;
}

function Header({ className }: Props) {
  const { session } = useAuthSession();
  return (
    <div
      className={cn(
        "bg-white dark:bg-gray-900 h-16 px-4 w-full flex justify-between items-center",
        className
      )}
    >
      <h1 className="font-semibold text-xl">Hidden Gems</h1>

      <div className="flex items-center gap-2">
        {session && <LogoutButton />}
        <ThemeToggleButtons />
      </div>
    </div>
  );
}

export default Header;
