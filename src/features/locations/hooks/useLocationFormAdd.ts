import useAddLocation from "./useAddLocation";
import { useState } from "react";
import { toast } from "sonner";
import { useLocationForm, type LocationFormValues } from "./useLocationForm";
import type { PinnedLocationDto } from "@/types/PinnedLocation";

function useLocationFormAdd() {
  const { form } = useLocationForm();
  const { mutateAsync: addLocation } = useAddLocation();
  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(values: LocationFormValues) {
    const locationDto: PinnedLocationDto = {
      name: values.name,
      description: values.description,
      coordinates: values.coordinates,
      userId: values.userId,
    };

    setIsLoading(true);
    try {
      await addLocation(locationDto);
      toast.success("Location added");
    } catch (error) {
      toast.error("Failed to add location");
    } finally {
      setIsLoading(false);

      form.setValue("name", "");
      form.setValue("description", "");
      form.setValue("coordinates", null);
    }
  }

  return { form, onSubmit, isLoading };
}

export default useLocationFormAdd;
