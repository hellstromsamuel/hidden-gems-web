import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteLocation } from "../api/locations";
import { queryKeyLocations } from "./useLocations";
import type { PinnedLocation } from "@/types/PinnedLocation";

function useDeleteLocation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: PinnedLocation["id"]) => deleteLocation(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeyLocations });
    },
  });
}

export default useDeleteLocation;
