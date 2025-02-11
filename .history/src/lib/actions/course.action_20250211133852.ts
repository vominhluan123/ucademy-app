"use server";
import { TcreateCourseParams } from "@/types";
import { connectToDatabase } from "../mongoose";
import Coures from "@/database/course.model";

export async function createCourse(params: TcreateCourseParams) {
  try {
    connectToDatabase();
    const course = await Coures.create(params);
    return course;
  } catch (error) {
    console.log("🚀 ~ createCourse ~ error:", error);
  }
}
