"user server";
import Course from "@/database/course.model";
import { TCreateLessonParams } from "@/types";
import { connectToDatabase } from "../mongoose";

export async function createLesson(params: TCreateLessonParams) {
  try {
    connectToDatabase();
    const findCoure = await Course.findById(params.course);
    if (!findCoure) {
      return {
        success: false,
        message: "Khong tim thay khoa hoc",
      };
    }
  } catch (error) {
    console.error(error);
  }
}
