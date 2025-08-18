import { supabase } from "@/config/supabase";
import type { Session } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

function useAuthSession() {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
    return () => subscription.unsubscribe();
  }, []);

  return { session };
}

export default useAuthSession;
