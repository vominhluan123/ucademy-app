import Heading from "@/components/typography/Heading";
import { getUserCourses } from "@/lib/actions/user.action";
import { Fragment } from "react";

const page = async () => {
  const courses = await getUserCourses();
  console.log("🚀 ~ page ~ courses:", courses);
  return (
    <Fragment>
      <Heading>Khu vực Học Tập</Heading>
    </Fragment>
  );
};

export default page;
