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
      <Heading className="mb-10">
        Nội dung: <strong className="text-primary">{findCourse.title}</strong>
      </Heading>
      <CoureUpdateContent
        course={JSON.parse(JSON.stringify(findCourse))}
      ></CoureUpdateContent>
    </>
  );
};

export default page;
