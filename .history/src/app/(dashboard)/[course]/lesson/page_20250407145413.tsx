import { Button } from "@/components/ui/button";
import { getCourseBySlug } from "@/lib/actions/course.action";
import { getLessonDetails } from "@/lib/actions/lesson.action";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
        <div className="relative mb-5 aspect-video group">
          {videoId ? (
            <>
              <iframe
                className="w-full h-full rounded-lg object-fill"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`}
                allow="autoplay"
                allowFullScreen
              ></iframe>
              {/* Nút trái */}
              <button className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full opacity-0 group-hover:opacity-100 transition p-2">
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Nút phải */}
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition">
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          ) : (
            <div className="flex items-center justify-center w-full h-full bg-gray-100 rounded-lg">
              <p className="text-gray-500">
                Video đang được tải hoặc không khả dụng.
              </p>
            </div>
          )}
          <div className="flex items-center justify-between">
            <div className="flex gap-3">
              <Button></Button>
              <Button></Button>
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
