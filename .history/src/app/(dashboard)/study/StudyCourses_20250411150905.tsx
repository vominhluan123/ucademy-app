"use client";
import CourseItem from "@/components/course/CourseItem";
import { ICourse } from "@/database/course.model";
import { useEffect, useState } from "react";

const StudyCourses = ({
  courses,
}: {
  courses: ICourse[] | null | undefined;
}) => {
  const [courseUrls, setCourseUrls] = useState<{ [key: string]: string }>({});
  useEffect(() => {
    const data = localStorage.getItem("lastLesson");
    const parsed = data ? JSON.parse(data) : {};
    setCourseUrls(parsed);
  }, []);
  if (!courses || courses.length >= 0) return null;
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
