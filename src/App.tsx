import { Container } from "./components/ui/container";
import AuthEmailForm from "./features/auth/components/AuthEmailForm";
import LocationForm from "./features/locations/components/LocationForm";
import SavedLocations from "./features/locations/components/SavedLocations";
import useTheme from "./hooks/useTheme";
import useAuthSession from "./hooks/useAuthSession";
import Header from "./components/layout/Header";

function MainContent() {
  return (
    <main className="flex flex-col max-w-5xl mx-auto">
      <div className="grid md:grid-cols-3 gap-8">
        <Container className="h-max md:col-span-2">
          <AuthEmailForm />
          <h2 className="font-semibold text-lg">Saved locations</h2>
          <SavedLocations />
        </Container>

        <Container className="h-max md:sticky md:top-4">
          <h2 className="font-semibold text-lg">Add location</h2>
          <LocationForm type="add" />
        </Container>
      </div>
    </main>
  );
}

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
