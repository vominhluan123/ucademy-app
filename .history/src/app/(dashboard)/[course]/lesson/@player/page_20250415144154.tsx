import PageNotFound from "@/app/not-found";
import { getCourseBySlug } from "@/lib/actions/course.action";
import { findAllLessons, getLessonDetails } from "@/lib/actions/lesson.action";
import LessonLeft from "../LessonLeft";

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
  const userCourseIds = findUser.courses.map((id) => id.toString());
  if (!userCourseIds.includes(courseID)) return <PageNotFound />;
  const [lessonDetails, lessonList] = await Promise.all([
    getLessonDetails({ slug, course: courseID }),
    findAllLessons({ course: courseID }),
  ]);
  if (!lessonDetails || !lessonList) return <PageNotFound />;
  const curentLessonIndex =
    lessonList?.findIndex((el) => el.slug === lessonDetails.slug) || 0;
  if (curentLessonIndex === -1) return <PageNotFound />;
  const nextLessonIndex = lessonList?.[curentLessonIndex + 1];
  const prevLessonIndex = lessonList?.[curentLessonIndex - 1];
  const videoId = lessonDetails?.video_url?.split("v=")[1];
  const url = `/${course}/lesson?slug=${slug}`;
  return (
    <div>
      <LessonLeft
        title={lessonDetails.title}
        content={lessonDetails.content}
        course={params.course}
        videoId={videoId}
        nextLessonIndex={nextLessonIndex}
        prevLessonIndex={prevLessonIndex}
        url={url}
      />
    </div>
  );
};

export default page;
