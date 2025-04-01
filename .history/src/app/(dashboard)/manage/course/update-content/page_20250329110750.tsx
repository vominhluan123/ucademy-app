import { getCourseBySlug } from "@/lib/actions/course.action";

const page = async ({
  searchParams,
}: {
  searchParams: {
    slug: string;
  };
}) => {
  const findCourse = await getCourseBySlug({ slug: searchParams.slug });
  console.log("🚀 ~ findCourse:", findCourse);
  if (!findCourse) return <div>Không tìm thấy khoá học</div>;
  return (
    <h1>
      Nội dung: <strong className="text-primary">{findCourse.title}</strong>
    </h1>
  );
};

export default page;
