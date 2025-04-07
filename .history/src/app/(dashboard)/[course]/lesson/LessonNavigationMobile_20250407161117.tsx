"use client";
import { Button } from "@/components/ui/button";
import { ILesson } from "@/database/lesson.modal";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

const LessonNavigationMobile = ({
  nextLesson,
  prevLesson,
  course,
}: {
  nextLesson: ILesson | undefined;
  prevLesson: ILesson | undefined;
  course: string;
}) => {
  const router = useRouter();
  return (
    <>
      <Button
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full opacity-0 group-hover:opacity-100 transition p-2 hidden md:block"
        onClick={() =>
          router.push(`/${course}/lesson?slug=${prevLesson?.slug}`)
        }
        disabled={!prevLesson}
      >
        <ChevronLeft className="w-5 h-5" />
      </Button>

      <Button
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition max-md:hidden"
        onClick={() =>
          router.push(`/${course}/lesson?slug=${nextLesson?.slug}`)
        }
        disabled={!nextLesson}
      >
        <ChevronRight className="w-5 h-5" />
      </Button>
    </>
  );
};

export default LessonNavigationMobile;
