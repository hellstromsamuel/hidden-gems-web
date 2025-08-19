import type { Coordinates } from "./Coordinates";

export interface PinnedLocationDto {
  name: string;
  description: string;
  coordinates: Coordinates | null;
  userId: string;
}

export interface PinnedLocation extends PinnedLocationDto {
  id: string;
}
