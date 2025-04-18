"use client";

import { ILesson } from "@/database/lesson.modal";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

const LessonNavigation = ({
  nextLesson,
  prevLesson,
  course,
}: {
  nextLesson?: ILesson | null | undefined;
  prevLesson?: ILesson | null | undefined;
  course: string;
}) => {
  const router = useRouter();
  return (
    <>
      <button
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full opacity-0 group-hover:opacity-100  p-2 max-md:hidden transition-opacity duration-300 ease-in-out"
        onClick={() =>
          router.push(`/${course}/lesson?slug=${prevLesson?.slug}`)
        }
        disabled={!prevLesson}
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100  max-md:hidden transition-opacity duration-300 ease-in-out"
        onClick={() =>
          router.push(`/${course}/lesson?slug=${nextLesson?.slug}`)
        }
        disabled={!nextLesson}
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </>
  );
};

export default LessonNavigation;
