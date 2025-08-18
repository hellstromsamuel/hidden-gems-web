import { Container } from "@/components/ui/container";
import SavedLocations from "./features/locations/components/SavedLocations";
import LocationFormAdd from "./features/locations/components/LocationFormAdd";

function MainContent() {
  return (
    <main className="flex flex-col max-w-5xl mx-auto">
      <div className="grid md:grid-cols-3 gap-8">
        <Container className="h-max md:col-span-2">
          <h2 className="font-semibold text-lg">Saved locations</h2>
          <SavedLocations />
        </Container>

        <Container className="h-max md:sticky md:top-4">
          <h2 className="font-semibold text-lg">Add location</h2>
          <LocationFormAdd />
        </Container>
      </div>
    </main>
  );
}

export default MainContent;
