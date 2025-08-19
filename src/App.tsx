import { Container } from "./components/ui/container";
import AuthEmailForm from "./features/auth/components/AuthEmailForm";
import useTheme from "./hooks/useTheme";
import useAuthSession from "./hooks/useAuthSession";
import Header from "./components/layout/header";
import MainContent from "./MainContent";

function App() {
  const { theme } = useTheme();
  const { session } = useAuthSession();

  return (
    <div
      data-theme={theme}
      className="bg-gray-100 dark:bg-gray-800 min-h-screen min-w-screen"
    >
      <div className="bg-white dark:bg-gray-900">
        <Header className="max-w-5xl mx-auto" />
      </div>

      <div className="px-4 py-8">
        {session ? (
          <MainContent />
        ) : (
          <Container className="max-w-sm mx-auto">
            <AuthEmailForm />
          </Container>
        )}
      </div>
    </div>
  );
}

export default App;
