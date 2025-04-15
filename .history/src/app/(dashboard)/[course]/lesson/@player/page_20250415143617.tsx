import PageNotFound from "@/app/not-found";
import LessonLeft from "../LessonLeft";

const page = async () => {
  const [lessonDetails, lessonList] = await Promise.all([
    getLessonDetails({ slug, course: courseID }),
    findAllLessons({ course: courseID }),
  ]);
  if (!lessonDetails || !lessonList) return <PageNotFound />;
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
