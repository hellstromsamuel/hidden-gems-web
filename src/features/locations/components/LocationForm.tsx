import type { PinnedLocation } from "@/types/PinnedLocation";
import { Button } from "../../../components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../components/ui/form";
import { Input } from "../../../components/ui/input";
import { Textarea } from "../../../components/ui/textarea";
import type { useLocationFormType } from "../hooks/useLocationForm";
import useLocationForm from "../hooks/useLocationForm";

interface Props {
  type: useLocationFormType;
  location?: PinnedLocation;
  afterSubmit?: () => void;
}

function LocationForm({ type, location, afterSubmit }: Props) {
  const { form, onSubmit, isLoading } = useLocationForm(
    type,
    location,
    afterSubmit
  );

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Enter location name" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Description Field */}
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea {...field} placeholder="Enter location description" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Latitude Field */}
        <FormField
          control={form.control}
          name="coordinates.latitude"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Latitude</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="number"
                  step="any"
                  placeholder="Enter latitude"
                  onChange={(e) =>
                    field.onChange(
                      e.target.value ? parseInt(e.target.value) : ""
                    )
                  }
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Longitude Field */}
        <FormField
          control={form.control}
          name="coordinates.longitude"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Longitude</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="number"
                  step="any"
                  placeholder="Enter longitude"
                  onChange={(e) =>
                    field.onChange(
                      e.target.value ? parseInt(e.target.value) : ""
                    )
                  }
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" isLoading={isLoading} className="w-full">
          Submit
        </Button>
      </form>
    </Form>
  );
}

export default LocationForm;
