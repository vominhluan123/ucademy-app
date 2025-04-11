"use client";
import Heading from "@/components/common/Heading";
import { LastLessonKey } from "@/constants";
import { ILesson } from "@/database/lesson.modal";
import { useEffect } from "react";
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
      <div className="relative aspect-video group">
        {videoId ? (
          <>
            <iframe
              className="w-full h-full rounded-lg object-fill"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`}
              allow="autoplay"
              allowFullScreen
            ></iframe>
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
          <div></div>
        </div>
      </div>
      <Heading className="mt-5 mb-5 border-t border-gray-200  pt-4">
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
