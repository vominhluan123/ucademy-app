import CourseItem from "@/components/course/CourseItem";
import Heading from "@/components/typography/Heading";
import React, { Fragment } from "react";

const page = () => {
  return (
    <Fragment>
      <Heading>Khu vực học tập</Heading>
      <div className="grid grid-cols-3 gap-8 mt-8">
        <CourseItem></CourseItem>
        <CourseItem></CourseItem>
        <CourseItem></CourseItem>
      </div>
    </Fragment>
  );
};

export default page;
