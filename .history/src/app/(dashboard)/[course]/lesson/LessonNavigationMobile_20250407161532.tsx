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
        onClick={() =>
          router.push(`/${course}/lesson?slug=${prevLesson?.slug}`)
        }
        disabled={!prevLesson}
      >
        <ChevronLeft className="w-5 h-5" />
      </Button>

      <Button
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
