import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "./components/theme/ThemeProvider";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function Providers({ children }: Props) {
  const queryClient = new QueryClient();

  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ThemeProvider>
  );
}

export default Providers;
