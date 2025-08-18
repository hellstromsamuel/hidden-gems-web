import { supabase } from "@/config/supabase";
import type { PinnedLocation, PinnedLocationDto } from "@/types/PinnedLocation";
import camelcaseKeys from "camelcase-keys";
import decamelizeKeys from "decamelize-keys";

const PINNED_LOCATIONS_TABLE_NAME = "pinned_locations";

export const getLocations = async (): Promise<PinnedLocation[]> => {
  const { data } = await supabase.from(PINNED_LOCATIONS_TABLE_NAME).select();
  if (!data) return [];

  return camelcaseKeys(data, { deep: true }) as PinnedLocation[];
};

export const addLocation = async (
  location: PinnedLocationDto
): Promise<PinnedLocation> => {
  const { data, error } = await supabase
    .from(PINNED_LOCATIONS_TABLE_NAME)
    .insert(decamelizeKeys(location, { deep: true }))
    .select()
    .single();

  if (error) throw error;
  return camelcaseKeys(data, { deep: true }) as PinnedLocation;
};

export const updateLocation = async (
  location: Partial<PinnedLocation>
): Promise<PinnedLocation> => {
  if (!location.id) throw new Error("Field 'id' is required");

  const { data, error } = await supabase
    .from(PINNED_LOCATIONS_TABLE_NAME)
    .update(decamelizeKeys(location, { deep: true }))
    .eq("id", location.id)
    .select()
    .single();

  if (error) throw error;
  return camelcaseKeys(data, { deep: true }) as PinnedLocation;
};

export const deleteLocation = async (id: string): Promise<void> => {
  const { error } = await supabase
    .from(PINNED_LOCATIONS_TABLE_NAME)
    .delete()
    .eq("id", id);

  if (error) throw error;
};
