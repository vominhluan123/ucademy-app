"use client";
import Heading from "@/components/common/Heading";
import { Button } from "@/components/ui/button";
import { LastLessonKey } from "@/constants";
import { ILesson } from "@/database/lesson.modal";
import useLessonLayoutStore from "@/store";
import { useEffect } from "react";
import VideoPlayer from "./@player/VideoPlayer";
import LessonNavigation from "./LessonNavigation";
import LessonNavigationMobile from "./LessonNavigationMobile";

type LessonLeftProps = {
  videoId: string;
  course: string;
  title: string;
  content: string;
  nextLessonIndex?: ILesson | null | undefined;
  prevLessonIndex?: ILesson | null | undefined;
  url?: string;
};

const LessonLeft = ({
  content,
  title,
  videoId,
  course,
  nextLessonIndex,
  prevLessonIndex,
  url,
}: LessonLeftProps) => {
  const { isExpanded, toggleExpanded } = useLessonLayoutStore();

  useEffect(() => {
    const data = localStorage.getItem(LastLessonKey);
    const parsed = data ? JSON.parse(data) : {};

    const newData = {
      ...parsed,
      [course]: url,
    };

    localStorage.setItem(LastLessonKey, JSON.stringify(newData));
  }, [url, course]);

  return (
    <div>
      <div className="relative aspect-video group mb-5">
        {videoId ? (
          <>
            <VideoPlayer videoId={videoId} />
            <LessonNavigation
              nextLesson={nextLessonIndex}
              prevLesson={prevLessonIndex}
              course={course}
            ></LessonNavigation>
          </>
        ) : (
          <div className="flex items-center justify-center w-full h-full bg-gray-100 rounded-lg mb-5">
            <p className="text-gray-500">
              Video đang được tải hoặc không khả dụng.
            </p>
          </div>
        )}
        <div className="md:hidden flex items-center justify-between mt-5 mb-5">
          <div className="flex gap-3">
            <LessonNavigationMobile
              nextLesson={nextLessonIndex}
              prevLesson={prevLessonIndex}
              course={course}
            />
          </div>
        </div>
      </div>
      <div className="float-end">
        <Button onClick={toggleExpanded}>
          {isExpanded ? "Thu gọn" : "Mở rộng"}
        </Button>
      </div>
      <Heading className="mt-5 mb-5 border-t border-gray-200 dark:border-dark-border pt-4">
        {title}
      </Heading>
      <div className="p-5 rounded-lg dark:bg-dark-card bg-white">
        <div
          dangerouslySetInnerHTML={{
            __html: typeof content === "string" ? content : "",
          }}
        ></div>
      </div>
    </div>
  );
};

export default LessonLeft;
