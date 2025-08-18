import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import type { PinnedLocation } from "@/types/PinnedLocation";
import { useEffect } from "react";
import useAuthSession from "@/hooks/useAuthSession";

const locationFormSchema = z.object({
  name: z
    .string()
    .nonempty({ message: "Name is required" })
    .max(100, { message: "Name must be less than 100 characters" }),
  description: z
    .string()
    .max(500, { message: "Description must be less than 500 characters" }),
  coordinates: z
    .object({
      latitude: z
        .number()
        .min(-90, { message: "Latitude must be >= -90" })
        .max(90, { message: "Latitude must be <= 90" }),
      longitude: z
        .number()
        .min(-180, { message: "Longitude must be >= -180" })
        .max(180, { message: "Longitude must be <= 180" }),
    })
    .nullable(),
  userId: z.string(),
});

function useLocationForm(location?: PinnedLocation) {
  const { session } = useAuthSession();

  const form = useForm<LocationFormValues>({
    resolver: zodResolver(locationFormSchema),
    defaultValues: {
      name: location?.name || "",
      description: location?.description || "",
      coordinates: location?.coordinates || null,
      userId: location?.userId || "",
    },
  });

  useEffect(() => {
    if (session?.user) {
      form.setValue("userId", session.user.id);
    }
  }, [form, session?.user?.id]);

  return { form };
}

export type LocationFormValues = z.infer<typeof locationFormSchema>;
export { useLocationForm, locationFormSchema };
