import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import useAddLocation from "./useAddLocation";
import type { PinnedLocation, PinnedLocationDto } from "@/types/PinnedLocation";
import useUpdateLocation from "./useUpdateLocation";
import { useState } from "react";
import { toast } from "sonner";
import useAuthSession from "@/hooks/useAuthSession";

const formSchema = z.object({
  name: z
    .string()
    .nonempty({ message: "Name is required" })
    .max(100, { message: "Name must be less than 100 characters" }),
  description: z
    .string()
    .max(500, { message: "Description must be less than 500 characters" }),
  coordinates: z.object({
    latitude: z
      .number()
      .min(-90, { message: "Latitude must be >= -90" })
      .max(90, { message: "Latitude must be <= 90" }),
    longitude: z
      .number()
      .min(-180, { message: "Longitude must be >= -180" })
      .max(180, { message: "Longitude must be <= 180" }),
  }),
  userId: z.string(),
});

type LocationFormValues = z.infer<typeof formSchema>;
type useLocationFormType = "add" | "update";

function useLocationForm(
  type: useLocationFormType,
  location?: PinnedLocationDto | PinnedLocation,
  afterSubmit?: () => void
) {
  const { session } = useAuthSession();
  const { mutateAsync: addLocation } = useAddLocation();
  const { mutateAsync: updateLocation } = useUpdateLocation();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<LocationFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: location?.name || "",
      description: location?.description || "",
      coordinates: {
        latitude: location?.coordinates?.latitude || 0,
        longitude: location?.coordinates?.longitude || 0,
      },
      userId: session?.user?.id || "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const updatedValues = { ...values, userId: session?.user?.id || "" };

    setIsLoading(true);
    try {
      if (type === "add") await addLocation(updatedValues);
      if (type === "update") await updateLocation(updatedValues);

      if (afterSubmit) afterSubmit();
      toast.success(type === "add" ? "Location added" : "Location updated");
    } catch (error) {
      toast.error(
        type === "add" ? "Failed to add location" : "Failed to update location"
      );
    } finally {
      setIsLoading(false);
      form.reset();
    }
  }

  return { form, onSubmit, isLoading };
}

export type { useLocationFormType };
export default useLocationForm;
