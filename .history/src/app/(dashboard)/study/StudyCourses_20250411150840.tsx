"use client";
import CourseItem from "@/components/course/CourseItem";
import { ICourse } from "@/database/course.model";
import { useState } from "react";

const StudyCourses = ({
  courses,
}: {
  courses: ICourse[] | null | undefined;
}) => {
  const [courseUrls, setCourseUrls] = useState<{ [key: string]: string }>({});
  console.log("🚀 ~ courseUrls:", courseUrls);

  if (!courses || courses.length === 0) return null;

  return (
    <>
      {courses.map((item) => (
        <CourseItem
          key={item.slug}
          data={item}
          cta="Tiếp tục học"
          url={courseUrls[item.slug] || `/${item.slug}`}
        />
      ))}
    </>
  );
};

export default StudyCourses;
