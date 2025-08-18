import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import useAuthEmailForm from "../hooks/useAuthEmailForm";

function AuthEmailForm() {
  const { form, onSubmit, isLoading, isSent } = useAuthEmailForm();

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <h2 className="font-semibold text-xl">Sign in</h2>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Enter email" type="email" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" isLoading={isLoading} className="w-full">
          Send sign in link
        </Button>

        {isSent && (
          <p className="text-sm text-center">
            Check your email for a sign in link.
          </p>
        )}
      </form>
    </Form>
  );
}

export default AuthEmailForm;
