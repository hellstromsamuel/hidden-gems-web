import type { PinnedLocation, PinnedLocationDto } from "@/types/PinnedLocation";

export const locationToDto = (location: PinnedLocation): PinnedLocationDto => {
  return {
    name: location.name,
    description: location.description,
    coordinates: location.coordinates,
    userId: location.userId,
  };
};

export const createLocationCopy = (
  location: PinnedLocation
): PinnedLocation => {
  return {
    ...location,
    name: `${location.name} - copy`,
  };
};
