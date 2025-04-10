import Heading from "@/components/common/Heading";
import LessonNavigation from "./LessonNavigation";
import LessonNavigationMobile from "./LessonNavigationMobile";
type LessonLeftProps = {
  videoId: string;
  course: string;
  title: string;
  content: string;
  nextLessonIndex?: any;
  prevLessonIndex?: any;
};
const LessonLeft = ({
  content,
  title,
  videoId,
  course,
  nextLessonIndex,
  prevLessonIndex,
}: LessonLeftProps) => {
  return (
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
              course={course}
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
              course={course}
            />
          </div>
          <div></div>
        </div>
      </div>
      <Heading className="mt-5 mb-5">{title}</Heading>
      <div className="p-5 rounded-lg dark:bg-dark-card bg-white">
        <div
          dangerouslySetInnerHTML={{
            __html: typeof content === "string" ? content : "",
          }}
        ></div>
      </div>
    </div>
  );
};

export default LessonLeft;
