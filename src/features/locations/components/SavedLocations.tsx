import { Skeleton } from "@/components/ui/skeleton";
import type { PinnedLocation } from "@/types/PinnedLocation";
import LoactionsList from "./LocationsList";

interface Props {
  locations: PinnedLocation[] | undefined;
  isLoading: boolean;
}

function SavedPlaces({ locations, isLoading }: Props) {
  if (isLoading)
    return (
      <div className="space-y-4">
        {Array.from({ length: 3 }).map((_, index) => (
          <Skeleton key={index} className="h-12" />
        ))}
      </div>
    );

  return <LoactionsList locations={locations || []} />;
}

export default SavedPlaces;
