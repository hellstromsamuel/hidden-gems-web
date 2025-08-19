import { supabase } from "@/config/supabase";
import { Button } from "../ui/button";
import { LogOut } from "lucide-react";

function LogoutButton() {
  async function handleLogout() {
    await supabase.auth.signOut();
  }
  return (
    <Button onClick={handleLogout} variant="outline" className="text-red-500">
      <LogOut className="size-4" />
      Logout
    </Button>
  );
}

export default LogoutButton;
