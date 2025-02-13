import { CourseUpdate } from "@/components/course/CourseUpdate";
import Heading from "@/components/typography/Heading";
import React from "react";

const page = ({
  searchParams,
}: {
  searchParams: {
    slug: string;
  };
}) => {
  return <Heading>Cập nhật khoá học</Heading>
  <CourseUpdate slug={searchParams.slug}></CourseUpdate>;
};

export default page;
