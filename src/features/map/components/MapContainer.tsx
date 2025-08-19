import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";
import { useEffect, useRef, type RefObject } from "react";
import { cn } from "@/lib/utils";
import type { MapCoordinates } from "../types/MapCoordinates";

interface Props {
  mapRef: RefObject<mapboxgl.Map | null>;
  center: [number, number];
  setCenter: (center: [number, number]) => void;
  zoom: number;
  setZoom: (zoom: number) => void;
  markers: MapCoordinates[];
  className?: string;
}

function MapContainer({
  mapRef,
  center,
  setCenter,
  zoom,
  setZoom,
  markers,
  className,
}: Props) {
  const mapContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current!,
      center: center || [0, 0],
      zoom: zoom || 1,
    });

    markers.forEach((marker) => {
      if (mapRef.current)
        return new mapboxgl.Marker()
          .setLngLat([marker.longitude, marker.latitude])
          .addTo(mapRef.current);
    });

    mapRef.current.on("move", () => {
      if (!mapRef.current) return;

      // get the current center coordinates and zoom level from the map
      const mapCenter = mapRef.current.getCenter();
      const mapZoom = mapRef.current.getZoom();

      // update state
      setCenter([mapCenter.lng, mapCenter.lat]);
      setZoom(mapZoom);
    });

    return () => {
      mapRef.current?.remove();
    };
  }, []);

  return (
    <>
      <div
        id="map-container"
        ref={mapContainerRef}
        className={cn("min-h-[100px] h-full w-full", className)}
      />
    </>
  );
}

export default MapContainer;
