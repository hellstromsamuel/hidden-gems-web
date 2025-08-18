import { supabase } from "@/config/supabase";

export async function signInWithEmail(email: string) {
  await supabase.auth.signInWithOtp({
    email,
  });
}
