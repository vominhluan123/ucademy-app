import CoureManage from "@/components/course/CoureManage";
import { getAllCourses } from "@/lib/actions/course.action";
import React from "react";

const page = async () => {
  const course = getAllCourses();
  return (
    <>
      <CoureManage />
    </>
  );
};

export default page;
