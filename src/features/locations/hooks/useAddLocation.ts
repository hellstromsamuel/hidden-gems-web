import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryKeyLocations } from "./useLocations";
import { addLocation } from "../data/locations";
import type { PinnedLocationDto } from "@/types/PinnedLocation";

function useAddLocation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (newLocation: PinnedLocationDto) =>
      addLocation(newLocation),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeyLocations });
    },
  });
}

export default useAddLocation;
