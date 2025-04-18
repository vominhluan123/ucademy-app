import CourseItem from "@/components/course/CourseItem";
import Heading from "@/components/typography/Heading";
import { getAllCoursesPublic } from "@/lib/actions/course.action";
import { Fragment } from "react";
export const revalidate = 0;
const page = async () => {
  const courses = (await getAllCoursesPublic({})) || [];
  return (
    <Fragment>
      <Heading>Khu vực khám phá</Heading>
      <div className="grid xl:grid-cols-3 md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4 lg:gap-6 mt-8 coures-slider">
        {courses?.length > 0 &&
          courses.map((item) => (
            <CourseItem key={item.slug} data={item}></CourseItem>
          ))}
      </div>
    </Fragment>
  );
};

export default page;
