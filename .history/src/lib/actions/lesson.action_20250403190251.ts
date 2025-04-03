"user server";
import Course from "@/database/course.model";
import { TCreateLessonParams } from "@/types";
import { connectToDatabase } from "../mongoose";

export async function createLesson(params: TCreateLessonParams) {
  try {
    connectToDatabase();
    const findCoure = await Course.findById(params.course);
  } catch (error) {
    console.error(error);
  }
}
