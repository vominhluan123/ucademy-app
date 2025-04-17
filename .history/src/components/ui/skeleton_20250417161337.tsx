import { cn } from "@/lib/utils";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md transition-opacity duration-500 skeleton",
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };
