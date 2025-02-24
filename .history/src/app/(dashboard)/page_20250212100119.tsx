import CourseItem from "@/components/course/CourseItem";
import Heading from "@/components/typography/Heading";
import { ICourse } from "@/database/course.model";
import { getAllCourses } from "@/lib/actions/course.action";
import React, { Fragment } from "react";

const page = async () => {
  const courses = (await getAllCourses()) || [];
  return (
    <Fragment>
      <Heading>Khám Phá</Heading>
      <div className="grid grid-cols-3 gap-8 mt-8">
        {courses?.length > 0 &&
          courses.map((item) => <CourseItem key={item.s}></CourseItem>)}
      </div>
    </Fragment>
  );
};

export default page;
