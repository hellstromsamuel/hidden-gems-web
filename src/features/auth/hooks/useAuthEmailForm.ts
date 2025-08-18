import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z, { email } from "zod";
import { signInWithEmail } from "../api/auth";
import { useState } from "react";

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

    try {
      setIsLoading(true);
      await signInWithEmail(values.email);
      setIsSent(true);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return { form, onSubmit, isLoading, isSent };
}

export default useAuthEmailForm;
