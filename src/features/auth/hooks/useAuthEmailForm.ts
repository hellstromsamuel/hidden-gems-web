import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z, { email } from "zod";
import { signInWithEmail } from "../api/auth";
import { useState } from "react";
import { toast } from "sonner";

const formSchema = z.object({
  email: email({ message: "Invalid email" }),
});

type AuthEmailFormValues = z.infer<typeof formSchema>;

function useAuthEmailForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const form = useForm<AuthEmailFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSent(false);
    setIsLoading(true);

    try {
      await signInWithEmail(values.email);
      setIsSent(true);
      toast.success("Sign in link sent to email");
    } catch (error) {
      console.error(error);
      toast.error("Failed to send sign in link");
    } finally {
      setIsLoading(false);
    }
  }

  return { form, onSubmit, isLoading, isSent };
}

export default useAuthEmailForm;
