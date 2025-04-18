import CoureManage from "@/components/course/CoureManage";
import { getAllCourses } from "@/lib/actions/course.action";
import { ECourseStatus } from "@/types/enum";

const page = async ({
  searchParams,
  totalPages,
}: {
  searchParams: {
    page: number;
    search: string;
    status: ECourseStatus;
  };
  totalPages: number;
}) => {
  const course = await getAllCourses({
    page: Number(searchParams.page) || 1,
    limit: 10,
    search: searchParams.search || "",
    status: searchParams.status || ECourseStatus.APPROVED,
  });
  return (
    <>
      <CoureManage course={course ? JSON.parse(JSON.stringify(course)) : []} />
    </>
  );
};

export default page;
