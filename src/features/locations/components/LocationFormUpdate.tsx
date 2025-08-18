import useLocationFormUpdate from "../hooks/useLocationFormUpdate";
import type { PinnedLocation } from "@/types/PinnedLocation";
import LocationForm from "./LocationForm";
import type { LocationFormValues } from "../hooks/useLocationForm";

interface Props {
  location: PinnedLocation;
  afterSubmit: () => void;
}

function LocationFormUpdate({ location, afterSubmit }: Props) {
  const { form, onSubmit, isLoading } = useLocationFormUpdate(location);

  function handleSubmit(values: LocationFormValues) {
    onSubmit(values, location.id);
    afterSubmit();
  }

  return (
    <LocationForm form={form} onSubmit={handleSubmit} isLoading={isLoading} />
  );
}

export default LocationFormUpdate;
