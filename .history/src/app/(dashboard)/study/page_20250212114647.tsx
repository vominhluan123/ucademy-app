import CourseItem from "@/components/course/CourseItem";
import Heading from "@/components/typography/Heading";
import { getAllCourses } from "@/lib/actions/course.action";
import React, { Fragment } from "react";

const page = async () => {
  const courses = (await getAllCourses()) || [];
  return (
    <Fragment>
      <Heading>Khu vực Học Tập</Heading>
    </Fragment>
  );
};

export default page;
