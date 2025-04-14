import { cn } from "@/lib/utils";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-[#F9FAFB] dark:bg-[#1E1E2D]",
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };
