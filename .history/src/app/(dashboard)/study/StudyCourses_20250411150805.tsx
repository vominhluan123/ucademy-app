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
  console.log("🚀 ~ courseUrls:", courseUrls);

  useEffect(() => {
    const data = localStorage.getItem("lastLesson");
    try {
      const parsed = JSON.parse(data || "{}");
      if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
        setCourseUrls(parsed);
      }
    } catch (e) {
      console.error("Không thể parse localStorage lastLesson", e);
    }
  }, []);

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
