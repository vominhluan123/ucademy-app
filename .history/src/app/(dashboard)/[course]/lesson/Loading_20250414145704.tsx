import { Skeleton } from "@/components/ui/skeleton";

const loading = () => {
  return (
    <div className="grid grid-cols-[2fr,1fr] gap-5 lg:gap-10 min-h-screen">
      <div className="space-y-4">
        <Skeleton className="h-8 w-[80%]" />
        <Skeleton className="h-64 w-full rounded-lg" />
        <Skeleton className="h-4 w-full" />
      </div>
      <div className="space-y-4">
        <Skeleton className="h-3 w-full rounded-full" />
        <div className="space-y-2">
          {Array.from({ length: 3 }).map((_, i) => (
            <Skeleton key={i} className="h-5 w-full" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default loading;
