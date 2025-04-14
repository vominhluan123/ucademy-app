import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <div className="grid grid-cols-[2fr,1fr] gap-5 lg:gap-10 min-h-screen p-4 bg-[#F9FAFB] dark:bg-[#1E1E2D]">
      <div className="space-y-4">
        <Skeleton className="h-8 w-[80%] bg-[#E5E7EB] dark:bg-[#2A2A3C]" />
        <Skeleton className="h-64 w-full rounded-lg bg-[#E5E7EB] dark:bg-[#2A2A3C]" />
        <Skeleton className="h-4 w-full bg-[#E5E7EB] dark:bg-[#2A2A3C]" />
      </div>
      <div className="space-y-4">
        <Skeleton className="h-3 w-full rounded-full bg-[#E5E7EB] dark:bg-[#2A2A3C]" />
        <div className="space-y-2">
          {Array.from({ length: 3 }).map((_, i) => (
            <Skeleton
              key={i}
              className="h-5 w-full bg-[#E5E7EB] dark:bg-[#2A2A3C]"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loading;
