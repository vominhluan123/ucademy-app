import { CourseUpdate } from "@/components/course/CourseUpdate";
import Heading from "@/components/typography/Heading";
import { getCourseBySlug } from "@/lib/actions/course.action";
import React, { Fragment } from "react";

const page = async ({
  searchParams,
}: {
  searchParams: {
    slug: string;
  };
}) => {
  const findCourse = await getCourseBySlug({ slug: searchParams.slug });
  return (
    <Fragment>
      <Heading className="mb-8">Cập Nhật Khoá Học</Heading>
      <CourseUpdate></CourseUpdate>
    </Fragment>
  );
};

export default page;
