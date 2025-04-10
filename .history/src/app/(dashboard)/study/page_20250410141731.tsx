import CourseItem from "@/components/course/CourseItem";
import Heading from "@/components/typography/Heading";
import { getUserCourses } from "@/lib/actions/user.action";
import { Fragment } from "react";

const page = async () => {
  const courses = await getUserCourses();
  return (
    <Fragment>
      <Heading>Khu vực Học Tập</Heading>
      <div className="grid xl:grid-cols-3 md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4 lg:gap-6 mt-8 coures-slider">
        {courses &&
          courses?.length > 0 &&
          courses.map((item) => (
            <CourseItem
              key={item.slug}
              data={item}
              cta="Tiếp tục học"
            ></CourseItem>
          ))}
      </div>
    </Fragment>
  );
};

export default page;
