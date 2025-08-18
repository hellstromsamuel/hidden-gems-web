import { Copy, Edit, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import DrawerDialog from "@/components/ui/drawer-dialog";
import { useState } from "react";
import useDeleteLocation from "../hooks/useDeleteLocation";
import useAddLocation from "../hooks/useAddLocation";
import type { PinnedLocation, PinnedLocationDto } from "@/types/PinnedLocation";
import LocationForm from "./LocationForm";

function LocationCard({ location }: { location: PinnedLocation }) {
  const [dialogOpen, setDialogOpen] = useState(false);
  const { mutate: deleteLocation } = useDeleteLocation();
  const { mutateAsync: addLocation } = useAddLocation();

  async function copyLocation() {
    const locationData: PinnedLocationDto = {
      ...location,
      name: location.name + " - copy",
    };
    await addLocation(locationData);
  }

  return (
    <>
      <DrawerDialog
        title="Edit location"
        description={"Modify the details of your location."}
        open={dialogOpen}
        setOpen={setDialogOpen}
        children={
          <LocationForm
            type="update"
            location={location}
            afterSubmit={() => setDialogOpen(false)}
          />
        }
      />

      <div className="@container">
        <div className="flex flex-col gap-4 items-start border p-4 rounded-md @lg:flex-row @lg:items-center @lg:justify-between">
          <div>
            <h3 className="font-semibold">{location.name}</h3>
            <p>{location.description}</p>
          </div>

          <div className="flex gap-2">
            <Button variant="outline" onClick={copyLocation}>
              <Copy />
            </Button>

            <Button variant="outline" onClick={() => setDialogOpen(true)}>
              <Edit />
            </Button>
            <Button
              variant="destructive"
              onClick={() => deleteLocation(location.id)}
            >
              <Trash />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default LocationCard;
