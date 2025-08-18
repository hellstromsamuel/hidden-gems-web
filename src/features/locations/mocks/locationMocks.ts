import type { PinnedLocation } from "@/types/PinnedLocation";

export const locationMock1: PinnedLocation = {
  id: "1",
  name: "Central Park",
  description: "A large public park in New York City",
  coordinates: {
    latitude: 40.785091,
    longitude: -73.968285,
  },
};

export const locationMock2: PinnedLocation = {
  id: "2",
  name: "Empire State Building",
  description:
    "An iconic 102-story skyscraper in New York City, renowned for its Art Deco design and observation decks.",
  coordinates: {
    latitude: 40.748817,
    longitude: -73.985428,
  },
};

export const locationListMock: PinnedLocation[] = [
  locationMock1,
  locationMock2,
];
