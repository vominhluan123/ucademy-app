"user server";
import Course from "@/database/course.model";
import Lecture from "@/database/lecture.model";
import { TCreateLessonParams } from "@/types";
import { connectToDatabase } from "../mongoose";

export async function createLesson(params: TCreateLessonParams) {
  try {
    connectToDatabase();
    const findCoure = await Course.findById(params.course);
    if (!findCoure) {
      return {
        success: false,
        message: "Không tìm thấy khoá học",
      };
    }
    const findLeture = await Lecture.findById(params.lecture);
    if (!findLeture) {
      return {
        success: false,
        message: "Không tìm thấy chương học",
      };
    }
    const newLesson = await Lecture.create(params);
  } catch (error) {
    console.error(error);
  }
}
