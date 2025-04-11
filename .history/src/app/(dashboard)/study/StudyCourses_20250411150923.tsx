"use client";
import CourseItem from "@/components/course/CourseItem";
import { ICourse } from "@/database/course.model";

const StudyCourses = ({
  courses,
}: {
  courses: ICourse[] | null | undefined;
}) => {
  if (!courses || courses.length === 0) return null;
  return (
    <>
      {courses.length > 0 &&
        courses.map((item) => (
          <CourseItem
            key={item.slug}
            data={item}
            cta="Tiếp tục học"
            url="/"
          ></CourseItem>
        ))}
    </>
  );
};

export default StudyCourses;
