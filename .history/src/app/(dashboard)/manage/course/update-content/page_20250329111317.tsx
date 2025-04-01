import Heading from "@/components/common/Heading";
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
    <>
      <Heading>
        Nội dung: <strong className="text-primary">{findCourse.title}</strong>
      </Heading>
    </>
  );
};

export default page;
