export type Coordinates = {
  latitude: number;
  longitude: number;
};

export interface PinnedLocationDto {
  name: string;
  description: string;
  coordinates: Coordinates | null;
}

export interface PinnedLocation extends PinnedLocationDto {
  id: string;
}
