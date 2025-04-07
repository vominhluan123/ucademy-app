import { IconPlay } from "../icons";

const LessonItem = ({
  item,
}: {
  item: {
    title: string;
    duration: string;
  };
}) => {
  return (
    <div className="flex items-center gap-2 p-4 text-base rounded-lg bg-gray-200 dark:bg-dark-card dark:border-dark-card border border-gray-200">
      <IconPlay className="size-5"></IconPlay>
      <h4>{item.title}</h4>
      <span className="ml-auto text-xs font-semibold">{item.duration}p</span>
    </div>
  );
};

export default LessonItem;
