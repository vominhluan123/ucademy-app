import LessonLeft from "../LessonLeft";

const page = () => {
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
