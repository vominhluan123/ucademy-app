import Heading from "@/components/typography/Heading";
import { getUserCourses } from "@/lib/actions/user.action";
import { Fragment } from "react";
import StudyCourses from "./StudyCourses";

const page = async () => {
  const courses = await getUserCourses();
  return (
    <Fragment>
      <Heading>Khu vực Học Tập</Heading>
      <div className="grid xl:grid-cols-3 md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4 lg:gap-6 mt-8 coures-slider">
        <StudyCourses courses={JSON.parse(JSON.stringify(courses || []))} />
      </div>
    </Fragment>
  );
};

export default page;
