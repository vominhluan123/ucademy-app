import CoureManage from "@/components/course/CoureManage";
import { getAllCourses } from "@/lib/actions/course.action";
import React from "react";

const page = async () => {
  const course = getAllCourses();
  return (
    <>
      <CoureManage course={course ? JSON.parse(JSON.stringify(course)) : []} />
    </>
  );
};

export default page;
