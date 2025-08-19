import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

function MapCenterPin({ className }: Props) {
  return (
    <div
      className={cn(
        "rounded-full size-6 bg-blue-500/50 border-2 border-white",
        className
      )}
    />
  );
}

export default MapCenterPin;
