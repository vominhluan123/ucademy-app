import { getCourseBySlug } from "@/lib/actions/course.action";

const page = async ({
  searchParams,
}: {
  searchParams: {
    slug: string;
  };
}) => {
  const findCourse = await getCourseBySlug({ slug: searchParams.slug });
  if (!findCourse) return <div>Không tìm thấy khoá học</div>;
  console.log("🚀 ~ findCourse:", findCourse);

  return <div>page</div>;
};

export default page;
