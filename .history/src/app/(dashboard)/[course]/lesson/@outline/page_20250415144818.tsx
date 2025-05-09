import PageNotFound from "@/app/not-found";
import LessonItem from "@/components/lesson/LessonItem";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getCourseBySlug } from "@/lib/actions/course.action";
import { TUpdateCourseLecture } from "@/types";

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
  if (!findCoures) return <PageNotFound />;
  const courseID = findCoures._id.toString();
  return (
    <div className="md:sticky md:top-5 h-fit">
      <div className="w-full h-3 rounded-full border bg-white mb-2 border-white dark:border-dark-border dark:bg-dark-card">
        <div
          className="w-0 h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300"
          style={{ width: `${completePercentege}%` }}
        ></div>
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
                      lesson={lesson ? JSON.parse(JSON.stringify(lesson)) : {}}
                      key={lesson._id}
                      url={`/${course}/lesson?slug=${lesson.slug}`}
                      isActive={lesson.slug === slug}
                      histories={
                        histories ? JSON.parse(JSON.stringify(histories)) : []
                      }
                      isChecked={histories?.some(
                        (el) => el.lesson.toString() === lesson._id.toString()
                      )}
                    />
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default page;
