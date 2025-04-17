import CoureManage from "@/components/course/CoureManage";
import { getAllCourses } from "@/lib/actions/course.action";
import { ECourseStatus } from "@/types/enum";

const page = async () => {
  const course = await getAllCourses({
    page: 1,
    limit: 1,
    search: " photoshop",
    status: ECourseStatus.PENDING,
  });
  return (
    <>
      <CoureManage course={course ? JSON.parse(JSON.stringify(course)) : []} />
    </>
  );
};

export default page;
