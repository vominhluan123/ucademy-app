import { ICourse } from "@/database/course.model";
import { ILecture } from "@/database/lecture.model";
import { ILesson } from "@/database/lesson.modal";

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
  order?: number;
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
interface ICourseUpdateLecture extends ILecture {
  lessons: ILesson[];
}
export type TUpdateCoureseLecture = {
  _id: string;
  title: string;
  lessons: ILesson[];
};
interface TCourseUpdateParams extends Omit<ICourse, "lectures"> {
  lectures: TUpdateLecture[];
}
export type TCreateLessonParams = {
  lecture: string;
  course: string;
  title?: string;
  order?: number;
  path?: string;
  slug?: string;
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
