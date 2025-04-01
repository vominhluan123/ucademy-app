import { ICourse } from "@/database/course.model";

type TActiveLinkProps = {
  url: string;
  children: React.ReactNode;
};
type TMenueItem = {
  url: string;
  title: string;
  icon: React.ReactNode;
  onlyIcon?: boolean;
};
type TCreateUserParams = {
  clerkId: string;
  username: string;
  email: string;
  name?: string;
  avatar?: string;
};
type TcreateCourseParams = {
  title: string;
  slug: string;
  author: string;
};
type TUpdateCourseParams = {
  slug: string;
  updateData: Partial<ICourse>;
  path?: string;
};
type TUpdateLectureParams = {
  course: string;
  title?: string;
  order?: string;
  path?: string;
};
type TDeleteLectureParams = {
  lectureId: string;
  title?: string;
  order?: string;
  _destroy?: boolean;
  path?: string;
};
export {
  TActiveLinkProps,
  TcreateCourseParams,
  TCreateUserParams,
  TDeleteLectureParams,
  TMenueItem,
  TUpdateCourseParams,
  TUpdateLectureParams,
};
