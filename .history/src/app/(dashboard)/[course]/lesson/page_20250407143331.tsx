import { getCourseBySlug } from "@/lib/actions/course.action";
import { getLessonDetails } from "@/lib/actions/lesson.action";

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
  const lessonDetails = await getLessonDetails({
    slug,
    course: findCoures?._id.toString() || "",
  });
  if (!lessonDetails) {
    return null;
  }
  const videoId = lessonDetails?.video_url?.split("v=")[1];
  return (
    <div className="flex flex-col md:grid md:grid-cols-[2fr,1fr] gap-5 lg:gap-10 min-h-screen">
      <div>
        <div className="relative mb-5 aspect-video">
          {videoId ? (
            <iframe
              className="w-full h-full rounded-lg"
              src={`https://www.youtube.com/embed/${videoIda}?autoplay=1&mute=1`}
              allow="autoplay"
              allowFullScreen
            ></iframe>
          ) : (
            <div className="flex items-center justify-center w-full h-full bg-gray-100 rounded-lg">
              <p className="text-gray-500">
                Video đang được tải hoặc không khả dụng.
              </p>
            </div>
          )}
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default page;
