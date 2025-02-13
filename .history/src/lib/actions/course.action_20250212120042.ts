"use server";
import { TcreateCourseParams, TUpdateCourseParams } from "@/types";
import { connectToDatabase } from "../mongoose";
import Coures, { ICourse } from "@/database/course.model";
import { revalidatePath } from "next/cache";

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
    const findCourse = await Coures.findOne({ slug: params.slug });
    if (!findCourse) return;
    await Coures.findOneAndUpdate({ slug: params.slug }, params.updateData, {
      new: true,
    });
    revalidatePath("/");
    return {
      success: true,
      message: "Cập nhật khoá học thành công ",
    };
  } catch (error) {
    console.log("🚀 ~ updateCourse ~ error:", error);
  }
}
