import CoureManage from "@/components/course/CoureManage";
import { getAllCourses } from "@/lib/actions/course.action";

const page = async () => {
  const course = await getAllCourses();
  return (
    <>
      <CoureManage course={course ? JSON.parse(JSON.stringify(course)) : []} />
    </>
  );
};

export default page;
