import { useState } from "react";
import useDeleteLocation from "./useDeleteLocation";
import useAddLocation from "./useAddLocation";
import { createLocationCopy, locationToDto } from "../utils/locations";
import { toast } from "sonner";
import type { PinnedLocation } from "@/types/PinnedLocation";

function useLocationCard(location: PinnedLocation) {
  const { mutate: deleteLocation } = useDeleteLocation();
  const { mutateAsync: addLocation } = useAddLocation();

  const [dialogOpen, setDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState<"delete" | "copy" | null>(null);

  async function handleCopyLocation() {
    setIsLoading("copy");
    try {
      const newLocation = createLocationCopy(location);
      const newLocationDto = locationToDto(newLocation);
      await addLocation(newLocationDto);
      toast.success("Location copied");
    } catch (error) {
      console.error(error);
      toast.error("Failed to copy location");
    } finally {
      setIsLoading(null);
    }
  }

  async function handleDeleteLocation() {
    setIsLoading("delete");
    try {
      await deleteLocation(location.id);
      toast.success("Location deleted");
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete location");
    } finally {
      setIsLoading(null);
    }
  }

  return {
    dialogOpen,
    setDialogOpen,
    isLoading,
    handleCopyLocation,
    handleDeleteLocation,
  };
}

export default useLocationCard;
