"use server";
import Course from "@/database/course.model";
import Lecture from "@/database/lecture.model";
import Lesson from "@/database/lesson.modal";
import { TCreateLessonParams } from "@/types";
import { revalidatePath } from "next/cache";
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
    const newLesson = await Lesson.create(params);
    revalidatePath(params.path || "/");
    if (!newLesson) {
      return {
        success: false,
        message: "Tạo chương học thất bại",
      };
    }
    return {
      success: true,
    };
  } catch (error) {
    console.error(error);
  }
}
