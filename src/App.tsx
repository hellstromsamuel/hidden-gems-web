import { Container } from "./components/ui/container";
import AuthEmailForm from "./features/auth/components/AuthEmailForm";
import useTheme from "./hooks/useTheme";
import useAuthSession from "./hooks/useAuthSession";
import { cn } from "./lib/utils";
import MapInteractive from "./features/map/components/MapInteractive";
import Header from "./components/layout/Header";

function App() {
  const { theme } = useTheme();
  const { session } = useAuthSession();

  return (
    <div
      data-theme={theme}
      className="bg-gray-100 dark:bg-gray-800 min-h-screen min-w-screen relative"
    >
      <div className={cn("left-0 right-0 z-10 p-4", session && "absolute")}>
        <Header
          className={cn("rounded-xl max-w-xl mx-auto", session && "shadow-md")}
        />
      </div>

      {session && <MapInteractive />}

      {!session && (
        <div className="px-4 pt-12">
          <Container className="max-w-sm mx-auto">
            <AuthEmailForm />
          </Container>
        </div>
      )}
    </div>
  );
}

export default App;
