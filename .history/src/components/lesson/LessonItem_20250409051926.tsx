import { cn } from "@/lib/utils";
import Link from "next/link";
import { IconPlay } from "../icons";
import { Checkbox } from "../ui/checkbox";

const LessonItem = ({
  lesson,
  url,
  isActive = false,
  isChecked = false,
}: {
  lesson: {
    title: string;
    duration: number;
  };
  url?: string;
  isActive?: boolean;
  isChecked?: boolean;
}) => {
  return (
    <div
      className={cn(
        "flex items-center gap-2 p-4 text-sm rounded-lg bg-white dark:bg-dark-hover dark:border-dark-card border border-gray-200",
        isActive
          ? "bg-primary dark:bg-dark-border text-white  pointer-events-none font-semibold"
          : "hover:bg-muted"
      )}
    >
      <span className="flex-shrink-0">
        <Checkbox defaultChecked={isChecked} />
      </span>
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
