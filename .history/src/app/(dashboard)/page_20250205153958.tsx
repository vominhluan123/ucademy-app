import CourseItem from "@/components/course/CourseItem";
import Heading from "@/components/typography/Heading";
import createUser from "@/lib/actions/user.action";
import React, { Fragment } from "react";

const page = async () => {
  const user = await createUser({
    clerkId: "123",
    email__address: "minhluan@gmail.com",
    username: "luan",
  });
  return (
    <Fragment>
      <Heading>Khám Phá</Heading>
      <div className="grid grid-cols-3 gap-8 mt-8">
        <CourseItem></CourseItem>
        <CourseItem></CourseItem>
        <CourseItem></CourseItem>
      </div>
    </Fragment>
  );
};

export default page;
