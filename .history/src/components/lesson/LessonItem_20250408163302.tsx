import { cn } from "@/lib/utils";
import Link from "next/link";
import { IconPlay } from "../icons";

const LessonItem = ({
  lesson,
  url,
  isActive,
}: {
  lesson: {
    title: string;
    duration: number;
  };
  url?: string;
  isActive?: boolean;
}) => {
  return (
    <div
      className={cn(
        "flex items-center gap-2 p-4 text-sm rounded-lg bg-white dark:bg-dark-card dark:border-dark-card border border-gray-200",
        isActive ? "text-primary pointer-events-none font-semibold" : ""
      )}
    >
      <IconPlay className="size-5"></IconPlay>
      {url ? (
        <Link className="line-clamp-1" href={url}>
          {lesson.title}
        </Link>
      ) : (
        <h4 className="line-clamp-1">{lesson.title}</h4>
      )}

      <span className="ml-auto text-xs font-semibold">{lesson.duration}p</span>
    </div>
  );
};

export default LessonItem;
