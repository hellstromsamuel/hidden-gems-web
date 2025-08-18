import { Copy, Edit, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import DrawerDialog from "@/components/ui/drawer-dialog";
import type { PinnedLocation } from "@/types/PinnedLocation";
import LocationFormUpdate from "./LocationFormUpdate";
import useLocationCard from "../hooks/useLocationCard";

function LocationCard({ location }: { location: PinnedLocation }) {
  const {
    dialogOpen,
    setDialogOpen,
    isLoading,
    handleCopyLocation,
    handleDeleteLocation,
  } = useLocationCard(location);

  return (
    <>
      <DrawerDialog
        title="Edit location"
        description={"Modify the details of your location."}
        open={dialogOpen}
        setOpen={setDialogOpen}
        children={
          <LocationFormUpdate
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
            <Button
              variant="outline"
              onClick={handleCopyLocation}
              isLoading={isLoading === "copy"}
            >
              <Copy />
            </Button>

            <Button variant="outline" onClick={() => setDialogOpen(true)}>
              <Edit />
            </Button>
            <Button
              variant="destructive"
              onClick={handleDeleteLocation}
              isLoading={isLoading === "delete"}
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
