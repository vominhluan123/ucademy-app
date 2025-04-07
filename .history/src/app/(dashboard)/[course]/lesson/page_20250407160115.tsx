import { Button } from "@/components/ui/button";
import { getCourseBySlug } from "@/lib/actions/course.action";
import { findAllLessons, getLessonDetails } from "@/lib/actions/lesson.action";
import { ChevronLeft, ChevronRight } from "lucide-react";
import LessonNavigation from "./LessonNavigation";

const page = async ({
  params,
  searchParams,
}: {
  params: {
    course: string;
  };
  searchParams: {
    slug: string;
  };
}) => {
  const course = params.course;
  const slug = searchParams.slug;
  const findCoures = await getCourseBySlug({ slug: course });
  if (!findCoures) {
    return null;
  }
  const courseID = findCoures?._id.toString();

  const lessonDetails = await getLessonDetails({
    slug,
    course: courseID || "",
  });
  const lessonList = await findAllLessons({ course: courseID || "" });
  if (!lessonDetails) {
    return null;
  }
  const curentLessonIndex =
    lessonList?.findIndex((el) => el.slug === lessonDetails.slug) || 0;
  const nextLessonIndex = lessonList?.[curentLessonIndex + 1];
  const prevLessonIndex = lessonList?.[curentLessonIndex - 1];
  const videoId = lessonDetails?.video_url?.split("v=")[1];
  return (
    <div className="flex flex-col md:grid md:grid-cols-[2fr,1fr] gap-5 lg:gap-10 min-h-screen">
      <div>
        <div className="relative mb-5 aspect-video group">
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
                course={params.course}
              ></LessonNavigation>
            </>
          ) : (
            <div className="flex items-center justify-center w-full h-full bg-gray-100 rounded-lg">
              <p className="text-gray-500">
                Video đang được tải hoặc không khả dụng.
              </p>
            </div>
          )}
          <div className="md:hidden flex items-center justify-between mt-5">
            <div className="flex gap-3">
              <Button className="size-10 p-3">
                <ChevronLeft className="w-6 h-6" />
              </Button>
              <Button className="size-10 p-3">
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default page;
