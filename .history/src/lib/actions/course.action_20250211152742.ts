"use server";
import { TcreateCourseParams } from "@/types";
import { connectToDatabase } from "../mongoose";
import Coures from "@/database/course.model";
export async function getCourseBySlug({ slug }: { slug: string }) {
  try {
    connectToDatabase();
    const findCourse = await Coures.findOne({ slug });
    return findCourse;
  } catch (error) {
    console.log(error);
  }
}
export async function createCourse(params: TcreateCourseParams) {
  try {
    connectToDatabase();
    const course = await Coures.create(params);
    return {
      success: true,
      data: JSON.parse(JSON.stringify(course)),
    };
  } catch (error) {
    console.log("🚀 ~ createCourse ~ error:", error);
  }
}
