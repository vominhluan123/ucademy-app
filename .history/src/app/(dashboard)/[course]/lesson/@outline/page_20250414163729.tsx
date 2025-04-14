import PageNotFound from "@/app/not-found";
import LessonItem from "@/components/lesson/LessonItem";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getCourseBySlug } from "@/lib/actions/course.action";
import { getHistory } from "@/lib/actions/history.action";
import { findAllLessons } from "@/lib/actions/lesson.action";
import { getUserInfo } from "@/lib/actions/user.action";
import { auth } from "@clerk/nextjs/server";

const Page = async ({ params, searchParams }: any) => {
  const { userId } = await auth();
  if (!userId) return <PageNotFound />;
  const user = await getUserInfo({ userId });
  if (!user) return <PageNotFound />;

  const slug = searchParams.slug;
  const courseData = await getCourseBySlug({ slug: params.course });
  if (!courseData) return <PageNotFound />;

  const courseID = courseData._id.toString();
  if (!user.courses.map((id) => id.toString()).includes(courseID))
    return <PageNotFound />;

  const [lessons, histories] = await Promise.all([
    findAllLessons({ course: courseID }),
    getHistory({ course: courseID }),
  ]);
  if (!lessons) return <PageNotFound />;

  // const completePercentege = Math.round(
  //   ((histories?.length || 0) / (lessons?.length || 1)) * 100
  // );

  return (
    <div className="md:sticky md:top-5 h-fit">
      <div className="w-full h-3 rounded-full border bg-white mb-2 dark:bg-dark-card">
        <div
          className="w-0 h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300"
          style={{ width: `0%` }}
        ></div>
      </div>
      <div className="leading-normal mb-10 overflow-auto max-h-[calc(100vh-80px)] shadow-md rounded-lg p-4 bg-white dark:bg-dark-card">
        {courseData.lectures.map((lecture) => (
          <Accordion type="single" collapsible key={lecture._id}>
            <AccordionItem value={lecture._id.toString()}>
              <AccordionTrigger>
                <div className="line-clamp-1">
                  {lecture.title || "Chương Mới"}
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-3">
                  {lecture.lessons.map((lesson) => (
                    <LessonItem
                      key={lesson._id}
                      lesson={lesson}
                      url={`/${params.course}/lesson?slug=${lesson.slug}`}
                      isActive={lesson.slug === slug}
                      isChecked={histories?.some(
                        (el) => el.lesson.toString() === lesson._id.toString()
                      )}
                      histories={
                        histories ? JSON.parse(JSON.stringify(histories)) : []
                      }
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

export default Page;
