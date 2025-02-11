import { CourseUpdate } from "@/components/course/CourseUpdate";
import Heading from "@/components/typography/Heading";
import React, { Fragment } from "react";

const page = ({
  searchParams,
}: {
  searchParams: {
    slug: string;
  };
}) => {
  return (
    <Fragment>
      <Heading className="mb-8">Cập Nhật Khoá Học</Heading>
      <CourseUpdate></CourseUpdate>
    </Fragment>
  );
};

export default page;
