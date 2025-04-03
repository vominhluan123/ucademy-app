import { ICourse } from "@/database/course.model";
import { ILecture } from "@/database/lecture.model";

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
  updateData: {
    title?: string;
    order?: number;
    _destroy?: boolean;
    path?: string;
  };
};
type TCourseUpdateParams = {
  _id: string;
  slug: string;
  lectures: ILecture[];
  order: number;
};
export {
  TActiveLinkProps,
  TCourseUpdateParams,
  TcreateCourseParams,
  TCreateUserParams,
  TDeleteLectureParams,
  TMenueItem,
  TUpdateCourseParams,
  TUpdateLectureParams,
};
