import Link from "next/link";
import { IconPlay } from "../icons";

const LessonItem = ({
  lesson,
  url,
}: {
  lesson: {
    title: string;
    duration: number;
  };
  url?: string;
}) => {
  return (
    <div className="flex items-center gap-2 p-4 text-base rounded-lg bg-gray-200 dark:bg-dark-card dark:border-dark-card border border-gray-200">
      <IconPlay className="size-5"></IconPlay>
      {url ? <Link href={url}>{lesson.title}</Link> : <h4>{lesson.title}</h4>}

      <span className="ml-auto text-xs font-semibold">{lesson.duration}p</span>
    </div>
  );
};

export default LessonItem;
