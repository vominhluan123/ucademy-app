import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <div className="grid grid-cols-[2fr,1fr] gap-5 lg:gap-10 min-h-screen p-4">
      <div className="space-y-4">
        <Skeleton className="h-8 w-[80%]" />
        <Skeleton className="h-64 w-full rounded-lg" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-[95%]" />
        <Skeleton className="h-4 w-[90%]" />
      </div>
      <div className="space-y-4">
        <Skeleton className="h-3 w-full rounded-full" />
        <div className="space-y-3">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="space-y-2">
              <Skeleton className="h-6 w-[60%]" />
              <Skeleton className="h-4 w-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loading;
