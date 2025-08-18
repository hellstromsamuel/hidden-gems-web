import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const containerVariants = cva(
  "p-4 rounded-lg bg-white dark:bg-gray-900 space-y-4",
  {
    variants: {
      variant: {},
    },
    defaultVariants: {},
  }
);

export interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {
  asChild?: boolean;
}

const Container: React.FC<ContainerProps> = ({
  asChild,
  className,
  children,
  variant,
  ...props
}) => {
  const Comp = asChild ? React.Fragment : "div";
  const containerClasses = cn(containerVariants({ variant }), className);

  return (
    <Comp className={containerClasses} {...props}>
      {children}
    </Comp>
  );
};

export { Container, containerVariants };
