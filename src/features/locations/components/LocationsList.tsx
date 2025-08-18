import type { PinnedLocation } from "@/types/PinnedLocation";
import LocationCard from "./LocationCard";

interface Props {
  locations: PinnedLocation[];
}

function LoactionsList({ locations }: Props) {
  return (
    <div className="space-y-4">
      {locations.map((location) => (
        <LocationCard key={location.id} location={location} />
      ))}
    </div>
  );
}

export default LoactionsList;
