"use server";
import { TcreateCourseParams } from "@/types";
import { connectToDatabase } from "../mongoose";
import Coures, { ICourse } from "@/database/course.model";

export async function getAllCourses(): Promise<ICourse[] | undefined> {
  try {
    connectToDatabase();
    const Courses = await Coures.find();
    return Courses;
  } catch (error) {
    console.log("🚀 ~ getAllCourses ~ error:", error);
  }
}

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
    const existCourse = await Coures.findOne({ slug: params.slug });
    if (existCourse) {
      return { success: false, message: "Đường dẫn khoá học đã tồn tại" };
    }
    const course = await Coures.create(params);
    return {
      success: true,
      data: JSON.parse(JSON.stringify(course)),
    };
  } catch (error) {
    console.log("🚀 ~ createCourse ~ error:", error);
  }
}
export async function updateCourse(params: TUpdateCourseParams) {
  try {
    connectToDatabase();
  } catch (error) {
    console.log("🚀 ~ updateCourse ~ error:", error);
  }
}
