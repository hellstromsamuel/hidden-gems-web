import { Skeleton } from "@/components/ui/skeleton";
import LoactionsList from "./LocationsList";
import useLocations from "../hooks/useLocations";

function SavedPlaces() {
  const { data: locations, isLoading } = useLocations();

  if (isLoading)
    return (
      <div className="space-y-4">
        {Array.from({ length: 3 }).map((_, index) => (
          <Skeleton key={index} className="h-12" />
        ))}
      </div>
    );

  if (!locations || locations.length === 0) return <p>No locations saved</p>;

  return <LoactionsList locations={locations} />;
}

export default SavedPlaces;
