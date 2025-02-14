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
  console.log("🚀 ~ searchParams:", searchParams);
  const findCourse = await getCourseBySlug({ slug: searchParams.slug });
  if (!findCourse) return null;
  return (
    <Fragment>
      <Heading className="mb-8">Cập Nhật Khoá Học</Heading>
      <CourseUpdate
        data={JSON.parse(JSON.stringify(findCourse))}
      ></CourseUpdate>
    </Fragment>
  );
};

export default page;
