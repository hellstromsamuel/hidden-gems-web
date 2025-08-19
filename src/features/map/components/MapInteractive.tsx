import { useRef, useState } from "react";
import MapContainer from "./MapContainer";
import type { MapCoordinates } from "../types/MapCoordinates";
import MapCenterPin from "./MapCenterPin";

const INIT_CENTER: [number, number] = [10.73067, 59.92573];
const INIT_ZOOM = 12;

function MapInteractive() {
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const [center, setCenter] = useState<[number, number]>(INIT_CENTER);
  const [zoom, setZoom] = useState<number>(INIT_ZOOM);
  const [markers, setMarkers] = useState<MapCoordinates[]>([]);

  return (
    <div className="relative">
      <MapContainer
        mapRef={mapRef}
        center={center}
        setCenter={setCenter}
        zoom={zoom}
        setZoom={setZoom}
        markers={markers}
        className="h-screen"
      />

      <MapCenterPin className="z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
    </div>
  );
}

export default MapInteractive;
