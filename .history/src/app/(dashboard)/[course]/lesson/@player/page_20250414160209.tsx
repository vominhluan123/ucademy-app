import PageNotFound from "@/app/not-found";
import { getCourseBySlug, getLessonDetails, getUserInfo } from "@/lib/actions";
import { auth } from "@clerk/nextjs/server";
import LessonLeft from "../LessonLeft";

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

  const lessonDetails = await getLessonDetails({ slug, course: courseID });
  if (!lessonDetails) return <PageNotFound />;

  const videoId = lessonDetails?.video_url?.split("v=")[1];
  const url = `/${params.course}/lesson?slug=${slug}`;

  return (
    <LessonLeft
      title={lessonDetails.title}
      content={lessonDetails.content}
      course={params.course}
      videoId={videoId}
      nextLessonIndex={null}
      prevLessonIndex={null}
      url={url}
    />
  );
};

export default Page;
