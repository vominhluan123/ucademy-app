import CourseItem from "@/components/course/CourseItem";
import Heading from "@/components/typography/Heading";
import { getAllCourses } from "@/lib/actions/course.action";
import { Fragment } from "react";

const page = async () => {
  const courses = (await getAllCourses()) || [];
  return (
    <Fragment>
      <Heading>Khu vực khám phá</Heading>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 mt-8 coures-slider">
        {courses?.length > 0 &&
          courses.map((item) => (
            <CourseItem key={item.slug} data={item}></CourseItem>
          ))}
      </div>
    </Fragment>
  );
};

export default page;
