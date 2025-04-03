"user server";
import { connectToDatabase } from "../mongoose";

export async function createLesson(params: TCreateLessonParams) {
  try {
    connectToDatabase();
  } catch (error) {
    console.error(error);
  }
}
