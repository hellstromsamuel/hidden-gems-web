import { supabase } from "@/config/supabase";
import { Button } from "../ui/button";
import { LogOut } from "lucide-react";
import { useState } from "react";

function LogoutButton() {
  const [isLoading, setIsLoading] = useState(false);

  async function handleLogout() {
    setIsLoading(true);
    try {
      await supabase.auth.signOut();
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <Button
      onClick={handleLogout}
      variant="outline"
      className="text-red-500"
      isLoading={isLoading}
    >
      <LogOut className="size-4" />
      Logout
    </Button>
  );
}

export default LogoutButton;
