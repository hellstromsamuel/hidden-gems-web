import { supabase } from "@/config/supabase";
import { Button } from "../ui/button";

function LogoutButton() {
  async function handleLogout() {
    await supabase.auth.signOut();
  }
  return <Button onClick={handleLogout}>Logout</Button>;
}

export default LogoutButton;
