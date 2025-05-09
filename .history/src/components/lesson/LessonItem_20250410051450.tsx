"use client";
import { IHistory } from "@/database/history.model";
import { createHistory } from "@/lib/actions/history.action";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { IconPlay } from "../icons";
import { Checkbox } from "../ui/checkbox";

const LessonItem = ({
  lesson,
  url,
  isActive = false,
  isChecked = false,
  histories = [],
}: {
  lesson: {
    title: string;
    duration: number;
    course: string;
    _id: string;
  };
  url?: string;
  isActive?: boolean;
  isChecked?: boolean;
  histories?: IHistory[];
}) => {
  const handlerCompleteLesson = async (checked: boolean | string) => {
    try {
      await createHistory({
        lesson: lesson._id,
        course: lesson.course,
        checked,
        path: url || "/",
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div
      className={cn(
        "flex items-center gap-2 p-4 text-sm rounded-lg bg-white dark:bg-dark-hover dark:border-dark-card border border-gray-200",
        isActive
          ? " dark:bg-dark-border text-primary font-semibold"
          : "hover:bg-muted"
      )}
    >
      {url && (
        <Checkbox
          defaultChecked={isChecked}
          className="size-4 flex-shrink-0"
          onCheckedChange={(checked) => handlerCompleteLesson(checked)}
        />
      )}
      <IconPlay className="size-5"></IconPlay>
      {url ? (
        <Link
          className={cn("line-clamp-1", isActive && "pointer-events-none")}
          href={url}
        >
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
