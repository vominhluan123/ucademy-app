import Heading from "@/components/common/Heading";
import LessonItem from "@/components/lesson/LessonItem";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ILesson } from "@/database/lesson.modal";
import { getCourseBySlug } from "@/lib/actions/course.action";
import { findAllLessons, getLessonDetails } from "@/lib/actions/lesson.action";
import { TUpdateCourseLecture } from "@/types";
import LessonNavigation from "./LessonNavigation";
import LessonNavigationMobile from "./LessonNavigationMobile";

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
  const lectures = findCoures?.lectures || [];
  return (
    <div className="flex flex-col md:grid md:grid-cols-[2fr,1fr] gap-5 lg:gap-10 min-h-screen">
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
                course={params.course}
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
                course={params.course}
              />
            </div>
            <div></div>
          </div>
        </div>
        <Heading className="mt-5 mb-5">{lessonDetails.title}</Heading>
        <div className="p-5 rounded-lg dark:bg-dark-card bg-white">
          <div
            dangerouslySetInnerHTML={{
              __html:
                typeof lessonDetails.content === "string"
                  ? lessonDetails.content
                  : "",
            }}
          ></div>
        </div>
      </div>
      <div>
        <div className="md:sticky md:top-5 h-fit">
          <div className="w-full h-3 rounded-full border bg-white mb-2 border-white dark:border-dark-border dark:bg-dark-card">
            <div className="w-20 h-full rounded-full bg-primary"></div>
          </div>
          <div className="leading-normal mb-10 dark:text-dark-text overflow-auto max-h-[calc(100vh-80px)] shadow-md rounded-lg p-4 bg-white dark:bg-dark-card">
            {lectures.map((lecture: TUpdateCourseLecture) => (
              <Accordion
                type="single"
                collapsible
                className="w-full"
                key={lecture._id}
              >
                <AccordionItem value={lecture._id.toString()}>
                  <AccordionTrigger>
                    <div className="flex gap-3 items-center w-full justify-between">
                      <div className="line-clamp-1">
                        {lecture.title || "Chương Mới"}{" "}
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="!bg-transparent border-none p-0 transition-all duration-300 ease-in-out">
                    <div className="flex flex-col gap-3">
                      {lecture.lessons.map((lesson: ILesson) => (
                        <LessonItem
                          lesson={
                            lesson ? JSON.parse(JSON.stringify(lesson)) : {}
                          }
                          key={lesson._id}
                          url={`/${course}/lesson?slug=${lesson.slug}`}
                          isActive={lesson.slug === slug}
                        />
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
