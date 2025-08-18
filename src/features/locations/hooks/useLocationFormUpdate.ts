import type { PinnedLocation } from "@/types/PinnedLocation";
import useUpdateLocation from "./useUpdateLocation";
import { useState } from "react";
import { toast } from "sonner";
import { useLocationForm, type LocationFormValues } from "./useLocationForm";

function useLocationFormUpdate(location: PinnedLocation) {
  const { form } = useLocationForm(location);
  const { mutateAsync: updateLocation } = useUpdateLocation();
  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(values: LocationFormValues, id: string) {
    setIsLoading(true);
    try {
      await updateLocation({ ...values, id });
      toast.success("Location updated");
    } catch (error) {
      toast.error("Failed to update location");
    } finally {
      setIsLoading(false);
      form.reset();
    }
  }

  return { form, onSubmit, isLoading };
}

export default useLocationFormUpdate;
