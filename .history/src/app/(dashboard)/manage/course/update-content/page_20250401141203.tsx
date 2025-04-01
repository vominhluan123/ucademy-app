import Heading from "@/components/common/Heading";
import CoureUpdateContent from "@/components/course/CoureUpdateContent";
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
      <Heading className="">
        Nội dung: <strong className="text-primary">{findCourse.title}</strong>
      </Heading>
      <CoureUpdateContent></CoureUpdateContent>
    </>
  );
};

export default page;
