import useLocationFormAdd from "../hooks/useLocationFormAdd";
import LocationForm from "./LocationForm";

function LocationFormAdd() {
  const { form, onSubmit, isLoading } = useLocationFormAdd();

  return <LocationForm form={form} onSubmit={onSubmit} isLoading={isLoading} />;
}

export default LocationFormAdd;
