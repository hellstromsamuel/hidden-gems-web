import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryKeyLocations } from "./useLocations";
import { updateLocation } from "../api/locations";
import type { PinnedLocation } from "@/types/PinnedLocation";

function useUpdateLocation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (location: Partial<PinnedLocation>) =>
      await updateLocation(location),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeyLocations });
    },
  });
}

export default useUpdateLocation;
